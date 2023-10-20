import { useLoaderData } from "react-router-dom";

import CardGucci from "./CardGucci";

const Gucci = () => {
  const newGucci = useLoaderData();
  console.log(newGucci);

  const filter = newGucci.filter(r => r.brand.includes("Gucci"));
  console.log(filter);
  return (
    <div className="max-w-6xl mx-auto mb-32">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filter?.map(data => (
          <CardGucci key={data._id} data={data}></CardGucci>
        ))}
      </div>
    </div>
  );
};

export default Gucci;
