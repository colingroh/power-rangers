import Head from "next/head";
import Image from "next/image";
import { createClient } from "contentful";
import Link from "next/Link";
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "ranger" });

  return {
    props: {
      rangers: res.items,
    },
  };
}

export default function Rangers({ rangers }) {
  console.log(rangers);
  return (
    <div>
      {rangers.map((ranger) => (
        <Link href={`/rangers/${ranger.fields.slug}`}>
          <a className="underline hover:text-white">
            <p>{ranger.fields.name}</p>
          </a>
        </Link>
      ))}
    </div>
  );
}
