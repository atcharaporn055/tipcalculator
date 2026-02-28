"use client";

import { useState } from "react";

export default function Home() {
  const [bill, setBill] = useState("");
  const [isTipActive, setIsTipActive] = useState(false);

  // เปลี่ยนจาก 0 เป็น "" (ค่าว่าง)
  const [tipAmount, setTipAmount] = useState("");
  const [totalAmount, setTotalAmount] = useState("");

  const handleTipToggle = () => {
    setIsTipActive(!isTipActive);
  };

  const calculateTotal = () => {
    const billNumber = Number(bill) || 0;

    let tip = 0;
    if (isTipActive) {
      tip = billNumber * 0.05;
    }

    const total = billNumber + tip;

    setTipAmount(tip.toFixed(2));
    setTotalAmount(total.toFixed(2));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-[380px]">

        <h1 className="text-3xl font-bold text-center text-pink-500 mb-6">
           Tip Calculator
        </h1>

        {/* Bill */}
        <label className="block text-pink-600 font-semibold mb-2">
          Bill
        </label>
        <input
          type="text"
          inputMode="numeric"
          placeholder="Enter bill amount"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
          className="w-full p-3 rounded-xl bg-pink-50 border border-pink-300 mb-5 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        {/* Tip 5% Toggle */}
        <button
          onClick={handleTipToggle}
          className={`w-full font-bold py-3 rounded-xl mb-3 transition duration-300 ${
            isTipActive
              ? "bg-pink-600 text-white"
              : "bg-gray-300 text-gray-700"
          }`}
        >
          Tip 5%
        </button>

        {/* Calculate Button */}
        <button
          onClick={calculateTotal}
          className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 rounded-xl mb-6 transition duration-300"
        >
          calculateTotal
        </button>

        {/* Result */}
        <div className="bg-pink-50 p-5 rounded-2xl shadow-inner">
          <p className="text-lg text-gray-700 mb-2">
            Tip Total
          </p>
          <p className="text-2xl font-bold text-pink-500 mb-4">
            {tipAmount && ` ${tipAmount}`}
          </p>

          <p className="text-lg text-gray-700 mb-2">
            Bill Total
          </p>
          <p className="text-3xl font-bold text-pink-600">
            {totalAmount && ` ${totalAmount}`}
          </p>
        </div>

      </div>
    </div>
  );
}