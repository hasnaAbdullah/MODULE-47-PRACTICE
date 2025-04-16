import { useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import Books from "../Books/Books";

function Home() {
  const booksData = useLoaderData();
  //   console.log(booksData);
  return (
    <div className="py-10 text-center">
      <Banner />
      <Books booksData={booksData} />
    </div>
  );
}

export default Home;
