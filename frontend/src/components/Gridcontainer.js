import React,{useState, useEffect} from 'react'
import Spinner from './Spinner'
import { BiLike, BiDislike} from 'react-icons/bi';
import { Line, Circle } from 'rc-progress';



const Gridcontainer = ({movies, isLoading}) => {



  const [supprimer,  aSupprimer ] = useState()


  const getnewMovieList = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/movies/${supprimer}` , {method:'DELETE'});
      const data = await res.json();
      console.log(data);
      //temporary solution refresh the page after deleting an elemnt from the movie list
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getnewMovieList()
  }, [supprimer])


const deleteCard = (e) =>{
  var tobedeleted = e.target.getAttribute('id');
  console.log(tobedeleted)
  aSupprimer(tobedeleted)
}



/*fonction pour incrementer les likes */
const handleLike =() =>{

}


/*fonction pour decrementer les likes */
const handleDislike =() =>{
  
}


  return isLoading ? (<Spinner/>): (
    <div className="showcase-containt">
      {movies.map((movie, index) =>{
        return <div key ={index} className="card">
          <div className="entete">
          <h3 id="title">Title:<span> {movie.title}</span> </h3>
          <p id="category">Category: {movie.category}</p>
          </div>
        <div className="ratio">
        <h3 id="like"><BiLike id ="icons" onClick={handleLike()}/> {movie.likes}</h3>
       <h3 id="dislike"><BiDislike id="icons" onClick={handleDislike}/> {movie.dislikes}</h3>
        </div>
        <div className="ratio">
        <Circle percent={movie.likes} trailWidth="1" className="stroke"  strokeWidth="4" strokeColor="green" />
        <Circle percent={movie.dislikes} trailWidth="1" className="stroke"  strokeWidth="4" strokeColor="maroon" />
        </div>


        <button onClick={deleteCard} id={movie.id} className="delete">Delete</button>
       
     </div>
   
      })}

    </div>
  )
}

export default Gridcontainer
