import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ProductPage = () => {
    const [product, setProduct] = useState("");
    const {id}=useParams()
   useEffect(()=>{
    axios.get(`https://fakeapimock-server.onrender.com/products/${id}`).then((res)=>{
      setProduct(res.data)
    })
   },[id])
   
    return (
        <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 py-18 md:py-24">
          
          <div className="flex">
            <img className="rounded-md h-1/2 mt-24 ml-16" alt="product image" src={product.image}  />
          </div>
          <div className="space-y-1 md:space-y-1">
            <div>
              <h1 className="font-semibold text-2xl sm:text-4xl lg:text-5xl leading-1.1">{product.title}</h1>
              <p className="text-gray-900  text-2xl mt-10 font-semibold"> Rs{product.price}</p>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-gray-500  text-2xl font-light">{product.description}</p>
                <p className="text-lg"></p>
              </div>
              <div>
                <p className="text-yellow-500 font-medium text-lg uppercase mb-4">Features</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <ul className="space-y-2">
                    <li>Chronograph</li>
                    <li>Master Chronometer Certified</li>
                    <li>Tachymeter</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>Anti‑magnetic</li>
                    <li>Chronometer</li>
                    <li>Small seconds</li>
                  </ul>
                </div>
              </div>
              <div>
                <p className="text-yellow-500 font-medium text-lg uppercase mb-4">Product Details</p>
                <ul className="space-y-2">
                  <li>
                    <span className="font-bold">Between lugs:</span> 20 mm
                  </li>
                  <li>
                    <span className="font-bold">Bracelet:</span> leather strap
                  </li>
                  <li>
                    <span className="font-bold">Case:</span> Steel
                  </li>
                  <li>
                    <span className="font-bold">Case diameter:</span> 42 mm
                  </li>
                  <li>
                    <span className="font-bold">Dial color:</span> Black
                  </li>
                  <li>
                    <span className="font-bold">Crystal:</span> Domed, scratch‑resistant sapphire crystal with anti‑reflective treatment inside
                  </li>
                  <li>
                    <span className="font-bold">Water resistance:</span> 5 bar (50 metres / 167 feet)
                  </li>
                </ul>
              </div>
            </div>
            <button className="rounded-none w-full mt-8 text-lg lg:text-xl py-7 bg-gray-900 text-white uppercase hover:translate-y-2px hover:shadow-lg">
              Add to cart
            </button>
            
          </div>
        </div>
      </div>
      
    );
  };
  

  export default ProductPage