"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Showauthor = ({ author, response }: any) => {
  const [data, setdata] = useState([]);

  const showAuthorPost = (a: string) => {
    let tempdata = response.map((item: any) => {
      console.log(item.fields.author.fields.name);
      if (item.fields.author.fields.name === a) {
        const title = item.fields.title;
        const image = item.fields.coverImage.fields.file.url;
        const author = item.fields.author.fields.name;
        const slug = item.fields.slug;
        return { title, image, author, slug };
      } else return null;
    });
    console.log(tempdata);
    setdata(tempdata);
  };

  return (
    <div className="w-full mb-10">
      <p className="p-4 font-medium text-xl">Select Authors Name</p>
      <div className="flex w-full space-x-8 p-4">
        {author.map((a: string, ind: number) => (
          <button
            key={ind}
            onClick={() => showAuthorPost(a)}
            className="font-bold text-xl bg-slate-600 px-4 py-2 rounded-md
             text-gray-100 hover:bg-slate-800 hover:scale-105 transition-all duration-150"
          >
            {a}
          </button>
        ))}
      </div>
      <div className="flex w-full px-4 flex-wrap justify-evenly ">
        {data &&
          data.map((d: any, ind: number) =>
            d !== null ? (
              <div
                key={ind}
                className="flex flex-col justify-between mt-8 items-center w-[500px] bg-slate-600 rounded-lg text-white p-4"
              >
                <h1 className="font-bold text-2xl ">{d.title}</h1>
                <Image
                  src={`https:${d.image}`}
                  alt="coverImage"
                  width={400}
                  height={400}
                />
                <div className="w-full flex flex-col justify-evenly items-center">
                  <p className="text-xl">
                    Author Name : <span className="font-bold ">{d.author}</span>
                  </p>
                  <Link
                    href={`/post/${d.slug}`}
                    className="bg-slate-300  text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-slate-100 hover:scale-105 transition-all duration-150"
                  >
                    View More
                  </Link>
                </div>
              </div>
            ) : null
          )}
      </div>
    </div>
  );
};

export default Showauthor;
