import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  apiVersion: "2022-03-07",
  dataset: "production",
  projectId: "iauprbfw", 
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// import { createImageUrlBuilder } from '@sanity/image-url'
// import { sanityClient } from './sanityClient'

// const builder = createImageUrlBuilder(sanityClient)

// export const urlFor = (source) => builder.image(source)
