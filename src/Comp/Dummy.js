


[ {id: 12, name : 'Adventure'},
 {id: 28, name: 'Action'},
 {id: 16, name: 'Animation'},
 {id: 35, name: 'Comedy'},
 {id: 80, name: 'Crime'},
 {id: 99, name: 'Documentary'},
 {id: 18, name: 'Drama'},
 {id: 10751, name: 'Family'},
 {id: 14, name: 'Fantasy'},
 {id: 36, name: 'History'},
 {id: 27, name: 'Horror'},
 {id: 10402, name: 'Music'},
 {id: 9648, name: 'Mystery'},
 {id: 10749, name: 'Romance'},
 {id: 878, name: 'Science Fiction'},
 {id: 10770, name: 'TV Movie'},
 {id: 53, name: 'Thriller'},
 {id: 10752, name: 'War'},
 {id: 37, name: 'Western'}]



 import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
