import React from 'react';
import samplePosts from "../sampleData";
import moment from 'moment';

const Feed = (props) => (
  <div className="feed">
    <ul>
      {props.blogs.map((post,index)  =>
       <li className="feed-list-item" key={index}>
         <h1 className="feed-list-item-title" onClick={props.handleClick}>{post.title}</h1>
         <div className="feed-list-item-byline">
          <h2 className="feed-list-item-byline-author">{post.author}</h2> 
          <span>{moment(post.createdAt).fromNow()}</span>
         </div>
         <img src={post.imageUrl} onClick={props.handleClick} className="feed-list-item-image"/>
         <p className="feed-list-item-lede">{post.body}</p>
       </li> 
        )}
    </ul>
  </div>
);

export default Feed;
