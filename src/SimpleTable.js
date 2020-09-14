import React from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import colorData from './utils/colorData'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// Styled Component to style Button Component
const MyTableHead = styled(TableHead)({
  background: 'linear-gradient(45deg, #2196F3 30%, #FF8E53 90%)',
  borderRadius: 3,
  borderWidth: '30px',
  borderColor: 'purple',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});
/*
const MyTableCell = styled(TableCell)({
  color: 'red',
  borderWidth: '3px',
  borderColor: 'purple',

});
*/

const rows = colorData

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Color</TableCell>
            <TableCell align="right">Hex</TableCell>
            <TableCell align="right">Year&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.color}</TableCell>
              <TableCell align="right">{row.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
