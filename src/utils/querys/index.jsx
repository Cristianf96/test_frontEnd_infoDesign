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

    return {
        CONSUMO_POR_TRAMO: datosFiltradosConsumo.length > 0 ? datosFiltradosConsumo : null,
        COSTOS_POR_TRAMO: datosFiltradosCostos.length > 0 ? datosFiltradosCostos : null,
        PERDIDAS_POR_TRAMO: datosFiltradosPerdidas.length > 0 ? datosFiltradosPerdidas : null
    }
}

export const queryClientes = (dateInicial, dateFinal) => {
    console.log('queryClientes :>> ', { dateInicial, dateFinal, dataFakeJson });

    return []
}

export const queryTop = (dateInicial, dateFinal) => {
    console.log('queryTop :>> ', { dateInicial, dateFinal, dataFakeJson });

    return []
}