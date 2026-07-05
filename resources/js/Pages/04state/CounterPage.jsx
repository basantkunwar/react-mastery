import { useState } from "react";
import AppLayout from "@/Layouts/applayout";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <AppLayout>
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96 text-center">
        <h1 className="text-3xl font-bold mb-6 text-slate-800">
          Counter App
        </h1>

        <div className="text-6xl font-bold text-blue-600 mb-8">
          {count}
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={decrease}
            className="bg-red-500 hover:bg-red-600 text-green-400 px-5 py-2 rounded-lg"
          >
            -
          </button>

          <button
            onClick={reset}
            className="bg-gray-500 hover:bg-gray-600 text-green-400 px-5 py-2 rounded-lg"
          >
            Reset
          </button>

          <button
            onClick={increase}
            className="bg-green-500 hover:bg-green-600 text-green-400 px-5 py-2 rounded-lg"
          >
            +
          </button>
        </div>
      </div>
    </div>
    </AppLayout>
  );
}