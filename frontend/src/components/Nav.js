import React,{useState, useEffect} from 'react'
import {clicked} from '../actions/fetchmovies'
import {useDispatch} from 'react-redux'



const Nav = () => {


const dispatch = useDispatch();


const getValue = (e) =>{
 let val = e.target.value;
 dispatch(clicked(val));
}


  const [categories, setCategories] = useState([]);

  const getcategories = async () => {
    const res = await fetch(`http://localhost:5000/api/movies`);
    const data = await res.json();
    setCategories(data);
    //console.log(data);
  };

  useEffect(() => {
    getcategories();
  }, []);

  return (
      <nav className="navigation">
        <h1>Movie Mania</h1>
        <div className="select">
          <label id="navlabel" htmlFor="">Sort By Categoy:</label>
         
          <select name="movies" id="movie-select" onChange={(e) => getValue(e)}>
            <option value="">--Please choose a category in order to filter</option>
             
            {categories.map((categorie, index) => {
              //need to sort the data so that we only have one category of each type in the drop down list
              return (
                <option index={index} value={categorie.category}>
                  {categorie.category}
                </option>
              );
            })}
          </select>
        </div>
      </nav>
  );
};

export default Nav
