import React, { Component } from 'react'
import BookService from './Service/BookService'

export class ViewBooks extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            book: {}
        }
    }

    componentDidMount(){
        BookService.getBookById(this.state.id).then( res => {
            this.setState({book: res.data});
        })
    }
  render() {
    return (
        <div>
        <br></br>
        <div className = "card col-md-6 offset-md-3">
            <h3 className = "text-center"> View Book Details</h3>
            <div className = "card-body">
                <div className = "row">
                    <label> Book Number: </label>
                    <div> { this.state.book.bookno }</div>
                </div>
                <div className = "row">
                    <label> Book Name: </label>
                    <div> { this.state.book.bookname }</div>
                </div>
                <div className = "row">
                    <label> Book AuthorName: </label>
                    <div> { this.state.book.bookauthor }</div>
                </div>
                <div className = "row">
                    <label> Book Category: </label>
                    <div> { this.state.book.category }</div>
                </div>
                <div className = "row">
                    <label> Book ReleseDate: </label>
                    <div> { this.state.book.relesrdate }</div>
                </div>
                <div className = "row">
                    <label> Book Rating: </label>
                    <div> { this.state.book.rating }</div>
                </div>
                <div className = "row">
                    <label> Book PageNumber: </label>
                    <div> { this.state.book.pageno }</div>
                </div>
                <div className = "row">
                    <label> Book Languages: </label>
                    <div> { this.state.book.languages }</div>
                </div>
                <div className = "row">
                    <label> Book Chapters: </label>
                    <div> { this.state.book.chapters }</div>
                </div>
                
            </div>

        </div>
    </div>
    )
  }
}

export default ViewBooks