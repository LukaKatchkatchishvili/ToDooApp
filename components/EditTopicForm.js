"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const EditTopicForm = ({ topic }) => {
  const router = useRouter();
  const { title, description, _id } = topic;
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const putEditTopic = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${_id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });
      router.push("/");

      if (!res.ok) {
        throw new Error("Failed to fetch topic");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="title.."
          className="border w-full px-5 py-3"
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="description.."
          className="border w-full px-5 py-3"
          onChange={(e) => setNewDescription(e.target.value)}
        />
      </div>
      <button
        className="bg-[#6acc79] border text-white py-3 px-5 mt-5"
        onClick={putEditTopic}
      >
        Edit Topic
      </button>
    </>
  );
};

export default EditTopicForm;
