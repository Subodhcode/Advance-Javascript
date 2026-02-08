import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../Common/Loading";

export default function Product() {
  let [loader,setLoader]=useState(false)
  let [sorting, setSorting] = useState(null);
  let [rating, setRating] = useState(null);

  let [category, setCategory] = useState([]);
  let [Brand, setBrand] = useState([]);
  let [product, setProduct] = useState([]);
  let getCategory = async () => {
    let apiRes = await fetch(
      "https://wscubetech.co/ecommerce-api/categories.php",
    );
    let finalRes = await apiRes.json();
    setCategory(finalRes.data);
  };

  let getBrands = async () => {
    let apiRes = await fetch("https://wscubetech.co/ecommerce-api/brands.php");
    let finalRees = await apiRes.json();
    setBrand(finalRees.data);
  };

  let getProducts = () => {

    setLoader(true)
    axios
      .get("https://wscubetech.co/ecommerce-api/products.php", {
        params: {
          page: "",
          limit: "",
          category: "",
          brands: "",
          price_from: "",
          price_to: "",
          discount_from: "",
          discoutn_to: "",
          rating,
          sorting,
        },
      })
      .then((res) => res.data)
      .then((finalRes) => {
        window.scrollTo({
          top:"0px",
          behavior:"smooth"
        })
        setProduct(finalRes.data);
        setLoader(false)
      });
  };
  useEffect(() => {
    getCategory();
    getBrands();
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
  }, [sorting,rating]);
  
  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* ASIDE - FILTER */}
          <aside className="bg-white p-4 rounded shadow md:col-span-1 border-2 h-[1500px]">
            sorting {sorting}
            <h2 className="text-lg font-semibold mb-4  overflow-y-scroll">
              Category Filter
            </h2>
            <div className="space-y-3 overflow-y-scroll h-[250px]">
              {category.map((obj, index) => {
                return (
                  <label key={index} className="block">
                    <input type="checkbox" className="mr-2" />
                    {obj.name}
                  </label>
                );
              })}
            </div>
            <h2 className="text-lg font-semibold mb-4 pt-10">Brand Filter</h2>
            <div className="space-y-3 overflow-y-scroll h-[250px]">
              {Brand.map((obj, index) => {
                return (
                  <label key={index} className="block">
                    <input type="checkbox" className="mr-2" />
                    {obj.name}
                  </label>
                );
              })}
            </div>
            <h2 className="text-lg font-semibold mb-4 pt-10 ">Price</h2>
            <div className="space-y-3 ">
              <label className="block">
                <input type="radio" className="mr-2" />
                Rs. 10 to Rs. 250
              </label>
              <label className="block">
                <input type="radio" className="mr-2" />
                Rs. 250 to Rs. 300
              </label>
              <label className="block">
                <input type="radio" className="mr-2" />
                Rs. 300 to Rs. 350
              </label>
              <label className="block">
                <input type="radio" className="mr-2" />
                Rs. 350 to Rs. 400
              </label>
            </div>
            <h2 className="text-lg font-semibold mb-4 pt-10">DISCOUNT RANGE</h2>
            <div className="space-y-3 ">
              <label className="block">
                <input type="radio" className="mr-2" />
                5% and above
              </label>
              <label className="block">
                <input type="radio" className="mr-2" />
                10% and above
              </label>
              <label className="block">
                <input type="radio" className="mr-2" />
                15% and above
              </label>
              <label className="block">
                <input type="radio" className="mr-2" />
                20% and above
              </label>
            </div>
            <h2 className="text-lg font-semibold mb-4 pt-10">RATING</h2>
            <div className="space-y-3 ">
              <label onClick={()=>setRating(4)} className="block">
                <input type="radio" name="rating" className="mr-2" />
                4&#9733; & above
              </label>
              <label onClick={()=>setRating(3)} className="block">
                <input type="radio" name="rating" className="mr-2" />
                3&#9733; & above
              </label>
              <label onClick={()=>setRating(2)} className="block">
                <input type="radio"name="rating" className="mr-2" />
                2&#9733; & above
              </label>
              <label onClick={()=>setRating(1)} className="block">
                <input type="radio" name="rating" className="mr-2" />
                1&#9733; & above
              </label>
            </div>
          </aside>

          {/* RIGHT - PRODUCTS */}
          {/* RIGHT - PRODUCTS */}
          <section className="md:col-span-3">
            <div className="flex justify-end">
              <select
                onChange={(e) => setSorting(e.target.value)}
                className="border-2 p-3"
                name=""
                id=""
              >
                <option value="">Sort by : Recommended</option>
                <option value="1">Name : A to Z</option>
                <option value="2">Name : Z to A</option>
                <option value="3">Price : Low to High</option>
                <option value="4">Discounted Price : Low to High</option>
                <option value="5">Discounted Price : High to Low</option>
                <option value="6">Rating : Low to High</option>
                <option value="7">Rating : High to Low</option>
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Product 1 */}

              {
                loader ?
                <Loading/>
                :
                
                product.map((obj, index) => (
                <ProductItem key={index} data={obj} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function ProductItem({ data }) {
  let { name, description, image, price } = data;
  return (
    <div className="border p-4 rounded">
      <img
        src={image}
        alt="Product 1"
        className="w-full h-32 object-cover mb-2"
      />
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <p className="font-bold mt-1">${price}</p>
    </div>
  );
}
