// import {defineCliConfig} from 'sanity/cli'

// export default defineCliConfig({
//   api: {
//     projectId: 'iauprbfw',
//     dataset: 'production'
//   },
//   // /**
//   //  * Enable auto-updates for studios.
//   //  * Learn more at https://www.sanity.io/docs/cli#auto-updates
//   //  */
//   autoUpdates: true,
// })


// import {defineCliConfig} from 'sanity/cli'

// export default defineCliConfig({
//   api: {
//     projectId: 'iauprbfw',
//     dataset: 'production'
//   },
//   autoUpdates: true, // Optionally, enable auto-updates
// })


import { createClient } from 'next-sanity'

export const sanityClient = createClient({
  projectId: 'iauprbfw',
  dataset: 'production',
  useCdn: true, // Set to false if you need fresh data
})
