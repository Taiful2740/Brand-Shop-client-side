import { useLoaderData } from "react-router-dom";

import CardZara from "./CardZara";
import ZaraSlider from "../Slider/ZaraSlider";

const Zara = () => {
  const newZara = useLoaderData();
  console.log(newZara);

  const filter = newZara.filter(r => r.brand.includes("Zara"));
  console.log(filter);
  return (
    <>
      <ZaraSlider></ZaraSlider>
      <h1 className="text-4xl text-center font-extrabold my-10">
        Our Products: {filter.length}
      </h1>
      <div className="max-w-6xl mx-auto mb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filter?.map(data => (
            <CardZara key={data._id} data={data}></CardZara>
          ))}
        </div>
      </div>
    </>
  );
};

export default Zara;
