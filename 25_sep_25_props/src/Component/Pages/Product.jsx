import axios from "axios";
import React, { useEffect, useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import Loading from "../Common/Loading";
import { Link } from "react-router";


export default function Product() {
  let [loader, setLoader] = useState(false);

  let [sorting, setSorting] = useState(null);
  let [rating, setRating] = useState(null);
  let [categoryFilter, setCategoryFilter] = useState([]);
  let [brandFilter, setbrandFilter] = useState([]);
  let [priceFilter, setpriceFilter] = useState([null, null]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages,setTotalPages]=useState(null);

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
    setLoader(true);
    axios
      .get("https://wscubetech.co/ecommerce-api/products.php", {
        params: {
          page: currentPage,
          limit: "16",
          categories: categoryFilter.join(","), //["ram","ravi"]//ram.ravi
          brands: brandFilter.join(","),
          price_from: priceFilter[0],
          price_to: priceFilter[1],
          discount_from: "",
          discoutn_to: "",
          rating,
          sorting,
        },
      })
      .then((res) => res.data)
      .then((finalRes) => {
        window.scrollTo({
          top: "0px",
          behavior: "smooth",
        });
        setProduct(finalRes.data);
        setTotalPages(finalRes.total_pages)
        setLoader(false);
      });
  };
  useEffect(() => {
    getCategory();
    getBrands();
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
  }, [currentPage, sorting, rating, categoryFilter, brandFilter, priceFilter]);

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
                    <input
                      value={obj.slug}
                      onChange={(e) => {
                        if (
                          e.target.checked &&
                          !categoryFilter.includes(e.target.value)
                        ) {
                          setCategoryFilter([
                            ...categoryFilter,
                            e.target.value,
                          ]);
                        } else
                          setCategoryFilter(
                            categoryFilter.filter(
                              (value) => value != e.target.value,
                            ),
                          );
                      }}
                      type="checkbox"
                      className="mr-2"
                    />
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
                    <input
                      value={obj.slug}
                      onChange={(e) => {
                        if (
                          e.target.checked &&
                          !brandFilter.includes(e.target.value)
                        ) {
                          setbrandFilter([...brandFilter, e.target.value]);
                        } else
                          setbrandFilter(
                            brandFilter.filter(
                              (value) => value != e.target.value,
                            ),
                          );
                      }}
                      type="checkbox"
                      className="mr-2"
                    />
                    {obj.name}
                  </label>
                );
              })}
            </div>
            <h2 className="text-lg font-semibold mb-4 pt-10 ">Price</h2>
            <div className="space-y-3 ">
              <label className="block">
                <input
                  onClick={() => setpriceFilter([10, 250])}
                  name="price"
                  type="radio"
                  className="mr-2"
                />
                Rs. 10 to Rs. 250
              </label>
              <label className="block">
                <input
                  onClick={() => setpriceFilter([250, 500])}
                  name="price"
                  type="radio"
                  className="mr-2"
                />
                Rs. 250 to Rs. 500
              </label>
              <label className="block">
                <input
                  onClick={() => setpriceFilter([500, 1000])}
                  name="price"
                  type="radio"
                  className="mr-2"
                />
                Rs. 500 to Rs. 1000
              </label>
              <label className="block">
                <input
                  onClick={() => setpriceFilter([1000, 100000])}
                  name="price"
                  type="radio"
                  className="mr-2"
                />
                Rs. 1000 to above
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
              <label onClick={() => setRating(4)} className="block">
                <input type="radio" name="rating" className="mr-2" />
                4&#9733; & above
              </label>
              <label onClick={() => setRating(3)} className="block">
                <input type="radio" name="rating" className="mr-2" />
                3&#9733; & above
              </label>
              <label onClick={() => setRating(2)} className="block">
                <input type="radio" name="rating" className="mr-2" />
                2&#9733; & above
              </label>
              <label onClick={() => setRating(1)} className="block">
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

              {loader ? (
                <Loading />
              ) : (
                product.map((obj, index) => (
                  <ProductItem key={index} data={obj} />
                ))
              )}
            </div>
            <ResponsivePagination
              current={currentPage}
              total={totalPages}
              onPageChange={setCurrentPage}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

function ProductItem({ data }) {
  let { name, description, image, price,id } = data;
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
      <Link to={`/Product_details/${id}`}>
      <button className="p-2 bg-red-500 cursor-pointer">View Details</button>
      </Link>
    </div>
  );
}
