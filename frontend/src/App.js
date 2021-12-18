import React, {  useState, useEffect } from 'react';
import Loader from "react-loader-spinner";
import Header from './components/Header';
import Market from './components/Market';
import Pagination from './components/Pagination';

const url = 'http://localhost:8000/api/robots';

const App = () => {
  const [robots, setRobots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [counter, setCounter] = useState(0);

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
 const setCount = () => {
  setCounter(counter + 1);
 }

  return (
    <main className="p-6 bg-gray-700 text-white">
      <Header counter={counter} allCategories={allCategories} filterItems={filterItems} robots={robots} />
      <Market robots={currentPosts} setCount={setCount}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={robots.length} paginate={paginate} />
    </main>
  );
}

export default App;
