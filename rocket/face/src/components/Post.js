import React from 'react';

function Post({post}) {
    return(
        <div>
            <div><img src={post.author.avatar} /></div>
            <div>{post.author.name}</div>
            <div>{post.date}</div>
            <div>{post.content}</div>
            
        </div>
    );
}



export default Post;