export const tabsListTramos = {
    'Tramo 1': { title: 'TRAMO 1' },
    'Tramo 2': { title: 'TRAMO 2' },
    'Tramo 3': { title: 'TRAMO 3' },
    'Tramo 4': { title: 'TRAMO 4' },
    'Tramo 5': { title: 'TRAMO 5' },
}

export const tabsListClientes = {
    residencial: { title: 'RESIDENCIAL' },
    industrial: { title: 'INDUSTRIAL' },
    comercial: { title: 'COMERCIAL' },
}

export const columnsTramos = [
    {
        width: 10,
        label: 'No.',
        dataKey: 'No.',
    },
    {
        width: 200,
        label: 'Linea',
        dataKey: 'Linea',
    },
    {
        width: 200,
        label: 'Fecha',
        dataKey: 'Fecha',
    },
    {
        width: 200,
        label: 'Consumo Residencial [Wh]',
        dataKey: 'Consumo_residencial',
        numeric: true,
    },
    {
        width: 200,
        label: 'Consumo Comercial  [Wh]',
        dataKey: 'Consumo_comercial',
        numeric: true,
    },
    {
        width: 200,
        label: 'Consumo Industrial  [Wh]',
        dataKey: 'Consumo_industrial',
        numeric: true,
    },
    {
        width: 200,
        label: 'Perdidas Residencial [%]',
        dataKey: 'Perdidas_residencial',
        numeric: true,
    },
    {
        width: 200,
        label: 'Perdidas Comercial  [%]',
        dataKey: 'Perdidas_comercial',
        numeric: true,
    },
    {
        width: 200,
        label: 'Perdidas Industrial  [%]',
        dataKey: 'Perdidas_industrial',
        numeric: true,
    },
    {
        width: 200,
        label: 'Costos Residencial [Costo/Wh]',
        dataKey: 'Costo_residencial',
        numeric: true,
    },
    {
        width: 200,
        label: 'Costos Comercial  [Costo/Wh]',
        dataKey: 'Costo_comercial',
        numeric: true,
    },
    {
        width: 200,
        label: 'Costos Industrial  [Costo/Wh]',
        dataKey: 'Costo_industrial',
        numeric: true,
    },
];

export const columnsCostos = [
    {
        width: 10,
        label: 'No.',
        dataKey: 'no.',
    },
    {
        width: 200,
        label: 'Linea',
        dataKey: 'linea',
    },
    {
        width: 120,
        label: 'Fecha',
        dataKey: 'fecha',
    },
    {
        width: 200,
        label: 'Residencial [Costo/Wh]',
        dataKey: 'residencial',
        numeric: true,
    },
    {
        width: 200,
        label: 'Comercial [Costo/Wh]',
        dataKey: 'comercial',
        numeric: true,
    },
    {
        width: 200,
        label: 'Industrial [Costo/Wh]',
        dataKey: 'industrial',
        numeric: true,
    },
];

export const columnsPerdidas = [
    {
        width: 10,
        label: 'No.',
        dataKey: 'no.',
    },
    {
        width: 200,
        label: 'Linea',
        dataKey: 'linea',
    },
    {
        width: 120,
        label: 'Fecha',
        dataKey: 'fecha',
    },
    {
        width: 200,
        label: 'Residencial [%]',
        dataKey: 'residencial',
        numeric: true,
    },
    {
        width: 200,
        label: 'Comercial [%]',
        dataKey: 'comercial',
        numeric: true,
    },
    {
        width: 200,
        label: 'Industrial [%]',
        dataKey: 'industrial',
        numeric: true,
    },
];

export const columnsClientes = [
    {
        width: 10,
        label: 'No.',
        dataKey: 'no.',
    },
    {
        width: 200,
        label: 'Linea',
        dataKey: 'linea',
    },
    {
        width: 120,
        label: 'Fecha',
        dataKey: 'fecha',
    },
    {
        width: 200,
        label: 'Consumo',
        dataKey: 'Consumo',
        numeric: true,
    },
    {
        width: 200,
        label: 'Pérdidas',
        dataKey: 'Pérdidas',
        numeric: true,
    },
    {
        width: 200,
        label: 'Costo',
        dataKey: 'Costo',
        numeric: true,
    },
];