import React, { useState, useEffect } from "react";
import jsonData from "../jsonData.json";

const BooksTitle = () => {
  const [titleFetched, setTitleFetched] = useState([]);

  useEffect(() => {
    setTitleFetched(jsonData.libraryName);
  }, []);

  return (
    <div>
      <h1>{titleFetched}</h1>
    </div>
  );
};

export default BooksTitle;
