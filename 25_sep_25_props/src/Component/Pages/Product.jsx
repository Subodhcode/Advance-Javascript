import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Product() {
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
    axios
      .get("https://wscubetech.co/ecommerce-api/products.php")
      .then((res) => res.data)
      .then((finalRes) => {
        setProduct(finalRes.data);
      });
  };
  useEffect(() => {
    getCategory();
    getBrands();
    getProducts();
  }, []);
  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* ASIDE - FILTER */}
          <aside className="bg-white p-4 rounded shadow md:col-span-1 border-2">
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
          </aside>

          {/* RIGHT - PRODUCTS */}
          {/* RIGHT - PRODUCTS */}
          <section className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Product 1 */}
           
              {
                product.map((obj,index)=> <ProductItem key={index} data={obj}/>)
              }
         

              
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function ProductItem({data}) {
  let {name,description,image,price}=data
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
