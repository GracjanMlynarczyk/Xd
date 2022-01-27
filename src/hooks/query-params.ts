type QueryParameters = { [key: string]: string };

export default (): QueryParameters => {
  const {
    location: { search },
  } = window;

  const query: QueryParameters = {};

  const params = new URLSearchParams(search);
  params.forEach((value, key) => {
    query[key] = value;
  });

  return query;
};
