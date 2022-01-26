import './card.css';

import Heart from '../../img/heart.svg';
import HeartFilled from '../../img/heartFilled.svg';
import Comment from '../../img/comment.svg';
import Share from '../../img/share.svg';
import Info from '../../img/info.svg';

const Card = ({ post }) => {
  return (
    <div className='card'>
      <div className='info'>
        <img src={post.userImg} alt={post.userImg} className='userImg' />
        <span>{post.fullname}</span>
      </div>

      <img src={post.postImg} alt={post.postImg} className='postImg' />

      <div className='interaction'>
        <img src={Heart} alt='heart svg' className='cardIcon' />
        <img src={Comment} alt='comment svg' className='cardIcon' />
        <img src={Share} alt='share svg' className='cardIcon' />
        <img src={Info} alt='info svg' className='cardIcon infoIcon' />
      </div>
    </div>
  );
};

export default Card;
