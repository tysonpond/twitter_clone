import React from 'react';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import AutorenewOutlinedIcon from '@material-ui/icons/AutorenewOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

const Tweet = ({ content_text }) => {
  // Toy data helper function
  function randRange(min=0, max=1) {
    min = Math.ceil(min);
    max = Math.floor(max)+1;
    return Math.floor(Math.random() * (max - min) + min);
  }

  // Toy data choices
  const authors = [
    {name:'xQc', handle:'xQc', avatar:'https://pbs.twimg.com/profile_images/1188911868863221772/fpcyKuIW_400x400.jpg', isVerified:1}, 
    {name:'loltyler1', handle:'loltyler1', avatar:'https://pbs.twimg.com/profile_images/693320968811380736/g3cD_R1A_400x400.png', isVerified:1},
    {name:'summit1g', handle:'summit1g', avatar:'https://pbs.twimg.com/profile_images/1253450626500923393/k3QBhmHk_400x400.jpg', isVerified:0},
    {name:'Sebastian Fors', handle:'forsen', avatar:'https://pbs.twimg.com/profile_images/472354105822687232/6B0jgEqM_400x400.jpeg', isVerified:0}
  ];
  
  // Toy data
  const tweetReplies = randRange(0,100);
  const tweetRetweets = randRange(0,100);
  const tweetLikes = randRange(0,1000);
  const author = authors[randRange(0,authors.length-1)];
  const creationDate = {
    day: randRange(0,28), 
    month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][randRange(0,12)], 
    year: randRange(2019,2021)
  };

  return (
    <div className="tweet"> 
      <div className="tweet__gutter">
        <img src={author.avatar} height="50" width="50"></img>
      </div>
      <div className="tweet__body">
        <div className="tweet__header">
          <span className="tweet__header__name">{author.name}</span>
          {author.isVerified ? <VerifiedUserIcon /> : ''}
          <span className="tweet__header__details">@{author.handle} • {creationDate.month} {creationDate.day}, {creationDate.year}</span>
        </div>
        <p>{content_text}</p>
        <div className="tweet__icons-row">
          <div className="tweet__icons-replies"><ChatBubbleOutlineOutlinedIcon /> <span>{tweetReplies}</span></div>
          <div className="tweet__icons-retweets"><AutorenewOutlinedIcon /> <span>{tweetRetweets}</span></div>
          <div className="tweet__icons-likes"><FavoriteBorderOutlinedIcon /> <span>{tweetLikes}</span></div>
          <div className="tweet__icons-share"><PublishOutlinedIcon /> </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
