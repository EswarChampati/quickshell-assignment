import useFetch from "../hooks/useFetch";
import { URL } from "../utils/constant";

const Body = () => {
  const { data, loading, error } = useFetch(URL);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div className="Body"></div>;
};

export default Body;
