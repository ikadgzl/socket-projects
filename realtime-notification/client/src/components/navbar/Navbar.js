import './navbar.css';

import Notification from '../../img/notification.svg';
import Message from '../../img/message.svg';
import Settings from '../../img/settings.svg';
import { useEffect, useState } from 'react';

const Navbar = ({ socket }) => {
  const [toggleNotifications, setToggleNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const handleTogglingNotifications = (e) => {
    if (e.target.className === 'iconImg') {
      setToggleNotifications(
        (prevToggleNotifications) => !prevToggleNotifications
      );
    }
  };

  const handleClearingNotifications = () => {
    setNotifications([]);
    setToggleNotifications(false);
  };

  useEffect(() => {
    socket.on('getNotification', (newNotification) => {
      setNotifications((prevNotification) => [
        ...prevNotification,
        newNotification
      ]);
    });
  }, [socket]);

  return (
    <div className='navbar'>
      <span className='logo'>Realtime App</span>

      {/* TO-DO: make icon its own component */}
      <div className='icons' onClick={handleTogglingNotifications}>
        <div className='icon'>
          <img src={Notification} alt='notification logo' className='iconImg' />
          {notifications.length > 0 && (
            <div className='counter'>{notifications.length}</div>
          )}
        </div>

        <div className='icon'>
          <img src={Message} alt='message logo' className='iconImg' />
          <div className='counter'>1</div>
        </div>

        <div className='icon'>
          <img src={Settings} alt='settings logo' className='iconImg' />
        </div>
      </div>

      {toggleNotifications && (
        <div className='notifications'>
          {notifications.map((notification, idx) => (
            <span key={idx} className='notification'>
              {notification.senderName} {notification.type} your post
            </span>
          ))}

          <button
            className='notificationButton'
            onClick={handleClearingNotifications}
          >
            Mark as read
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
