"use client";
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/posts');
      const data = await response.json();
      setPosts(data);
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Next.js and MySQL connection</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>The name is: {post.name}</h2>
          <p>Created on: {new Date(post.created).toLocaleString()}</p>
          <p>Updated on: {new Date(post.updated).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
