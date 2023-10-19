const AllBrand = () => {
  return (
    <div className="max-w-6xl mx-auto mb-32">
      <h1 className=" text-4xl font-semibold text-center mt-20" id="welcome">
        Our Popular Brand
      </h1>
      <div className="grid ml-5 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {/* brand-1 */}
        <div className=" card-body shadow-2xl flex justify-center mt-5 mb-14 ">
          <img src="https://i.ibb.co/m9PDM8s/81.jpg" alt="" />
        </div>
        {/* brand-2 */}
        <div className="card-body shadow-2xl flex justify-center mt-5 mb-14">
          <img src="https://i.ibb.co/VMMp8Zm/adidas.jpg" alt="" />
        </div>
        {/* brand-3 */}
        <div className=" card-body shadow-2xl flex justify-center mt-5 mb-14">
          <img src="https://i.ibb.co/GvwBFtz/puma.png" alt="" />
        </div>
        {/* brand-4 */}
        <div className="card-body shadow-2xl flex justify-center mt-5 mb-14">
          <img src="https://i.ibb.co/8r6LsNy/nike.png" alt="" />
        </div>
        {/* brand-5 */}
        <div className="card-body shadow-2xl flex justify-center mt-5 mb-14">
          <img src="https://i.ibb.co/LYhk969/gucci.jpg" alt="" />
        </div>
        {/* brand-6 */}
        <div className="card-body shadow-2xl flex justify-center mt-5 mb-14">
          <img src="https://i.ibb.co/CPGFrVL/zara.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AllBrand;
