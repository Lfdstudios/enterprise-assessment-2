import React, {Component} from 'react';
import moment from 'moment';

export class Post extends Component {
  render(){
    return(
    <div className="post">
    <h1 className="post-title">{this.props.selectedBlog.title}</h1>
    <div className="post-byline"><span className="post-byline-author">{this.props.selectedBlog.author}</span> {moment(this.props.selectedBlog.createdAt).fromNow()}</div>
    <img src={this.props.selectedBlog.imageUrl} className="post-image"/>
   <p>{this.props.selectedBlog.body}</p>
  </div>
    )}
}


export default Post;
