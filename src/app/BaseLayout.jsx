import NavBar from "@/components/organisms/NavBar";
import React from "react";

const BaseLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default BaseLayout;
