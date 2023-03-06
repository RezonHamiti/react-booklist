const Book = (props) => {
    const { title, img, author, number } = props; // or directly as parameter with {}
    console.log(number);
    return (
      <>
        <article className="book">
          <>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
            <div className="number">#{number + 1}</div>
            <button>Find Book</button>
          </>
        </article>
      </>
    );
  };

  export default Book;