import { useLoaderData } from "react-router-dom";

import CardZara from "./CardZara";

const Zara = () => {
  const newZara = useLoaderData();
  console.log(newZara);

  const filter = newZara.filter(r => r.brand.includes("Zara"));
  console.log(filter);
  return (
    <div className="max-w-6xl mx-auto mb-32">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filter?.map(data => (
          <CardZara key={data._id} data={data}></CardZara>
        ))}
      </div>
    </div>
  );
};

export default Zara;
