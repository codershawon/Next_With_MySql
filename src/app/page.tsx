"use client";
import React, { useEffect, useState } from 'react';

interface Post {
  id: number;
  name: string;
  created: string;
  updated: string;
}

const Page: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/posts');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Post[] = await response.json();
        setPosts(data);
        console.log(data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Next.js and MySQL connection</h1>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id}>
            <h2>The name is: {post.name}</h2>
            <p>Created on: {new Date(post.created).toLocaleString()}</p>
            <p>Updated on: {new Date(post.updated).toLocaleString()}</p>
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default Page;
