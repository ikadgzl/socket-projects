import { useState } from 'react';
import './App.css';
import Card from './components/card/Card';
import Navbar from './components/navbar/Navbar';

import { posts } from './data';

function App() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);

  return (
    <div className='container'>
      {user ? (
        <>
          <Navbar />
          {posts.map((post) => (
            <Card key={post.id} post={post} />
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
