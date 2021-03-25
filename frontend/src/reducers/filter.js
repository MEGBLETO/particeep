




//REDUCER
const filter = (state= 'All' , action) =>{
  // eslint-disable-next-line default-case
  switch(action.type){
    case 'CLICKED':
         return action;

    default: return state;
  }
};

export default filter;