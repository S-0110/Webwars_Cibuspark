import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import "./css/fpu.css";

function Fpu() {
  return (
    <div className="fpu">
      <h1>FPU (Food Processing Unit)</h1> 
      <h2>Reliable Supply of Organic Waste for Energy & Production</h2> 
      <p>
        Food processing units (FPUs) rely on a steady supply of organic waste to generate energy and produce bio-based products. 
        We ensure a seamless flow of food waste from hotels to your facility, optimizing efficiency and sustainability.
      </p>

      <h3>How We Help FPUs:</h3>
      <ul className="check-list">
        <li><FaCheckCircle className="icon" /> <strong>Consistent Waste Supply</strong> – A reliable stream of organic materials.</li>
        <li><FaCheckCircle className="icon" /> <strong>Efficient Logistics</strong> – Streamlined collection and delivery process.</li>
        <li><FaCheckCircle className="icon" /> <strong>Quality Assurance</strong> – Ensuring waste is sorted and suitable for processing.</li>
      </ul>

      <p>💡 <strong>Partner with us to power a greener tomorrow!</strong></p>
    </div>
  );
}

export default Fpu;