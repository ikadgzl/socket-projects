import { useState } from 'react';

import './card.css';

import Heart from '../../img/heart.svg';
import HeartFilled from '../../img/heartFilled.svg';
import Comment from '../../img/comment.svg';
import Share from '../../img/share.svg';
import Info from '../../img/info.svg';

const Card = ({ post, socket, user }) => {
  const [liked, setLiked] = useState(false);

  const getNotificationInfo = (type) => ({
    senderName: user,
    receiverName: post.username,
    type
  });

  const handleInteractions = (e) => {
    setLiked((prevLiked) => !prevLiked);

    socket.emit('sendNotification', getNotificationInfo(e.target.name));
  };

  return (
    <div className='card'>
      <div className='info'>
        <img src={post.userImg} alt={post.userImg} className='userImg' />
        <span>{post.fullname}</span>
      </div>

      <img src={post.postImg} alt={post.postImg} className='postImg' />

      <div className='interaction' onClick={handleInteractions}>
        {liked ? (
          <img
            src={HeartFilled}
            name='filledHeart'
            alt='filled heart svg'
            className='cardIcon'
          />
        ) : (
          <img src={Heart} name='heart' alt='heart svg' className='cardIcon' />
        )}
        <img
          src={Comment}
          name='comment'
          alt='comment svg'
          className='cardIcon'
        />
        <img src={Share} name='share' alt='share svg' className='cardIcon' />
        <img
          src={Info}
          name='info'
          alt='info svg'
          className='cardIcon infoIcon'
        />
      </div>
    </div>
  );
};

export default Card;
