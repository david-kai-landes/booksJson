import React from "react";
import "../styles/booksData.css";

const BooksData = ({ booksFetched }) => {
  let display;

  if (booksFetched && booksFetched.length > 0) {
    display = booksFetched.map((item, index) => {
      const {
        title,
        description,
        author,
        genre,
        publishedDate,
        available,
        coverImage,
      } = item;

      const fullDate = publishedDate;
      const yearPublished = fullDate.slice(0, -6);
      // console.log("=====", item);

      return (
        <div className="row">
          <div className="column">
            <div className="card">
              <div className="imageCont">
                <img src={coverImage} alt={title} className="image" />
              </div>
              <div className="titleText">{title}</div>
              <div className="authorText">By {author}</div>
              <div className="genreContainer">
                <div className="genreText">
                  {genre} - {yearPublished}
                </div>
              </div>
              <div className="descripText">{description}</div>
              <div className="availableText">
                {available ? "Read" : "Want To Read"}
              </div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    display = (
      <div>
        <div>NO BOOKS FOUND</div>
      </div>
    );
  }
  return <div>{display}</div>;
};

export default BooksData;
