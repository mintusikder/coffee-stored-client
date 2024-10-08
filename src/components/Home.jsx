import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";

const Home = () => {
  const loaderData = useLoaderData();
  const [coffees, setCoffees] = useState(loaderData);
  return (
    <div>
      <h2>This is home {coffees.length} </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
