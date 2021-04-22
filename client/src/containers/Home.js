import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const initialData = useSelector((state) => state.example);

  return (
    <div>
      <h2>Home</h2>
      <h3>{JSON.stringify(initialData.payload)}</h3>
    </div>
  );
}

export default Home;
