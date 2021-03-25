//fichier pour combiner mes reducers en 1 points commun


import filter from './filter';

import {combineReducers} from 'redux';




const allReducers = combineReducers({
 filter: filter

})


export default allReducers;