import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useStore } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '550px'
  },
  gridContainer: {
    justifyContent: 'center'
  },
  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '10px'
  }
}));

const VideoPlayer = () => {
  const store = useStore();
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      {store.stream && (
        <Paper className={classes.paper}>
          <Grid item md={6}>
            <Typography variant='h5' gutterBottom>
              {store.name || 'You'}
            </Typography>
            <video
              playsInline
              muted
              ref={store.myVideo}
              autoPlay
              className={classes.video}
            />
          </Grid>
        </Paper>
      )}

      {store.callAccepted && !store.callEnded && (
        <Paper className={classes.paper}>
          <Grid item md={6}>
            <Typography variant='h5' gutterBottom>
              {store.call.name || 'Caller'}
            </Typography>
            <video
              playsInline
              muted
              ref={store.userVideo}
              autoPlay
              className={classes.video}
            />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
