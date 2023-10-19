import { useLoaderData } from "react-router-dom";
import CardAdidas from "./CardAdidas";

const Adidas = () => {
  const newAdidas = useLoaderData();
  console.log(newAdidas);

  const filter = newAdidas.filter(r => r.brand.includes("Adidas"));
  console.log(filter);
  return (
    <div className="max-w-6xl mx-auto mb-32">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filter?.map(data => (
          <CardAdidas key={data._id} data={data}></CardAdidas>
        ))}
      </div>
    </div>
  );
};

export default Adidas;
