import React from 'react';
import Books from './Books'
import Library from './Library'
import { Route } from 'react-router-dom'
import * as bookApi from './BooksAPI'
import data from './booksData.js'

class App extends React.Component{
  state = {
    books:[]
  
  }
  componentDidMount(){
    this.setState({
      books: data.books
    })
  }
  loadBooks = ()=>{
      const ebooks = bookApi.getAll()
      console.log("ebooks",ebooks)
      this.setState(()=>({
        books:ebooks
      }))
  }
  showAction = (bookName) =>{
    const ubooks = this.state.books
    ubooks.filter(book => book.title === bookName).map(book => book.action = !book.action)
    this.setState(()=>({
      books: ubooks
  }))
  }

  setAction = (event) => {
    const id = event.target.name
    const action = event.target.value
    const ubooks = this.state.books
    ubooks.filter(book => book.id === id).map(book => {book.shelf = action
      book.action=false})
    this.setState(()=>({
      books:ubooks
    }))
  }

showBooks = (books,bookShelfTitle) => (
  <div className="bookshelf">
      <h2 className="bookshelf-title">{bookShelfTitle}</h2>
      <div className="bookshelf-books">
          {this.listBooks(books)}
      </div>
  </div>
      
)
listBooks = (books)=>(
<ol className="books-grid">
  {books.map(book =>(
      <li>
          <div className="book">
          <div className="book-top">
              <div onClick={(event) => this.showAction(book.title)} className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(${book.imageLinks.smallThumbnail})' }}></div>
              {book.action && this.shelfChanger(book)}
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.author}</div>
          </div>
      </li>
  ))}
</ol>
)
shelfChanger = (book) => (
<div className="book-shelf-changer">
  <select name={book.id} value={book.shelf} onChange={this.setAction}>
      <option value="move" disabled>Move to...</option>
      <option ></option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
  </select>
</div>
)

  render() {
    return <div className="App-header">
              <Route exact path="/books/search" render={()=>(<Books show={this.showBooks} books={this.state.books}/>)
                }>
              </Route>
              <Route exact path="/books" render={()=>(<Library show={this.showBooks} books={this.state.books}/>)
                }>
              </Route>
            </div>
  }
}

export default App;
