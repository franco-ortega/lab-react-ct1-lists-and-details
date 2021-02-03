export const getCatFacts = () => {
  return fetch('https://catfact.ninja/breeds?limit=100')
    .then(res => res.json())
    .then(json => json.data);
};
