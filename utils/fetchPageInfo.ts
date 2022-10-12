import { PageInfo } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

type Data = {
  pageInfo: PageInfo;
};

export const fetchPageInfo = async () => {
  const query = groq`
    *[_type == "pageInfo"][0]
`;

  const pageInfo: PageInfo = await sanityClient.fetch(query);

  console.log(pageInfo);

  return pageInfo;
};
