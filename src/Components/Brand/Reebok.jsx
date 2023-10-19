import { useLoaderData } from "react-router-dom";
import CardReebok from "./CardReebok";

const Reebok = () => {
  const newReebok = useLoaderData();
  console.log(newReebok);

  const filter = newReebok.filter(r => r.brand.includes("Reebok"));
  console.log(filter);

  return (
    <div className="max-w-6xl mx-auto mb-32">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* <h1>Reebok: {filter.length}</h1> */}
        {filter?.map(data => (
          <CardReebok key={data._id} data={data}></CardReebok>
        ))}
      </div>
    </div>
  );
};

export default Reebok;
