import { useQuery } from "react-query";
import axios from "axios";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";
import { Link } from "react-router-dom";

export const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log("perform side effect on success", data);
  };
  const onError = (error) => {
    console.log("perform side effect on error", error);
  };
  const { isLoading, data, isError, error, refetch } = useSuperHeroesData(
    onSuccess,
    onError
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2>RQ super heroes page</h2>
      <button onClick={refetch}>Fetch Data</button>
      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
      {/* {data.map((heroName) => (
        <p>{heroName}</p>
      ))} */}
    </>
  );
};
