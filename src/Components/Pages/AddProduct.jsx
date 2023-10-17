import Swal from "sweetalert2";
import Footer from "../Footer/Footer";
const AddProduct = () => {
  const handleAddCoffee = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    // send data to server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Coffee Added Successfully!",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <>
      <div className="bg-gray-200 p-24">
        <h1 className="text-3xl font-extrabold text-center mb-4">
          Add Product
        </h1>
        <form onSubmit={handleAddCoffee}>
          {/* form row name */}
          <div className=" md:flex justify-center">
            <div className="form-control mr-4 md:w-1/2">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter product name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="quantity"
                  placeholder=" Enter brand name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form row Supplier */}
          <div className=" md:flex justify-center">
            <div className="form-control mr-4 md:w-1/2">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="supplier"
                  placeholder="Enter product type"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="taste"
                  placeholder="Enter product price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form row Category  */}
          <div className=" md:flex justify-center">
            <div className="form-control mr-4 md:w-1/2">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  placeholder="Enter product rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  placeholder="Enter project description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* photo url */}
          <div className="justify-center">
            <div className="form-control mr-4 md:w-full">
              <label className="label">
                <span className="label-text">Photo </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add Product"
            className="mt-6 bg-[#d804a3] text-white hover:bg-green-600 btn btn-block"
          />
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AddProduct;
