import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './App.css'

class Library extends Component{
    render(){
        const books = this.props.books
        const rBooks = books.filter(b=>b.shelf === 'currentlyReading')
        const qBooks = books.filter(b=>b.shelf === 'wantToRead')
        const sBooks = books.filter(b=>b.shelf === 'read')
        return (
            <div className='app'>
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                    {this.props.show(rBooks,"Currently reading")}
                    {this.props.show(qBooks,"Want to Read")}
                    {this.props.show(sBooks,"Read")}
                    </div>
                </div>
                <div className="open-search">
                    <Link className='button' to='/books/search' >search</Link>
                </div>
            
            </div>
            </div>
        )
    }
}
export default Library