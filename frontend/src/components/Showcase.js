import React,{useState, useEffect} from 'react'
import Gridcontainer from './Gridcontainer'
import Pagination from './Pagination'
//import {useSelector} from 'react-redux'


const Showcase = () => {
  const [movies, setMovies] = useState([]);
  const [isloading, setisLoading] = useState(true);



  const getMovies = async () => {
    const res = await fetch(`http://localhost:5000/api/movies`);
    const data = await res.json();

    setMovies(data);
    setisLoading(false);
  };
  
  useEffect(() => {
    getMovies();
  }, []);
  
  
  console.log(movies);
  
  //here i'm dealing with the pagination

  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage] =useState(4);
    
  
  
  //Get current cards
  /*Here I'm getting the index of the last card  */
  const indexofLastCard = currentPage * cardPerPage;
  
  /*Here I'm getting the index of the the first card  */
  const indexofFirstCard= indexofLastCard - cardPerPage;
       
  /*Here I'm getting the current card  */

  const currentCards = movies.slice(indexofFirstCard, indexofLastCard);

  const paginate= (pageNumbers) =>  setCurrentPage(pageNumbers);

  return (
    <div className="showcase">
      <Gridcontainer isLoading={isloading} movies={currentCards} />
      <Pagination cardPerPage={cardPerPage}
       totalCards={movies.length} 
       paginate={paginate}/>
    </div>
  );
};

export default Showcase
