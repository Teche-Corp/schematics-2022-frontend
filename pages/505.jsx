import React from "react";

const Error505 = () => {
  return (
    <div className="min-h-screen bg-dark-primary bg-[url(/505/505-background.png)] bg-cover bg-top">
      <div className="flex items-center justify-center h-screen">
        {/* text */}
        <div className="flex flex-col items-center justify-center gap-2 -translate-y-8">
          <h2 className="text-6xl font-bold text-center text-white font-secondary text-border-thin ">
            Is That A Dragon?
          </h2>
          <div className="flex gap-10 h-60 text-white font-primary text-[200px] text-border-thin -mt-12">
            <span className="rotate-[-23.18deg] relative top-5">5</span>
            <span>0</span>
            <span className="rotate-[23.18deg] relative top-5">5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error505;
