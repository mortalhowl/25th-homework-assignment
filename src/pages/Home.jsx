import { useState } from "react";
import Header from "../components/layout/Header";
import data from "../mockData/data.json";

export default function Home() {
  const [glasses, setGlasses] = useState(data);
  const [selectedGlasses, setSelectedGlasses] = useState(glasses[0]);

  const handleChooseGlasses = (glasses) => {
    setSelectedGlasses(glasses);
    // console.log(glasses);
  };

  return (
    <div
      className=" relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/glassesImage/background.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10">
        <Header />
        <div className="max-w-7xl mx-auto p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="relative mx-auto border border-gray-200">
              <img
                className="max-w-xs w-full"
                src="./glassesImage/model.jpg"
                alt=""
              />
              {selectedGlasses && (
                <>
                  <img
                    className="absolute top-1/4 left-1/2 w-1/2 -translate-x-1/2 opacity-80"
                    src={selectedGlasses.url}
                    alt=""
                  />
                  <div className="absolute flex flex-col w-full h-1/3 left-0 bottom-0 p-3 bg-orange-300/50">
                    <span className="text-2xl font-semibold text-purple-600 uppercase">
                      {selectedGlasses.name}
                    </span>
                    <span className="text-md text-white font-semibold">
                      {selectedGlasses.desc}
                    </span>
                  </div>
                </>
              )}
            </div>

            <div className="mx-auto border border-gray-200">
              <img
                className="max-w-xs w-full"
                src="./glassesImage/model.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="bg-white max-w-5xl mx-auto mt-20 py-15 px-10 border border-gray-200 grid grid-cols-3 md:grid-cols-6 gap-4">
            {glasses.map((item) => (
              <img
                className="border border-gray-200 p-2 cursor-pointer"
                onClick={() => handleChooseGlasses(item)}
                key={item.id}
                src={item.url}
                alt={item.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
