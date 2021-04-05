import React from 'react';
import samplePosts from "../sampleData";
import moment from 'moment';

export class Feed extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    let newArray = this.props.blogs;
    newArray = this.props.blogs.sort(function compare(a, b) {
      var dateA = new Date(a.createdAt);
      var dateB = new Date(b.createdAt);
      return dateB - dateA;
    });

    return ( <div className="feed">
    <ul>
      {this.props.blogs.map((post,index)  =>
       <li className="feed-list-item" key={index}>
         <h1 className="feed-list-item-title" onClick={this.props.handleClick}>{post.title}</h1>
         <div className="feed-list-item-byline">
          <h2 className="feed-list-item-byline-author">{post.author}</h2> 
          <span>{moment(post.createdAt).fromNow()}</span>
         </div>
         <img src={post.imageUrl} onClick={this.props.handleClick} className="feed-list-item-image"/>
         <p className="feed-list-item-lede">{post.body}</p>
       </li> 
        )}
    </ul>
  </div>)
  }
}


export default Feed;
