import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Notifications from './components/Notifications';
import Options from './components/Options';
import VideoPlayer from './components/VideoPlayer';

const useStyles = makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography variant='h2' align='center'>
          VideoChat
        </Typography>
      </AppBar>

      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
}

export default App;
