
//REDUCER
const movies = (state=0, action) =>{
  // eslint-disable-next-line default-case
  switch(action.type){
    case 'FETCHMOVIES':
         return state + 1;

    case 'DELETEMOVIES':
           return state -1;

    default: return state;
  }
  return state;
};

export default movies;