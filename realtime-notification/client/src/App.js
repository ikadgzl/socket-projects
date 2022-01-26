import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card/Card';
import Navbar from './components/navbar/Navbar';
import { io } from 'socket.io-client';

import { posts } from './data';

function App() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setSocket(io('http://localhost:4000'));
  }, []);

  useEffect(() => {
    if (user) {
      socket?.emit('newUser', user);
    }
  }, [socket, user]);

  return (
    <div className='container'>
      {user ? (
        <>
          <Navbar socket={socket} />
          {posts.map((post) => (
            <Card key={post.id} post={post} socket={socket} user={user} />
          ))}

          <span className='username'>{user}</span>
        </>
      ) : (
        <section className='login'>
          <input
            type='text'
            placeholder='Enter your username...'
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => setUser(username)}>Login</button>
        </section>
      )}
    </div>
  );
}

export default App;
