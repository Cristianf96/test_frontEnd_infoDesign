import { useState } from 'react'
import { Box, Tab } from '@mui/material';
import PropTypes from 'prop-types';
import { tabsLists } from '../../../utils/constants';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Consumo from './components/Consumo';
import Costos from './components/Costos';
import Perdidas from './components/Perdidas';

const TramosList = (props) => {

    const { data } = props
    const [value, setValue] = useState('0');

    const handleChange = (event, newValue) => {
        console.log({ newValue })
        setValue(newValue);
    };

    return (
        <Box marginTop={3}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} centered>
                        <Tab label={tabsLists.consumo.title} value="0" />
                        <Tab label={tabsLists.costos.title} value="1" />
                        <Tab label={tabsLists.perdidas.title} value="2" />
                    </TabList>
                </Box>
                <TabPanel value="0" >
                    <Consumo data={data.CONSUMO_POR_TRAMO} />
                </TabPanel>
                <TabPanel value="1">
                    <Costos data={data.COSTOS_POR_TRAMO} />
                </TabPanel>
                <TabPanel value="2">
                    <Perdidas data={data.PERDIDAS_POR_TRAMO} />
                </TabPanel>
            </TabContext>
        </Box>
    )
}

TramosList.propTypes = {
    data: PropTypes.any,
};

export default TramosList