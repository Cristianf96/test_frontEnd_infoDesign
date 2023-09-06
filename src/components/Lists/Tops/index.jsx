import { useState } from 'react'
import { Box, Tab } from '@mui/material';
import PropTypes from 'prop-types';
import { tabsListTop } from '../../../utils/constants';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Top from './components/Top';

const TopList = (props) => {

    const { data } = props
    
    const [value, setValue] = useState('0');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box marginTop={3}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange}>
                        <Tab label={tabsListTop.top.title} value="0" />
                    </TabList>
                </Box>
                <TabPanel value="0" >
                    <Top data={data} />
                </TabPanel>
            </TabContext>
        </Box>
    )
}

TopList.propTypes = {
    data: PropTypes.any,
};

export default TopList