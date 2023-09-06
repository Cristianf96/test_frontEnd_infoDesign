import { useState } from 'react'
import { Box, Tab } from '@mui/material';
import PropTypes from 'prop-types';
import { tabsListTramos } from '../../../utils/constants';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tramos_1 from './components/Tramo_1';
import Tramos_2 from './components/Tramo_2';
import Tramos_3 from './components/Tramo_3';
import Tramos_4 from './components/Tramo_4';
import Tramos_5 from './components/Tramo_5';

const TramosList = (props) => {

    const { data } = props
    const [value, setValue] = useState('0');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box marginTop={3}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} centered>
                        <Tab label={tabsListTramos['Tramo 1'].title} value="0" />
                        <Tab label={tabsListTramos['Tramo 2'].title} value="1" />
                        <Tab label={tabsListTramos['Tramo 3'].title} value="2" />
                        <Tab label={tabsListTramos['Tramo 4'].title} value="3" />
                        <Tab label={tabsListTramos['Tramo 5'].title} value="4" />
                    </TabList>
                </Box>
                <TabPanel value="0" >
                    <Tramos_1 data={data['Tramo 1']} />
                </TabPanel>
                <TabPanel value="1">
                    <Tramos_2 data={data['Tramo 2']} />
                </TabPanel>
                <TabPanel value="2">
                    <Tramos_3 data={data['Tramo 3']} />
                </TabPanel>
                <TabPanel value="3">
                    <Tramos_4 data={data['Tramo 4']} />
                </TabPanel>
                <TabPanel value="4">
                    <Tramos_5 data={data['Tramo 5']} />
                </TabPanel>
            </TabContext>
        </Box>
    )
}

TramosList.propTypes = {
    data: PropTypes.any,
};

export default TramosList