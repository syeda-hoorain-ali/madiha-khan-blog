import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// import { createImageUrlBuilder } from '@sanity/image-url'
// import { sanityClient } from './sanityClient'

// const builder = createImageUrlBuilder(sanityClient)

// export const urlFor = (source) => builder.image(source)
