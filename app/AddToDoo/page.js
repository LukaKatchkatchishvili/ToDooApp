"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const EditTopic = () => {
  const router = useRouter();
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const addNewTopic = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/topics/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title: newTitle, description: newDescription }),
      });
      router.push("/");
      router.refresh();
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
          placeholder="Title.."
          className="border w-full px-5 py-3"
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description.."
          className="border w-full px-5 py-3"
          onChange={(e) => setNewDescription(e.target.value)}
        />
      </div>
      <button
        className="bg-[#6acc79] border text-white py-3 px-5 mt-5"
        onClick={addNewTopic}
      >
        Add Topic
      </button>
    </>
  );
};

export default EditTopic;
