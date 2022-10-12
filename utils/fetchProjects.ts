import { Project } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

type Data = {
  projects: Project[];
};

export const fetchProjects = async () => {
  const query = groq`
    *[_type == "project"] {
      ...,
      technologies[]->
    }
`;

  const projects: Project[] = await sanityClient.fetch(query);

  console.log(projects);

  return projects;
};
