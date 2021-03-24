const express = require('express');
const {movies$} = require('./movies')

var cors = require('cors')



//expresss init

const app = express()



//Middlewares
app.use(cors());
app.use(express.json());


/*************************** */
/*Here is my route to fetch all movies */
app.get('/api/movies', (req, res) =>{
try {

   movies$.then((moviess) =>{
    res.json(moviess);

   })
  
} catch (error) {
  console.log(error.message);
}
});


//here i want to define a route to get movies based on their category


app.get('/api/movies/:category' , async(req, res) =>{
  try {
    const movieCategory= req.params.category;
    
    movies$.then((moviess) =>{
       const data = moviess.filter(movie => movie.category === movieCategory);
       res.json(data);
     })
       
    } catch (error) {
    console.log(error.message)
  }
  });
  
  



//Here i'm implementing the delete route in order to delete a particular movie based on their id

app.delete('/api/movies/:id' , async(req, res) =>{
try {
  const movieId = req.params.id;
  
  movies$.then((moviess) =>{
    let movieArray = moviess;
    const data = moviess.filter(movie => movie.id !== movieId);
     const array = data;
    res.json(array);
  })
     

  console.log(movieId);
} catch (error) {
  console.log(error.message)
}
});






const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`the Server started on port ${PORT}`));