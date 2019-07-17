import React, { Component} from 'react'
import {Link} from 'react-router-dom'
import './App.css'

class Books extends Component{
    state = {
        query:''
    }
    search = (query1)=>{
        this.setState(()=>({
            query:query1
        }))
    }
    render() {
        const books = this.props.books
        const query = this.state.query
        const showBooks = query === ''? books: 
        books.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()))
        return (
            <div className="app">
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/books" className="close-search">HOME</Link>
                        <div className="search-books-input-wrapper">
                            <input type='text' onChange={(event) => this.search(event.target.value)} />
                        </div>
                    </div>
                    <div className="search-books-results">
                        {this.props.show(showBooks)}
                    </div>
                </div>
            </div>
        )
    }
}
export default Books