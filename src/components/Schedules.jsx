import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'; // Importa el componente Typography
import '../assets/style/schedules.css'

// Estilos personalizados para la tabla
const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
});

const rows = [
  { dia: 'Lunes a Sabado', hora: '10:00 - 13:00' },
  { dia: 'Domingo', hora: 'Cerrado', },
];

// Componente que renderiza el cuadro de horarios
function Schedules () {
  const classes = useStyles();

  return (
    <TableContainer className='schedule' component={Paper} style={{minWidth: '200px'}}>
      <Typography variant="h6" align="center">Horario de atención</Typography>
      <Table className={classes.table} aria-label="cuadro de horarios">
        <TableHead>
          <TableRow>
            <TableCell style={{width: '5%', textAlign: 'center'}}>Día</TableCell>
            <TableCell style={{width: '5%', textAlign: 'center'}}>Hora</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.dia}>
              <TableCell component="th" scope="row"  style={{ textAlign: 'center'}}>
                {row.dia}
              </TableCell>
              <TableCell align="right" style={{whiteSpace: 'normal', textAlign: 'center'}}>{row.hora}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Schedules;
