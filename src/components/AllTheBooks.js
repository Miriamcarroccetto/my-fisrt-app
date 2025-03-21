import React from 'react'
import books from './romance.json'
export default function AllTheBooks() {
  return (
    
      <div>
      <h2>Lista Libri</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <h4>{book.title}</h4>
            <img src={book.img} alt={book.title} width="100" />
          </li>
        ))}
      </ul>
    </div>
  )
}
