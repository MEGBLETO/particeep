import React from 'react'

const Pagination = ({cardPerPage,  totalCards, paginate}) => {


const pageNumbers = [];

for(let i = 1; i <= Math.ceil(totalCards / cardPerPage); i++){
pageNumbers.push(i);
}

console.log(totalCards)

  return (
    <nav className="movement">
      <ul className="pagination">
      <label id="label" htmlFor="Pages">Pages:</label>

           {pageNumbers.map(number => (
             <li key={number} classname="page">
               <a onClick={() => paginate(number)} href="!#" className="link">{number}</a>
             </li>
           ))}
      </ul>
    </nav>
  );
};

export default Pagination;
