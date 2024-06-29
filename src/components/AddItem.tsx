import React, { useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { toast, ToastContainer } from "react-toastify";
import { itemListState } from "../store/atoms";
import "../App.css";

const AddItem: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const setItemList = useSetRecoilState(itemListState);
  const itemList = useRecoilValue(itemListState);

  const addItem = () => {
    if (inputValue.trim() === "") {
      toast.error("Empty item cannot be added", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    setItemList((oldItemList) => [...oldItemList, inputValue]);
    setInputValue("");
    toast.success("Item added successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const copyList = () => {
    const listText = itemList.join(", ");
    navigator.clipboard
      .writeText(listText)
      .then(() => {
        toast.success("List copied to clipboard!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        toast.error("Failed to copy the list", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
      <h2 className="text-2xl font-semibold mb-4">Append</h2>
      <div className="relative bg-gray-100 p-2 shadow-lg input23">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full h-10 text-lg border-none outline-none p-1 border-b-2 border-gray-300 focus:shadow-none focus:border-transparent peer"
          required
          placeholder="Enter your item here..."
        />
        <span className="absolute bottom-0 left-0 w-full h-1 z-10"></span>
      </div>
      <div className="flex gap-3">
        <button
          onClick={addItem}
          className=" justify-center ml-16 mt-2 button2"
        >
          Add
        </button>
        <button
          onClick={copyList}
          className="justify-center mt-2 button2"
        >
          Copy List
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddItem;
