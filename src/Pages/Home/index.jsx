import { Box } from "@mui/material"
import { Player } from '@lottiefiles/react-lottie-player';
import HelloHome from '../../utils/Files/HelloHome.json'

const Home = () => {
    return (
        <Box>
            <Player
                autoplay
                loop
                src={HelloHome}
                style={{ height: '600px', width: '600px' }}
            />
        </Box>
    )
}

export default Home