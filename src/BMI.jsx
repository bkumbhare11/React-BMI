import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

function BMI() {
  let { register, handleSubmit, reset } = useForm();
  let [value, setValue] = useState("");

  function calculateBMI(data) {
    console.log(data);
    let heightInMeters = data.height * 0.3048;
    let result = data.weight / (heightInMeters * heightInMeters);
    console.log(result);
    let finalBMI = result.toFixed(2);

    if (finalBMI < 18.5) {
      setValue(`UnderWeight ${finalBMI}`);
    } else if (finalBMI > 18.5 && finalBMI < 22.49) {
      setValue(`Normal Weight ${finalBMI}`);
    } else if (finalBMI > 25 && finalBMI < 29.9) {
      setValue(`OverWeight ${finalBMI}`);
    } else if (finalBMI > 30 && finalBMI < 35) {
      setValue(`Obesity ${finalBMI}`);
    } else {
      setValue(`Severe Obesity ${finalBMI}`);
    }

    reset();
  }

  return (
    <div className="border max-w-[400px] rounded-sm p-3 mt-16 mx-3.5 sm:mx-auto">
      <h1 className="font-black text-2xl sm:text-3xl">BMI Calculator</h1>

      <form className="mt-6" onSubmit={handleSubmit(calculateBMI)}>
        <p className="font-semibold">Enter Your Height</p>
        <input
          type="number"
          step="any"
          placeholder="Height"
          required
          className="border w-full mt-1 px-2 py-1 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
          {...register("height")}
        />

        <p className="font-semibold mt-3">Enter Your Weight</p>
        <input
          type="number"
          required
          placeholder="Weight"
          className="border w-full mt-1 px-2 py-1 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
          {...register("weight")}
        />

        <p className="my-4 text-xl  font-mono">{value}</p>

        <button
          type="submit"
          className=" bg-blue-400 w-full py-1 rounded-sm font-semibold text-white"
        >
          Calculate
        </button>
      </form>
    </div>
  );
}

export default BMI;
