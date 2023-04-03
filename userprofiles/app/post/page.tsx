import Link from "next/link";
import { client } from "../../components/contentful/contentful";
import Image from "next/image";

const page = async () => {
  const response = await client.getEntries({ content_type: "post" });
  const data: any = response.items;

  return (
    <div className="flex w-full px-4 flex-wrap justify-evenly mb-10">
      {data.map((item: any, ind: number) => (
        <div
          key={ind}
          className="flex flex-col justify-between mt-8 items-center w-[400px] bg-slate-600 rounded-lg text-white p-4"
        >
          <h1 className="font-medium text-xl">{item.fields.title}</h1>
          <Image
            src={`https:${item.fields.coverImage.fields.file.url}`}
            alt="coverimage"
            width={300}
            height={300}
          />
          <div className="w-full flex flex-col justify-evenly items-center">
            <h1 className="text-white text-xl">
              Author : {item.fields.author.fields.name}
            </h1>
            <Link
              href={`/post/${item.fields.slug} `}
              className="bg-slate-300  text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-slate-100 hover:scale-105 transition-all duration-150"
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
