import { useLoaderData } from "react-router-dom";
import BookItem from "./BookItem";
import { Helmet } from "react-helmet-async";
import Slider from "./Slider";

const HomePage = () => {
  const BookesData = useLoaderData([]);
  //   console.log(BooksData);
  return (
    <div>
      <Helmet><title>Book Vibe |Home</title></Helmet>
      {/* bannar section  */}

    
      <Slider></Slider>
    
      <h1 className="text-4xl font-bold text-center mt-20">
        Books : {BookesData.length}
      </h1>

      {/* use card */}
      <div className="grid md:grid-cols-3 gap-4 mt-10">
        {BookesData.map((bookes) => (
          <BookItem key={BookesData.id} bookes={bookes}></BookItem>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
