import React, { useState } from "react";
import Header from "../Common/Header";
import { FaHeart, FaStar } from "react-icons/fa";
import { products } from "../../Data/productdata";//array
import Footer from "../Common/footer";
import Btncomp from "../Common/Btncomp";
import Faq from "../Faq";

export default function Home() {

    let cname = "WsCubeTech"


    // let showData = () => {
    //     alert("Hello")
    // }



    let [counter, setCounter] = useState(0)
    let count = 1

    //   let showData=()=>{
    //    setCounter(counter+1)
    // }

    // let addData=(a,b)=>{
    //     alert(a+b)
    // }

    let [modal, setModal] = useState(false)
    let [password, setPassword] = useState(false)

    
    return (
        <>
            <div className={`w-[350px] fixed bg-lime-100 left-[50%] translate-[-50%] translate-y-[-50%] duration-500  ${modal ? 'top-[50%]' : 'top-[-1000px]'}`}>
                <h3 className="p-2 font-bold relative">Enquire Now
                    <span onClick={()=>setModal(false)} className="absolute right-2 cursor-pointer">&times;</span>
                </h3>
                <form className="p-3">
                    <div className="mb-3">
                        <label htmlFor="">Name</label>
                        <input type="text" className="border-1 block w-[100%] h-[30px]" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Email</label>
                        <input type="email" className="border-1 block w-[100%] h-[30px]" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Phone</label>
                        <input type="email" className="border-1 block w-[100%] h-[30px]" />
                    </div>

                    <div className="flex  justify-center">

                        <button onClick={() => setModal(false)} type="button" className="bg-[red] p-5 rounded-2xl text-white font-bold cursor-pointer" >close</button>
                    </div>

                </form>
            </div>


            <input className="border-1 p-[1.5px] ml-5" type={password ? "text" : "password"} />
            <button onClick={() => setPassword(!password)} className="bg-red-700 mr-2 p-1 text-white cursor-pointer">
                {password ? "hide" : "show"}
            </button>

            {/* <button onClick={showData} className="p-3 bg-red-500 text-white cursor-pointer"> Enguire Now {counter}</button> */}

            <br />
            <button onClick={() => setCounter(counter + 1)} className="p-3 bg-red-500 text-white cursor-pointer"> Enguire Now {counter}</button>



            <div>
                {/* <Header companyName={cname}
                    phone={6354727987}
                    email="subodht105@gmail.com"
                    user={["ram", "ravi", "raj"]}
                /> */}

                <section className="py-10">
                    <div className="max-w-[1320px] mx-auto grid lg:grid-cols-[55%_auto] grid-cols-1 gap-5 item-center lg:px-0 px-[20px]">
                        <div>
                            <h1 className="text-[40px] lg:text-[60px] font-bold lg:leading-[70px] leading-[50px]">
                                The experence make all the difference
                            </h1>
                            <p className="text-[25px] mt-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Mollitia magnam ut iure laborum quae inventore culpa aliquid,
                                exercitationem corrupti ipsa.
                            </p>

                            <div className="flex gap-5 mt-[40px]">




                                {/* <button onClick={()=>addData(200,30)} className="p-3 bg-red-500 text-white cursor-pointer"> Enguire Now</button>

                                <button onClick={showData} className="p-3 bg-red-500 text-white cursor-pointer"> Enguire Now</button>

                                 <button onClick={()=>{
                                    alert("Subodh")
                                 }} className="p-3 bg-red-500 text-white cursor-pointer"> Enguire Now</button> */}

                                <button onClick={() => setModal(true)} className="bg-[red] p-5 rounded-2xl text-white font-bold cursor-pointer" >Modal</button>
                                <Btncomp p={"Get Startted"} />
                                <Btncomp p={"Offer"} />
                            </div>
                        </div>
                        <div>
                            <img src="./src/images/phone.jpg" alt="" />
                        </div>
                    </div>
                </section>


                <section className="py-10 ">
                    <h2 className="text-center lg:text-[50px] text-[30px] font-bold mb-5">
                        Get Difference Products
                    </h2>
                    <div className="max-w-[1320px] mx-auto grid grid-cols-6 gap-5 text-center">

                        {
                            products.map((obj, index) => {
                                return (
                                    <Productitem key={index} products={obj} />
                                )
                            })
                        }





                    </div>
                </section>


                <section className="py-10 ">
                    <h2 className="text-center lg:text-[50px] text-[30px] font-bold mb-5">
                        Get Difference Products
                    </h2>
                    <div className="max-w-[1320px] mx-auto grid grid-cols-6 gap-5 text-center">
                        {products.map((obj, index) => {
                            return (
                                <div key={index} className=" relative shadow-xl border">
                                    <FaHeart className="absolute right-[10px] top-0 text-[red] text-3xl" />
                                    <img
                                        className="w-[100%]  object-cover
"
                                        src={obj.image}
                                        alt=""
                                    />

                                    <div className="p-3">
                                        <h3 className="font-bold"></h3>
                                        <h4>Rs 9.99</h4>
                                        <p className="text-[12px]">Essence</p>
                                        {obj.name}
                                        <div className="flex justify-between mt-4">
                                            <div className="flex">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </div>
                                            <Btncomp text={"cart"} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <Faq />

                {/* <Footer name="subodh">
                    <h1>Welcome to suboodh</h1>
                </Footer> */}
            </div>
        </>
    );
}

export function Productitem({ products }) {
    let { name, price, image } = products
    return (
        <div className=" relative shadow-xl border">
            <FaHeart className="absolute right-[10px] top-0 text-[red] text-3xl" />
            <img
                className="w-[100%]  object-cover
"
                src={image}

            />

            <div className="p-3">
                <h3 className="font-bold"></h3>
                <h4>Rs 9.99</h4>
                <p className="text-[12px]">Essence</p>
                {name}
                <div className="flex justify-between mt-4">
                    <div className="flex">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}



