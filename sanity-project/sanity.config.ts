// import {defineConfig} from 'sanity'
// import {structureTool} from 'sanity/structure'
// import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemaTypes'

// export default defineConfig({
//   name: 'default',
//   title: 'sanity project',

//   projectId: 'iauprbfw',
//   dataset: 'production',

//   plugins: [structureTool(), visionTool()],

//   schema: {
//     types: schemaTypes,
//   },
// })

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'sanity project',
  projectId: 'iauprbfw', // Use your actual project ID here
  dataset: 'production', // Ensure this dataset is correct

  plugins: [structureTool(), visionTool()], // Sanity studio tools

  schema: {
    types: schemaTypes, // Include schema types
  },
})
