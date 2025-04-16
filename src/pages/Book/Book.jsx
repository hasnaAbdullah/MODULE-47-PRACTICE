import { Star } from "lucide-react";
import React from "react";

function Book({ book }) {
  //   console.log(book);
  const { bookName, rating, category, image, author, tags } = book;
  return (
    <div className="p-5 mx-auto w-full max-w-[350px] space-y-6 bg-white border border-gray-200 rounded-lg">
      <figure className="bg-base-300 flex justify-center items-center p-6 rounded-lg">
        <img
          className="object-contain w-[134px] h-[166px]"
          src={image}
          alt=""
        />
      </figure>
      <div className="text-left">
        {tags.map((tag, i) => (
          <span className="mr-8  text-firstColor text-sm" key={i}>
            {tag}
          </span>
        ))}
      </div>
      <div>
        <h2 className="text-lg font-semibold text-left">{bookName}</h2>
        <h3 className="text-sm text-left">By: {author} </h3>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm">{category}</p>
        <div className="flex items-center gap-1">
          <span>{rating}</span>

          <Star size={16} />
        </div>
      </div>
    </div>
  );
}

export default Book;
