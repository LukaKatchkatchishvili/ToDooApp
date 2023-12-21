"use client";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useLoading } from "@/app/LoadingContext";

const RemoveBtn = ({ id }) => {
  const router = useRouter();
  const { startLoading, stopLoading } = useLoading();
  const removeTopic = async () => {
    try {
      startLoading();
      await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });
      router.refresh();
    } catch (error) {
      console.error("Error deleting topic:", error);
    } finally {
      stopLoading();
    }
  };

  return (
    <button onClick={() => removeTopic()} key={id}>
      <MdDelete size={25} />
    </button>
  );
};

export default RemoveBtn;
