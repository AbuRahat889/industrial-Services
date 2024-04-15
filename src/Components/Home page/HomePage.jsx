import { useLoaderData } from "react-router-dom";
import BookItem from "./BookItem";
import { Helmet } from "react-helmet-async";
import Slider from "./Slider";
import AbutUs from "../About/AbutUs";

const HomePage = () => {
  const BookesData = useLoaderData([]);
  //   console.log(BooksData);
  return (
    <div>
      <Helmet><title>UrbanNest | Home</title></Helmet>
      {/* bannar section  */}

    
      <Slider></Slider>
    
      <h1 className="text-4xl font-bold text-center mt-20">
      Our Services
      </h1>
      <div className="divider divider-warning px-96 text-center"></div>

      {/* use card */}
      <div className="grid md:grid-cols-3 gap-4 mt-10">
        {BookesData.map((bookes) => (
          <BookItem key={BookesData.id} bookes={bookes}></BookItem>
        ))}
      </div>
      <AbutUs></AbutUs>
    </div>
  );
};

export default HomePage;
