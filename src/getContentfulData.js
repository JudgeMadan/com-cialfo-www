import * as contentful from "contentful";

const fetchEntries = (space, environment, accessToken) => {
  console.log(space)
  const client = contentful.createClient({
    space: space,
    environment: environment,
    accessToken: accessToken,
    locale: "zh-CN"
  });
  return client
    .getEntries({
    })
    .then(response => response.items)
    .catch(err => console.error(err));
};

export const getAllCopy = (space, environment, accessToken) => {
  return fetchEntries(space, environment, accessToken).then(response => {
    return response
  });
};
