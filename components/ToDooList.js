import React from "react";
import ToDooItem from "./ToDooItem";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};
const ToDooList = async () => {
  const { topics } = await getTopics();
  return (
    <div>
      {topics.map((topic) => (
        <ToDooItem topic={topic} />
      ))}
    </div>
  );
};

export default ToDooList;
