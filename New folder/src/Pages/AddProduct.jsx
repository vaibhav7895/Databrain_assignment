import axios from "axios";
import React, {  useState } from "react";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const product = {
      title,
      image,
      price,
      description,
      category,
    };
    if(!title || !image || !price || !description || !category){
      alert("Please fill all the fields");
    }else{
      axios.post("https://fakeapimock-server.onrender.com/products", product).then((res) => {
        console.log(res.data);
        alert("product added");
      });
    }
    
    setTitle("");
    setImage("");
    setPrice("");
    setDescription("");
    setCategory("");
  };

  return (
    <div className="mt-12 ">
      <h1 className="text-4xl mb-7 font-semibold">Add Product</h1>
      <form className=" w-5/6 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 m-auto shadow-2xl " onSubmit={handleClick}>
        <label className="block mb-2 text-center text-1xl font-semibold">Title</label>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 border-black w-full sm:w-1/2 mb-2"
        />
        <label className="block mb-2 text-center text-1xl font-semibold">Image</label>
        <input
          type="text"
          placeholder="Image"
          id=""
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border-2 border-black w-full sm:w-1/2 mb-2"
        />
        <label className="block mb-2 text-center text-1xl font-semibold">Price</label>
        <input
          type="text"
          placeholder="Price"
          id=""
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border-2 border-black w-full sm:w-1/2 mb-2"
        />
        <label className="block mb-2 text-center text-1xl font-semibold">Description</label>
        <input
          type="text"
          placeholder="Description"
          id=""
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border-2 border-black w-full sm:w-1/2 mb-2"
        />
        <label className="block mb-2 text-center text-1xl font-semibold">Category</label>
        <input
          type="text"
          placeholder="Category"
          id=""
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border-2 border-black w-full sm:w-1/2 mb-8"
        />
        <input
          type="submit"
          value="Add Product"
          className="block border-2 border-radius-10 text-white bg-cyan-500 w-1/3 sm:w-1/3 m-auto mb-8"
        />
      </form>
    </div>
  );
};

export default AddProduct;
