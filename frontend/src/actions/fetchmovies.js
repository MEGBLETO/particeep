const  moviesState = {
  loading: true,
  movies: [],
   error: ''
  }




export const movies = () =>{

  return{
    type:'FETCHMOVIES' 
  }

}