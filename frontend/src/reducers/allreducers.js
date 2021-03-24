//fichier pour combiner mes reducers en 1 points commun


import movies from './Movies';

import {combineReducers} from 'redux';




const allReducers = combineReducers({
 movies: movies

})


export default allReducers;