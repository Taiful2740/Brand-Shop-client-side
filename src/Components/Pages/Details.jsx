import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from "sweetalert";

const Details = () => {
  const product = useLoaderData();
  const { user } = useContext(AuthContext);
  const email = user.email;
  const { _id, name, brand, type, price, rating, description, photo } = product;

  const handleAddToCart = () => {
    const cartDetails = {
      _id,
      name,
      brand,
      type,
      price,
      rating,
      description,
      photo,
      email,
    };

    // send data to server
    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartDetails),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          swal.fire({
            icon: "success",
            title: "Success",
            text: "Product Updated Successfully!",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-9 py-12">
        <div
          className="hero rounded-lg h-[36rem]"
          style={{ backgroundImage: `url(${photo})` }}
        >
          <div className="hero-overlay rounded-b-lg h-32 mt-[28rem]  bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="mt-[28rem] lg:mr-[50rem]">
              <button
                onClick={handleAddToCart}
                className="px-6 py-4 rounded-md text-white bg-[#FF444A]"
              >
                Add To Cart{price}
              </button>
            </div>
          </div>
        </div>
        <h2 className="mb-2 block mt-14 font-sans text-4xl font-semibold leading-[1.3] tracking-normal text-blue-gray-900 antialiased">
          {name}
        </h2>
        <p className="block font-sans text-[15px] font-normal leading-relaxed text-gray-700 antialiased">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Details;
