import { createClient } from "contentful";
import Image from "next/image";
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "ranger",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "ranger",
    "fields.slug": params.slug,
  });

  if (!res.items.length) {
    return {
      redirect: {
        destination: "/rangers",
        permanent: false,
      },
    };
  }
  return {
    props: {
      ranger: res.items[0],
    },
  };
}

export default function Ranger({ ranger }) {
  const rangerImage = ranger.fields.rangerImage;
  return (
    <div>
      <p>{ranger.fields.name}</p>
      <Image
        src={"https:" + rangerImage.fields.file.url}
        width={rangerImage.fields.file.details.image.width}
        height={rangerImage.fields.file.details.image.height}
      />
      <p>{ranger.fields.color}</p>
      <ul>
        {ranger.fields.vehicles.map((vehicle) => (
          <li>{vehicle}</li>
        ))}
      </ul>
    </div>
  );
}
