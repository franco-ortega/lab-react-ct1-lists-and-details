export const getCatFacts = () => {
  return fetch('https://catfact.ninja/breeds?limit=50')
    .then(res => res.json())
    .then(json => json.data);
};
