import React, {  useState, useEffect } from 'react';
import Loader from "react-loader-spinner";
import Market from './components/Market';
import Filter from './components/Filter';
import Pagination from './components/Pagination';
import { AiOutlineShoppingCart } from "react-icons/ai";

const url = 'http://localhost:8000/api/robots';


const App = () => {
  const [robots, setRobots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const [cartItems, setCartItems] = useState([]);

// fetching robots data from api
 const fetchRobot = async () => {
      setLoading(true);
        try {
            const response = await fetch (url); 
            const result = await response.json();
            setLoading(false);
            setRobots(result.data);
        } 
        catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    useEffect(() => {
      fetchRobot();
    }, [])

  // pagination
 // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = robots.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // removing duplicates of material
  const arr1 = [];
  robots.map((item) => arr1.push(item.material));
  const uniqueMaterials = [...new Set(arr1)];
  const allCategories = ['All', ...new Set(uniqueMaterials.map((robot) => robot))];
  const filterItems = (material) => {
    if(material === 'All') {
      fetchRobot()
      return;
    }
    const newItems = robots.filter((robot) => robot.material === material)
    setRobots(newItems);
  }

// setting the loading element
   if(loading) {
    return <main className='w-1/5 my-36 mx-auto text-center'>
      <Loader type="Hearts" color="#00BFFF" height={150} width={150} />
    </main>
  }

  // setting up cart
 
  const onAdd = (robot) => {
    const exist = cartItems.find((x) => x.name === robot.name);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.name === robot.name ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...robot, qty: 1 }]);
    }
  };

  return (
    <main className="p-4">
    	<p className='text-3xl sm:text-5xl font-semiBold text-gray-400 text-center'>ROBOT MARKET</p>
      
    <div className="grid grid-cols-12 grid-rows-auto gap-6 my-8 text-gray-700 relative">

		<div className="col-span-3 fixed top-8 w-1/4">
          <p className='my-6 text-2xl font-bold'>Product Material</p>

          <div className="flex justify-around items-center flex-wrap mr-6">
           <Filter allCategories={allCategories} filterItems={filterItems} />
        </div>

        <div className="mt-28">
            <button className='flex justify-center items-center text-center p-6 bg-red-500 hover:bg-red-700 rounded w-2/4 h-12 text-white'>
                    <AiOutlineShoppingCart className='text-3xl mr-4' /> Cart <sup>{cartItems.length}</sup>
            </button>
        </div>
		</div>

		<div className="col-span-9 absolute right-0 w-3/4">
			  <Market robots={currentPosts} onAdd={onAdd} />
        <Pagination postsPerPage={postsPerPage} totalPosts={robots.length} paginate={paginate} />
		</div>

	  </div>
    </main>
  );
}

export default App;
