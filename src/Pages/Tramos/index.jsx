import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import DatePickers from '../../components/DatePickers'
import { Player } from '@lottiefiles/react-lottie-player';
import emptyList from '../../utils/Files/emptyList.json'

const Tramos = () => {

  const [dateInicial, setDateInicial] = useState(null)
  const [dateFinal, setDateFinal] = useState(null)
  const [data, setData] = useState({})
  const [error, setError] = useState(false)

  console.log('Tramos', {
    dateInicial,
    dateFinal,
    data
  })

  return (
    <Box>
      <DatePickers
        view='tramos'
        dateInicial={dateInicial}
        setDateInicial={setDateInicial}
        dateFinal={dateFinal}
        setDateFinal={setDateFinal}
        data={data}
        setData={setData}
        setError={setError}
      />
      {error && (
        <>
          <Typography
            variant="h7"
            component="div"
            color={'error'}
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Hay un problema con las fechas que seleccionaste o no has seleccionado alguna
          </Typography>
        </>
      )}
      {data === null && (
        <>
          <Typography
            variant="h7"
            component="div"
            color={'error'}
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            No hay informacion en las fechas seleccionadas
          </Typography>
        </>
      )}
      {dateInicial !== null && dateFinal !== null && data !== null && Object.keys(data).length > 0 ? (
        <>
          Tramos con la tabla
          {dateInicial}
          {dateFinal}
        </>
      ) : (
        <>
          <Player
            autoplay
            loop
            src={emptyList}
            style={{ height: '300px', width: '300px' }}
          />
        </>
      )}
    </Box>
  )
}

export default Tramos