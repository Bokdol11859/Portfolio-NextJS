import { Social } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

type Data = {
  socials: Social[];
};

export const fetchSocials = async () => {
  const query = groq`
    *[_type == "social"]
`;
  const socials: Social[] = await sanityClient.fetch(query);

  return socials;
};
