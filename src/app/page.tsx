"use client";
import React, { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  content: string | null;
  createdAt: string;
  updatedAt: string;
}

const Page: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/posts");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Post[] = await response.json();
        setPosts(data);
        console.log("Fetched posts:", data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
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
            <h2>Title: {post.title}</h2>
            <p>Content: {post.content || "No content available"}</p>
            <p>Created on: {new Date(post.createdAt).toLocaleString()}</p>
            <p>Updated on: {new Date(post.updatedAt).toLocaleString()}</p>
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default Page;