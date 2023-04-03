import { client } from "../../components/contentful/contentful";
import Showauthor from "@/components/Showauthor";

const page = async () => {
  const aresponse = await client.getEntries({ content_type: "author" });
  const authors: string[] = aresponse.items.map((a: any) => a.fields.name);
  const response = await client.getEntries({ content_type: "post" });

  return <Showauthor author={authors} response={response.items} />;
};

export default page;
