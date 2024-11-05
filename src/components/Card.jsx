

function Card({ products }) {
  return (
    <>
      {products.map((res, index) => (
        <div className="card" key={index}>
          <div className="img">
            <img
              src={res.thumbnail}
              alt="img"
            />
          </div>
          <div className="title">
            <h3>{res.title}</h3>
            <span>{res.description}</span>
            <span>{res.price}</span>
            <div className="btn">
              <button>Shop now</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
