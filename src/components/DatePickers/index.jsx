import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, Typography, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';
import moment from 'moment';
import { queryTramos } from '../../utils/querys';

const DatePickers = (props) => {

    const {
        view,
        dateInicial,
        setDateInicial,
        dateFinal,
        setDateFinal,
        // data,
        setData,
        setError
    } = props

    const searchDataAndFilter = () => {
        if (dateInicial !== null && dateFinal !== null && dateInicial <= dateFinal) {
            setError(false)
            switch (view) {
                case 'tramos': {
                    const newData = queryTramos(dateInicial, dateFinal)

                    if (newData.CONSUMO_POR_TRAMO && newData.COSTOS_POR_TRAMO && newData.PERDIDAS_POR_TRAMO) {
                        setData(newData)
                    } else {
                        setData(null)
                    }
                    break;
                }
                default:
                    break;
            }
        } else {
            setError(true)
        }
    }

    const changeFormatDate = (datePicker, date) => {
        const newDate = moment(date).format('YYYY-MM-DD')
        if (newDate !== null && newDate !== undefined) {
            if (datePicker === 'inicial') return setDateInicial(newDate)
            setDateFinal(newDate)
        }
    }

    const handleClearDates = () => {
        setDateInicial(null)
        setDateFinal(null)
        setData({})
        setError(false)
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 1
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 1
                }}
            >
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <Box>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography>
                                {'Fecha Inicial'}
                            </Typography>
                        </Box>
                        <Box>
                            <DatePicker value={dateInicial && moment(dateInicial)} onChange={(newValue) => changeFormatDate('inicial', newValue)} maxDate={moment()} />
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography>
                                {'Fecha Final'}
                            </Typography>
                        </Box>
                        <Box>
                            <DatePicker value={dateFinal && moment(dateFinal)} onChange={(newValue) => changeFormatDate('final', newValue)} maxDate={moment()} />
                        </Box>
                    </Box>
                </LocalizationProvider>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 1,
                    marginTop: 3
                }}
            >
                <Box>
                    <Button variant="contained" endIcon={<SearchIcon />} onClick={searchDataAndFilter}>
                        Buscar
                    </Button>
                </Box>
                {(dateInicial !== null || dateFinal !== null) && (
                    <Box>
                        <Button variant="contained" color='error' endIcon={<SearchIcon />} onClick={handleClearDates}>
                            Limpiar
                        </Button>
                    </Box>
                )}
            </Box>
        </Box>
    )
}

DatePickers.propTypes = {
    view: PropTypes.string,
    dateInicial: PropTypes.any,
    setDateInicial: PropTypes.func,
    dateFinal: PropTypes.any,
    setDateFinal: PropTypes.func,
    data: PropTypes.any,
    setData: PropTypes.func,
    setError: PropTypes.func
};

export default DatePickers