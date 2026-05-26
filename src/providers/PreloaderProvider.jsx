"use client";

import LoadingBar from "@/Components/LoadingBar/LoadingBar";
import React, { useEffect, useState } from "react";

const PreloaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  return <div>{isLoading ? <LoadingBar></LoadingBar> : children}</div>;
};

export default PreloaderProvider;
