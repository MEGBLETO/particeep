import React,{useState, useEffect} from 'react'
import Gridcontainer from './Gridcontainer'
import Pagination from './Pagination'
import {useSelector} from 'react-redux'


const Showcase = () => {

  /*Acess the clicked value from inside my nav to make the filter work */

const clicked = useSelector(state => state.filter);

const clickedValue = {clicked};


const ActualVal = clickedValue.clicked.value;

console.log(ActualVal)



  /*********************for the movies */
  const [movies, setMovies] = useState([]);
  const [isloading, setisLoading] = useState(true);



  const getMovies = async () => {
    
    const res = await fetch(`http://localhost:5000/api/movies`);
    const data = await res.json();

    setMovies(data);
    setisLoading(false);
  };

  const getByCategories = async () => {
    
    const res = await fetch(`http://localhost:5000/api/movies/${ActualVal}`);
    const data = await res.json();

    setMovies(data);
    setisLoading(false);
  };
  
  useEffect(() => {
    if(ActualVal == null){
      getMovies();
    }
    else{
      getByCategories();
    }
  }, [ActualVal]);
  
  
  
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
