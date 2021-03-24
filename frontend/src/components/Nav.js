import React,{useState, useEffect} from 'react'



const Nav = () => {


  const [categories, setcategories] = useState()
  



  const getcategories = async() =>{
    const res = await fetch(`http://localhost:5000/api/movies`)
    const data =  await res.json();
    setcategories(data);
    console.log(data)
}

  useEffect(() => {
  getcategories();
  },[])

  return (
    <div>
      <nav className="navigation">
        <h1>Movie Mania</h1>
        <div className="select">
          <select name="movies" id="movie-select">
          <option value="">--Please choose an option</option>

         {/*{categories.map((categorie ,index)=>{
              return <option index={index} value={categorie.category}>{categorie.category}</option>
            })}  */}
          </select>
        </div>
      </nav>
    </div>
  );
}

export default Nav
