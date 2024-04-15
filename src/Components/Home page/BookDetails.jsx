
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
import '../../../src/App.css';
import { GrLocation } from "react-icons/gr";

const BookDetails = () => {
  const bookData = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const bookes = bookData.find((bookes) => bookes.id == idInt);


  return (
    <div className="contant">
      <Helmet>
        <title>UrbanNest | Details {id}</title>
      </Helmet>

      <div className="hero rounded-lg bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-48">
          <div className="text-center lg:text-left flex-1">
            <h1 className="text-3xl font-bold">{bookes.estate_title}</h1>
            
            <h2 className="my-4 text-2xl font-bold">Area: {bookes.area}</h2>
            <hr />
            <h2 className="text-xl font-semibold py-2">{bookes.description}</h2>
            <hr />

            <p className="flex my-4 font-xl font-bold items-center">
              Facilities :
              {bookes.facilities.map((item, idx) => (
                <p key={idx} className="text-[#23be0a] text-xl mx-3">
                  {item}
                </p>
              ))}
            </p>
            <hr />
            <div className="space-y-4 text-xl">
              <h1>Price : {bookes.price}</h1>
              <h1>Status: {bookes.status}</h1>
              <div className="flex gap-1 items-center">
                <h1>Location : </h1>
                <GrLocation  className="text-warning"/>
                {bookes.location}
              </div>
              
            </div>

          </div>

          {/* image  */}
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 flex-1">
            <img src={bookes.image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
