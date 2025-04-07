import { fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AllTheBooks from './components/AllTheBooks';




describe ('App', () => {
  it ('renders the Welcome component', () => {
    render(<App/>)
    const linkElement= screen.getByRole( 'heading', {name: /EPIBOOKS/i})
    expect (linkElement).toBeInTheDocument()
  })
})

  it ('renders exactly number of books',  () => {
    render(<App/>)
    const cards =  screen.getAllByTestId('book-card')
    expect (cards).toHaveLength(6)
  })

  it ('renders the CommentArea component', () => {
    render(<BrowserRouter> <AllTheBooks searchBook=""/> </BrowserRouter>)
    const commentArea = screen.getByTestId('comment-area')
    expect(commentArea).toBeInTheDocument()
    expect(commentArea).toHaveTextContent('Seleziona un libro per visualizzare le recensioni')
  })


  it ('renders searched book', () => {
    render(<App/>)
    const searchInput = screen.getByPlaceholderText('Titolo del Libro...')
    fireEvent.change(searchInput, {target: {value: 'Edge of Eternity'}})
    expect(screen.getByText('Edge of Eternity')).toBeInTheDocument() 

  
    fireEvent.change(searchInput, {target: {value: 'Angeli e Demoni'}})
    expect (screen.queryByText('Angeli e Demoni')).not.toBeInTheDocument()
    
  })

  it ('renders changed card color', ()=> {
    render (<BrowserRouter> <AllTheBooks searchBook=""/> </BrowserRouter>)
    const borderCard = screen.getAllByTestId('book-card')
    const card = borderCard[0]
    const card2 = borderCard[1]

    fireEvent.click(card)
    expect(card).toHaveStyle('border: 2px solid red')

    fireEvent.click(card2)
    expect(card).toHaveStyle(' border: 1px solid #ccc')
    expect(card2).toHaveStyle('border: 2px solid red')
  })

  
it ('renders no singleComment component', ()=> {
  render (<App/>)
  const singleComment = screen.queryByTestId('single-comment')
  expect(singleComment).not.toBeInTheDocument()
})

it ('renders reviews', async ()=> {
  render (<App/>)
  const book = screen.getAllByTestId('book-card')


  fireEvent.click(book[0])

  const review = await screen.findAllByTestId('single-comment')
  const expectedReview = [
    "pollo",
    "pollo cotto",
    "ok bello",
    "Che libro meraviglioso",
    "ehfiuewuf",
    "mario: ao"
  ]
  
 review.forEach((review, index)=> { expect(review).toHaveTextContent(expectedReview[index])})

})
