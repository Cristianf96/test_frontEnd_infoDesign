import dataFakeJson from "../Files/dataFakeJson.json"
import moment from "moment";

const filtrarPorFecha = (item, fechaInicial, fechaFinal) => {
    const fechaItem = moment(item.Fecha).format("YYYY-MM-DD");
    const fechaInicio = moment(fechaInicial).format("YYYY-MM-DD");
    const fechaFin = moment(fechaFinal).format("YYYY-MM-DD");
    return fechaItem >= fechaInicio && fechaItem <= fechaFin;
}

export const queryTramos = (dateInicial, dateFinal) => {
    const datosFiltradosConsumo = dataFakeJson.CONSUMO_POR_TRAMO.filter(item => filtrarPorFecha(item, dateInicial, dateFinal));
    const datosFiltradosCostos = dataFakeJson.COSTOS_POR_TRAMO.filter(item => filtrarPorFecha(item, dateInicial, dateFinal));
    const datosFiltradosPerdidas = dataFakeJson.PERDIDAS_POR_TRAMO.filter(item => filtrarPorFecha(item, dateInicial, dateFinal));

    const historiasPorTramo = {};

    datosFiltradosConsumo.forEach((consumo, index) => {
        const tramo = consumo.Linea;

        const costos = datosFiltradosCostos.find((costo, indexC) => indexC === index);
        const perdidas = datosFiltradosPerdidas.find((perdida, indexP) => indexP === index);

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

export const queryClientes = (dateInicial, dateFinal) => {
    const datosFiltradosConsumo = dataFakeJson.CONSUMO_POR_TRAMO.filter(item => filtrarPorFecha(item, dateInicial, dateFinal));
    const datosFiltradosCostos = dataFakeJson.COSTOS_POR_TRAMO.filter(item => filtrarPorFecha(item, dateInicial, dateFinal));
    const datosFiltradosPerdidas = dataFakeJson.PERDIDAS_POR_TRAMO.filter(item => filtrarPorFecha(item, dateInicial, dateFinal));

    const agrupados = {
        Residencial: [],
        Comercial: [],
        Industrial: [],
    };

    const clientes = ['Residencial', 'Comercial', 'Industrial']

    for (let index = 0; index < clientes.length; index++) {
        const elementCliente = clientes[index];

        datosFiltradosConsumo.forEach((item, index) => {
            const tipoCliente = elementCliente;
            const costo = datosFiltradosCostos.find((c, indexC) => indexC === index);
            const perdida = datosFiltradosPerdidas.find((p, indexP) => indexP === index);

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

export const queryTop = (dateInicial, dateFinal) => {
    const datosFiltradosPerdidas = dataFakeJson.PERDIDAS_POR_TRAMO.filter(item => filtrarPorFecha(item, dateInicial, dateFinal));

    const perdidasTotalesPorTramo = {};

    datosFiltradosPerdidas.forEach((perdida) => {
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