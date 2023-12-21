import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const ToDooItem = ({ topic }) => {
  const { title, description, _id } = topic;

  return (
    <div className="border flex justify-between p-4" key={_id}>
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <h5>{description}</h5>
      </div>
      <div className="icons flex items-center gap-5">
        <Link href={`/editTopic/${_id}`}>
          <HiPencilAlt size={24} />
        </Link>
        <RemoveBtn id={_id} />
      </div>
    </div>
  );
};

export default ToDooItem;
