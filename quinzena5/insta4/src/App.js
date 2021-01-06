import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import ele from './img/ol.png'
import deathnote from './img/death-note.jpg'
import akame from './img/akame_perfil.png'
import akamePost from './img/akame.png'


class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'Akame'}
          fotoUsuario={akame}
          fotoPost={akamePost}
        />
        <Post
          nomeUsuario={'L'}
          fotoUsuario={ele}
          fotoPost={deathnote}
        />
        <Post
          nomeUsuario={'bruna'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
      </div>
    );
  }
}

export default App;
