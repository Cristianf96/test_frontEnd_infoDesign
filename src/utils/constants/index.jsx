export const tabsLists = {
    consumo: { title: 'CONSUMO' },
    costos: { title: 'COSTOS' },
    perdidas: { title: 'PERDIDAS' },
}

export const columnsConsumo = [
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
        label: 'Residencial [Wh]',
        dataKey: 'residencial',
        numeric: true,
    },
    {
        width: 200,
        label: 'Comercial  [Wh]',
        dataKey: 'comercial',
        numeric: true,
    },
    {
        width: 200,
        label: 'Industrial  [Wh]',
        dataKey: 'industrial',
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