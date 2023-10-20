import { useLoaderData } from "react-router-dom";

import CardNike from "./CardNike";

const Nike = () => {
  const newNike = useLoaderData();
  console.log(newNike);

  const filter = newNike.filter(r => r.brand.includes("Nike"));
  console.log(filter);
  return (
    <div className="max-w-6xl mx-auto mb-32">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filter?.map(data => (
          <CardNike key={data._id} data={data}></CardNike>
        ))}
      </div>
    </div>
  );
};

export default Nike;
