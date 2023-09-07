import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import DatePickers from '../../components/DatePickers'
import { Player } from '@lottiefiles/react-lottie-player';
import emptyList from '../../utils/Files/emptyList.json'
import loadingData from "../../utils/Files/loadingData.json"
import TramosList from '../../components/Lists/Tramos'

const Tramos = () => {

  const [dateInicial, setDateInicial] = useState(null)
  const [dateFinal, setDateFinal] = useState(null)
  const [data, setData] = useState({})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  return (
    <Box>
      <Box textAlign={'center'} marginBottom={1}>
        <Typography
          variant="h3"
          component="div"
          color={'primary'}
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          TRAMOS
        </Typography>
      </Box>
      <DatePickers
        view='tramos'
        dateInicial={dateInicial}
        setDateInicial={setDateInicial}
        dateFinal={dateFinal}
        setDateFinal={setDateFinal}
        data={data}
        setData={setData}
        setError={setError}
        setLoading={setLoading}
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
      {!loading && data === null && (
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
      {loading ? (
        <>
          <Player
            autoplay
            loop
            src={loadingData}
            style={{ height: '400px', width: '400px' }}
          />
        </>
      ) : (
        <>
          {data !== null && Object.keys(data).length > 0 ? (
            <>
              <TramosList
                data={data}
              />
            </>
          ) : (
            <Box marginTop={3}>
              <Player
                autoplay
                loop
                src={emptyList}
                style={{ height: '300px', width: '300px' }}
              />
            </Box>
          )}

        </>
      )
      }
    </Box >
  )
}

export default Tramos