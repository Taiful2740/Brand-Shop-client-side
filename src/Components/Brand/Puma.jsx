import { useLoaderData } from "react-router-dom";
import CardPuma from "./CardPuma";

const Puma = () => {
  const newPuma = useLoaderData();
  console.log(newPuma);

  const filter = newPuma.filter(r => r.brand.includes("Puma"));
  console.log(filter);
  return (
    <div className="max-w-6xl mx-auto mb-32">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filter?.map(data => (
          <CardPuma key={data._id} data={data}></CardPuma>
        ))}
      </div>
    </div>
  );
};

export default Puma;
