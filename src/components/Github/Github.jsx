import React from "react";
import { useLoaderData } from "react-router-dom";
const Github = () => {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/akshay-9155")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className="bg-gray-700 text-3xl p-4 flex flex-col items-center gap-2">
      <span>Github Followers : {data.followers}</span>
      <img
        className="w-1/4 rounded-full"
        src={data.avatar_url}
        alt="Git Picture"
      />
    </div>
  );
};

export default Github;
export const githubDataLoader = async()=>{
  const response = await fetch("https://api.github.com/users/akshay-9155");
  return response.json();
}