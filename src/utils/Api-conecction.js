// Api conection seed trae los mismos resultados siempre
export const fetchUrl = () => {
  const results = "results=500";
  const seed = "seed=abc";
  const URL = "https://randomuser.me/api/?" + results + "&" + seed;

  return fetch(URL);
};
