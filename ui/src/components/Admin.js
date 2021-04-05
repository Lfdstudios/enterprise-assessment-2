import React from 'react';
import samplePosts from "../sampleData";
import moment from 'moment';

export class Admin extends React.Component {
  constructor(props) {
    super(props)
  }




  render() {

    return ( 
        <div>
        <ul>
        {this.props.blogs.map((post,index)  =>
          <li className="post-list-entry" key={index}>
            <div className="post-list-entry-title">{post.title}</div>
            <div className="post-list-entry-byline">{post.author}, {post.createdAt}</div>
            <div className="stats-list-item-views">{post.views}</div>
          </li>
          )}
        </ul>
      </div>
    )
  }
}


export default Admin;