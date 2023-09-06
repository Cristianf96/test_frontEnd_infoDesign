import { useState } from 'react'
import { Box, Tab } from '@mui/material';
import PropTypes from 'prop-types';
import { tabsListClientes } from '../../../utils/constants';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Residencial from './components/Residencial';
import Comercial from './components/Comercial';
import Industrial from './components/Industrial';

const ClentesList = (props) => {

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
                        <Tab label={tabsListClientes.residencial.title} value="0" />
                        <Tab label={tabsListClientes.comercial.title} value="1" />
                        <Tab label={tabsListClientes.industrial.title} value="2" />
                    </TabList>
                </Box>
                <TabPanel value="0" >
                    <Residencial data={data.Residencial} />
                </TabPanel>
                <TabPanel value="1">
                    <Comercial data={data.Comercial} />
                </TabPanel>
                <TabPanel value="2">
                    <Industrial data={data.Industrial} />
                </TabPanel>
            </TabContext>
        </Box>
    )
}

ClentesList.propTypes = {
    data: PropTypes.any,
};

export default ClentesList