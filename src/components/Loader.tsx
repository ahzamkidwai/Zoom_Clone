import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <Image src="/icons/loading-circle.svg" height={50} width={50} alt="Loading Image" />
    </div>
  );
};

export default Loader;
