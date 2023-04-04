import { client } from "../../../components/contentful/contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import Link from "next/link";

export async function generateStaticParams() {
  const response = await client.getEntries({ content_type: "post" });
  return response.items.map((item: any) => ({
    slug: item.fields.slug,
  }));
}

const options = {
  renderMark: {
    [MARKS.CODE]: (text: any) => {
      return (
        <pre>
          <code>{text}</code>
        </pre>
      );
    },
  },
  renderNode: {
    [INLINES.ENTRY_HYPERLINK]: (node: any) => {
      console.log(node.data);
      return (
        <Link href={`/post/${node.data.target.fields.slug}`}>
          {node.content[0].value}
        </Link>
      );
    },
  },
};

const page = async ({ params }: { params: { slug: string } }) => {
  const response = await client.getEntries({
    content_type: "post",
    "fields.slug": params.slug,
  });
  const data: any = response.items[0].fields;
  return (
    <div className="w-[300px] md:w-[600px] m-auto mt-20 mb-20 border-2 border-slate-200 rounded-lg shadow-md p-4">
      <h1 className="font-bold text-2xl"> {data.title}</h1>
      <Image
        src={`https:${data.coverImage.fields.file.url}`}
        alt="coverImage"
        width={500}
        height={500}
      />
      <div className="flex text-gray-400 text-sm font-medium justify-between mt-4 p-4 border-t-2 border-slate-200">
        <p>
          Author Name : <span>{data.author.fields.name}</span>
        </p>
        <p>{data.date}</p>
      </div>
      <p>{data.excerpt}</p>
      <div className="prose tracking-wide text-justify  md:w-[500px]">
        {documentToReactComponents(data.content, options)}
      </div>
    </div>
  );
};

export default page;
