import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'v1w1ovsb',
  dataset: 'production',
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: '2022-01-31',
})

export default client
