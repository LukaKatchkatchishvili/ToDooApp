import EditTopicForm from "@/components/EditTopicForm";
import ToDooItem from "@/components/ToDooItem";
import React from "react";
const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};
const page = async ({ params }) => {
  const { topic } = await getTopicById(params.id);
  return (
    <>
      <EditTopicForm topic={topic} />
    </>
  );
};

export default page;
