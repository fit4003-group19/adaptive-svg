import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: "100vh"
  },
  paper: {
    height: "100%",
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  controlsRoot: {
    height: "100%"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>xs=8</Paper>
        </Grid>
        <Grid item xs={4} className={classes.root}>
            <Grid item xs={8}>
              <Paper className={classes.paper}>xs=8</Paper>
            </Grid>
            <Grid item xs={8}>
              <Paper className={classes.paper}>xs=8</Paper>
            </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
