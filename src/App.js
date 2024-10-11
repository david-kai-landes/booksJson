import React, { useState, useEffect } from "react";
import "../src/styles/App.css";
import BooksData from "../src/components/booksData";
import BooksTitle from "./components/booksTitle";
import jsonData from "../src/jsonData.json";

function App() {
  const [booksFetched, setBooksFetched] = useState([]);

  useEffect(() => {
    setBooksFetched(jsonData.books);
  }, []);
  // console.log("<<<<", booksFetched);

  return (
    <div className="backGround">
      <div className="firstContainer">
        <div className="titleContainer">
          <div>
            <BooksTitle />
          </div>
        </div>
      </div>
      <div className="seconContainer">
        <div className="cardsContainer">
          <div className="cardsInnerCont">
            <BooksData booksFetched={booksFetched} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
