import {
  Button,
  TextField,
  Grid,
  Typography,
  Container,
  Paper
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';
import { useStore } from '../SocketContext';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  gridContainer: {
    width: '100%'
  },
  container: {
    width: '600px',
    margin: '35px 0',
    padding: 0
  },
  margin: {
    marginTop: 20
  },
  padding: {
    padding: 20
  },
  paper: {
    padding: '10px 20px',
    border: '2px solid black'
  }
}));

const Options = ({ children }) => {
  const [idToCall, setIdToCall] = useState('');

  const store = useStore();
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Paper elevation={10} className={classes.paper}>
        <form className={classes.root} noValidate autoComplete='off'>
          <Grid container className={classes.gridCotnainer}>
            <Grid item md={6} className={classes.padding}>
              <Typography gutterBottom variant='h6'>
                Account Info
              </Typography>
              <TextField
                label='Name'
                value={store.name}
                onChange={(e) => store.setName(e.target.value)}
              />
              <CopyToClipboard text={store.me} className={classes.margin}>
                <Button
                  variant='contained'
                  color='primary'
                  fullWidth
                  startIcon={<Assignment fontSize='large' />}
                >
                  Copy Your ID
                </Button>
              </CopyToClipboard>
            </Grid>

            <Grid item md={6} className={classes.padding}>
              <Typography gutterBottom variant='h6'>
                Make a call
              </Typography>
              <TextField
                label='ID'
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
              />

              {store.callAccepted && !store.callEnded ? (
                <Button
                  variant='contained'
                  color='secondary'
                  startIcon={<PhoneDisabled fontSize='large' />}
                  fullWidth
                  className={classes.margin}
                  onClick={() => store.leaveCall()}
                >
                  Hang up
                </Button>
              ) : (
                <Button
                  variant='contained'
                  color='primary'
                  startIcon={<Phone fontSize='large' />}
                  fullWidth
                  className={classes.margin}
                  onClick={() => store.callUser(idToCall)}
                >
                  Call
                </Button>
              )}
            </Grid>
          </Grid>
        </form>

        {children}
      </Paper>
    </Container>
  );
};

export default Options;
