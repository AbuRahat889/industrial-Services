
import { Link } from "react-router-dom";
import "../../../src/App.css";

const BookItem = ({ bookes }) => {
  const {
    id,
    image,
    estate_title,
    segment_name,
    description,
    price,
    area,
    facilities,
    location
  } = bookes;

  return (
    <div className="contant">
      <div className="card w-96 bg-base-100 shadow-xl border">
        <figure className="px-5 pt-5">
          <img src={image} alt="Error" className="rounded-sm" />
        </figure>

        <div className="card-body ">
          <h1 className="">
            <span className="text-2xl font-bold mb-2">Facilities :</span>
            {facilities.map((item, idx) => (
              <li key={idx} className="text-[#23be0a] text-xl">
                {item}
              </li>
            ))}
          </h1>

          <h2 className="card-title my-4">{estate_title} </h2>
          <p>{description}</p>
          <p className="text-lg text-[#131313cc] work">
            Segment Name : {segment_name}{" "}
          </p>
          <hr />
          <div className="flex justify-between work">
            <h2>Price : {price}</h2>
            <h2 className="flex items-center justify-center gap-2">
              <span>{area}</span>
            </h2>
          </div>
        </div>
        <Link to={`/bookes/${id}`} className="text-center mb-5">
          <button className="btn btn-warning mt-auto">view Details</button>
        </Link>
      </div>
    </div>
  );
};

export default BookItem;
