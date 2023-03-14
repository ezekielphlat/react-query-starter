import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};
export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
    // cacheTime: 5000, //default is 5min
    //staleTime: 30000, // default is 0 sec
    // refetchOnMount: true, // default true
    // refetchOnWindowFocus: true, //default is true
    // refetchInterval: 2000,
    // refetchIntervalInBackground: true,
    enable: false, // used to disable fetching on mount
    onSuccess,
    onError,
    // select: (data) => {
    //   const superHeroNames = data.data.map((hero) => hero.name);
    //   return superHeroNames;
    // },
  });
};
