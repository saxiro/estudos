import React, { Component } from 'react';

import Post from './Post';

const link = "https://s2.glbimg.com/UfmAWxwz7em_v5wr6GDQes5rHok=/90x68/s2.glbimg.com/acnHK0nvfk32esyPw_FfdZrYyy4=/1x0:296x295/75x75/s.glbimg.com/po/tt2/f/original/2015/09/29/snap.jpg";

class PostList extends Component {
    state = {
        posts: [
          {
            id: 1,
            author: {
              name: "Julio Alcantara",
              avatar: "https://s2.glbimg.com/UfmAWxwz7em_v5wr6GDQes5rHok=/90x68/s2.glbimg.com/acnHK0nvfk32esyPw_FfdZrYyy4=/1x0:296x295/75x75/s.glbimg.com/po/tt2/f/original/2015/09/29/snap.jpg"
            },
            date: "04 Jun 2019",
            content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
            comments: [
              {
                id: 1,
                author: {
                  name: "Diego Fernandes",
                  avatar: link
                },
                content: "Conteúdo do comentário"
              }
            ]
          },
          {
            id: 2,
            author: {
              name: "Julio Alcantara2",
              avatar: link
            },
            date: "04 Jun 2019",
            content: "Pessoal, alguém sabe se a Rocketseat está contratando?222",
            comments: [
              {
                id: 2,
                author: {
                  name: "Diego Fernandes2",
                  avatar: link
                },
                content: "Conteúdo do comentário2"
              }
            ]
          }

        ]
      };
    render(){
        return(
            <div id='postList'>
            <div>
                {this.state.posts.map(post => (
                    <Post key={post.id} post={post}/>
                    ))}
            </div>
            </div>
        );
    }
}

export default PostList;