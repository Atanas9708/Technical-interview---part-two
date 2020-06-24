import React from 'react';

export default function Post({ post }) {

  return (
    <div className="w3-ul w3-card-4">
      <h3 className="w3-bar-item">
        {post.title}
      </h3>
      <p className="w3-bar-item">
        {post.body}
      </p>
    </div>
  )

}