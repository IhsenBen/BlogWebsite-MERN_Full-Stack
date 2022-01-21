import './home.css';
import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Posts from '../../components/posts/Posts';
import axios from 'axios';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchedPosts = async () => {
      const res = await axios.get('/posts');
    //   console.log(res.data);
 setPosts(res.data);
    };
    fetchedPosts();
  }, []);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </>
  );
}
