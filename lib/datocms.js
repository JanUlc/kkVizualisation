import { GraphQLClient } from "graphql-request";


export function request({ query }) {
  const endpoint = `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`
    }
  });
  return  client.request(query);
}