import React, {Component} from 'react';
import moment from 'moment';

export class Post extends Component {
  ConvertNewLineToBreak(str) {
    var strArr = str.split("\n");
    var finalOutput = []
    strArr.forEach(paragraph => {
      finalOutput.push(
        <p>{paragraph}</p>
      )
    });
    return finalOutput;
  }


  render(){
    return(
    <div className="post" key={1}>
    <h1 className="post-title">{this.props.selectedBlog.title}</h1>
    <div className="post-byline"><span className="post-byline-author">{this.props.selectedBlog.author}</span> {moment(this.props.selectedBlog.createdAt).fromNow()}</div>
    <img src={this.props.selectedBlog.imageUrl} className="post-image"/>
    {this.ConvertNewLineToBreak(this.props.selectedBlog.body)}
  </div>
    )}
}


export default Post;
