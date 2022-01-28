import { Button } from '@material-ui/core';
import { useStore } from '../SocketContext';

const Notifications = () => {
  const store = useStore();

  return (
    <>
      {store.call.isReceivedCall && !store.callAccepted && (
        <div style={{ display: 'flex', justifyContet: 'center' }}>
          <h1>{store.call.name} is calling</h1>

          <Button
            variant='contained'
            color='primary'
            onClick={store.answerCall}
          >
            Answer
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;
