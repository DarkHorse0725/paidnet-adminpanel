"use client";

import React from "react";
import { Toaster } from "react-hot-toast";

const CommonClient = () => {
  return (
    <>
      <Toaster 
        containerStyle={{ position: 'fixed', top: 20, right: 20 }}
        toastOptions={{ position: 'top-right' }}
      />
    </>
  );
};

export default CommonClient;