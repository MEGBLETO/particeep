import React,{useState, useEffect} from 'react'
import Gridcontainer from './Gridcontainer'


const Showcase = () => {
  const [movies, setMovies] = useState();
  const [isloading, setisLoading] = useState(true);

  const getMovies = async () => {
    const res = await fetch(`http://localhost:5000/api/movies`);
    const data = await res.json();

    setMovies(data);
    setisLoading(false);
    console.log(movies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="showcase">
      <Gridcontainer isLoading={isloading} movies={movies} />

      <div className="movement">
        <button id="fetch">Previous</button>
        <button id="fetch">Next</button>
      </div>
    </div>
  );
};

export default Showcase
