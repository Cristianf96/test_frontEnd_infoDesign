import axios from 'axios';

export const queryTramos = async (dateInicial, dateFinal) => {

    const response = await axios.get(`${import.meta.env.VITE_URL_PATH_TRAMOSANDCLIENTES}?dateInicial=${dateInicial}&dateFinal=${dateFinal}`)
        .then(response => {
            const data = response.data;
            return data
        })
        .catch(error => {
            console.error('There was a problem with the request:', error);
        });

    const historiasPorTramo = {};

    response.datosFiltradosConsumo.forEach((consumo, index) => {
        const tramo = consumo.Linea;

        const costos = response.datosFiltradosCostos.find((costo, indexC) => indexC === index);
        const perdidas = response.datosFiltradosPerdidas.find((perdida, indexP) => indexP === index);

        const historia = {
            Linea: tramo,
            Fecha: consumo.Fecha,
            Consumo_residencial: consumo[`Residencial [Wh]`] ? consumo[`Residencial [Wh]`] : consumo[`Residencial  [Wh]`],
            Consumo_comercial: consumo[`Comercial [Wh]`] ? consumo[`Comercial [Wh]`] : consumo[`Comercial  [Wh]`],
            Consumo_industrial: consumo[`Industrial [Wh]`] ? consumo[`Industrial [Wh]`] : consumo[`Industrial  [Wh]`],
            Perdidas_residencial: perdidas[`Residencial [%]`],
            Perdidas_comercial: perdidas[`Comercial [%]`],
            Perdidas_industrial: perdidas[`Industrial [%]`],
            Costo_residencial: costos[`Residencial [Costo/Wh]`] * consumo[`Residencial [Wh]`] ? consumo[`Residencial [Wh]`] : consumo[`Residencial  [Wh]`],
            Costo_comercial: costos[`Comercial [Costo/Wh]`] * consumo[`Comercial [Wh]`] ? consumo[`Comercial [Wh]`] : consumo[`Comercial  [Wh]`],
            Costo_industrial: costos[`Industrial [Costo/Wh]`] * consumo[`Industrial [Wh]`] ? consumo[`Industrial [Wh]`] : consumo[`Industrial  [Wh]`],
        };

        if (!historiasPorTramo[tramo]) {
            historiasPorTramo[tramo] = [];
        }
        historiasPorTramo[tramo].push(historia);
    });

    return historiasPorTramo;
}

export const queryClientes = async (dateInicial, dateFinal) => {

    const response = await axios.get(`${import.meta.env.VITE_URL_PATH_TRAMOSANDCLIENTES}?dateInicial=${dateInicial}&dateFinal=${dateFinal}`)
        .then(response => {
            const data = response.data;
            return data
        })
        .catch(error => {
            console.error('There was a problem with the request:', error);
        });

    const agrupados = {
        Residencial: [],
        Comercial: [],
        Industrial: [],
    };

    const clientes = ['Residencial', 'Comercial', 'Industrial']

    for (let index = 0; index < clientes.length; index++) {
        const elementCliente = clientes[index];

        response.datosFiltradosConsumo.forEach((item, index) => {
            const tipoCliente = elementCliente;
            const costo = response.datosFiltradosCostos.find((c, indexC) => indexC === index);
            const perdida = response.datosFiltradosPerdidas.find((p, indexP) => indexP === index);

            if (costo && perdida) {
                const consumo = item[`${elementCliente} [Wh]`] ? item[`${elementCliente} [Wh]`] : item[`${elementCliente}  [Wh]`];
                const perdidaPorcentaje = perdida[`${elementCliente} [%]`];
                const costoPorWh = costo[`${elementCliente} [Costo/Wh]`];
                const costoTotal = consumo * costoPorWh;

                const resultado = {
                    Linea: item.Linea,
                    Fecha: item.Fecha,
                    Consumo: consumo,
                    Pérdidas: perdidaPorcentaje,
                    Costo: costoTotal,
                };

                agrupados[tipoCliente].push(resultado);
            }
        });
    }

    return agrupados;
}

export const queryTop = async (dateInicial, dateFinal) => {

    const response = await axios.get(`${import.meta.env.VITE_URL_PATH_TOP}?dateInicial=${dateInicial}&dateFinal=${dateFinal}`)
        .then(response => {
            const data = response.data;
            return data
        })
        .catch(error => {
            console.error('There was a problem with the request:', error);
        });

    const perdidasTotalesPorTramo = {};

    response.datosFiltradosPerdidas.forEach((perdida) => {
        const tramo = perdida.Linea;
        const perdidaTotal = perdida["Residencial [%]"] + perdida["Comercial [%]"] + perdida["Industrial [%]"];

        if (!perdidasTotalesPorTramo[tramo]) {
            perdidasTotalesPorTramo[tramo] = perdidaTotal;
        } else {
            perdidasTotalesPorTramo[tramo] += perdidaTotal;
        }
    });

    const tramosOrdenadosPorPerdidas = Object.entries(perdidasTotalesPorTramo)
        .sort(([, perdidasA], [, perdidasB]) => perdidasB - perdidasA)
        .map(([tramo, value]) => ({ Linea: tramo, ['Total [%]']: value }));

    return tramosOrdenadosPorPerdidas;
};