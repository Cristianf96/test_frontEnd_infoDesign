import PropTypes from 'prop-types';
import { columnsTops } from "../../../../utils/constants"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';

const Top = (props) => {

    const { data } = props

    const HeaderContentTable = () => {
        return (
            <TableRow>
                {columnsTops.map((column) => (
                    <TableCell
                        key={column.dataKey}
                        variant="head"
                        style={{ width: column.width }}
                        sx={{
                            backgroundColor: 'background.paper',
                        }}
                    >
                        {column.label}
                    </TableCell>
                ))}
            </TableRow>
        );
    }

    const BodyContenttable = () => {
        return (
            <>
                {data.map((row, index) => {
                    return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.linea}>
                            {columnsTops.map((column) => {
                                row['No.'] = index + 1
                                const value = row[column.label];
                                return (
                                    <TableCell key={new Date()}>
                                        {value}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    );
                })}
            </>
        )
    }

    return (
        <Box>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table" size="small">
                        <TableHead>
                            {HeaderContentTable()}
                        </TableHead>
                        <TableBody>
                            {BodyContenttable()}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    )
}

Top.propTypes = {
    data: PropTypes.array,
};

export default Top