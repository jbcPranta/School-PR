import React from "react";
import { RingLoader } from "react-spinners";

const Loading: React.FC = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-[#EDEDED] z-50">
    <RingLoader color="#0000ff" size={100} aria-label="ring-loading" />
  </div>
);

export default Loading;