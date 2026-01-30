import Header from "../Common/Header";
import Footer from "./footer";
import "./Home.css";
function Home() {
  return (
    <>
      <Header></Header>
      <section className="homeSection">
        <div>
          <h1>Home Page</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            veritatis quaerat sunt explicabo! Iure dicta accusantium vero
            itaque, voluptatem eligendi?
          </p>
        </div>
      </section>
      <div className="productSection">
        <h1>Our Products</h1>
         <div className="product_mid">
        <ProductsItem />
        <ProductsItem />
        <ProductsItem />
        <ProductsItem />
        <ProductsItem />
        <ProductsItem />
        <ProductsItem />
        <ProductsItem />
        <ProductsItem />
        <ProductsItem />
        <ProductsItem />
        <ProductsItem />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;

function ProductsItem() {
  return (
   
      <div className="product_item">
        <img
          src="https://images.pexels.com/photos/33447280/pexels-photo-33447280.jpeg"
          alt=""
        />
        <h3>Iphone</h3>
      </div>

  );
}
