import { Experience } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

type Data = {
  experiences: Experience[];
};

export const fetchExperiences = async () => {
  const query = groq`
    *[_type == "experience"]{
      ...,
      technologies[]->
    }
`;
  const experiences: Experience[] = await sanityClient.fetch(query);

  console.log(experiences);

  return experiences;
};
