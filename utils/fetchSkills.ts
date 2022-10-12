import { Skill } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

type Data = {
  skills: Skill[];
};

export const fetchSkills = async () => {
  const query = groq`
    *[_type == "skill"]
`;
  const skills: Skill[] = await sanityClient.fetch(query);

  return skills;
};
