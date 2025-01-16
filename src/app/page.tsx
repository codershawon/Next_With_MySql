"use client";
import React, { useEffect, useState } from "react";

interface Get {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

const Page: React.FC = () => {
  const [gets, setGets] = useState<Get[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/posts"); // This API now returns data for the "Get" model
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const { data }: { data: Get[] } = await response.json();
        setGets(data);
      } catch (error) {
        console.error("Failed to fetch Gets:", error);
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Next.js and MySQL connection</h1>
      {loading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : gets.length > 0 ? (
        gets.map((get) => (
          <div key={get.id}>
            <h2>Name: {get.name}</h2>
            <p>Email: {get.email}</p>
            <p>Password: {get.password}</p>
            <p>Created on: {new Date(get.createdAt).toLocaleString()}</p>
            <p>Updated on: {new Date(get.updatedAt).toLocaleString()}</p>
          </div>
        ))
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default Page;
