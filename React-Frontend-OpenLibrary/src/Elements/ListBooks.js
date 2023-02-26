import React, { Component } from 'react'
import BookService from './Service/BookService'

export class ListBooks extends Component {

    constructor(props) {
        super(props)

        this.state = {
                books: []
        }
        this.addBook = this.addBook.bind(this);
        this.editBook = this.editBook.bind(this);
        this.deleteBook = this.deleteBook.bind(this);
    }

    deleteBook(id){
        BookService.deleteBook(id).then( res => {
            this.setState({books: this.state.books.filter(book => book.id !== id)});
        });
    }
    viewBook(id){
        this.props.history.push(`/view-book/${id}`);
    }
    editBook(id){
        this.props.history.push(`/add-book/${id}`);
    }

    componentDidMount(){
        BookService.getBook().then((res) => {
            this.setState({ book: res.data});
        });
    }

    addBook(){
        this.props.history.push('/add-book/_add');
    }

  render() {
    return (
        <div>
        <h2 className="text-center">Library Book List</h2>
        <div className = "row">
           <button className="btn btn-primary" onClick={this.addEmployee}> Add New Book</button>
        </div>
        <br></br>
        <div className = "row">
               <table className = "table table-striped table-bordered">

                   <thead>
                       <tr>
                           <th> Book Number</th>
                           <th> Book Name</th>
                           <th> Book Author</th>
                           <th> Book Category</th>
                           <th> Book ReleseDate</th>
                           <th> Book Rating</th>
                           <th> Book PageNumber</th>
                           <th> Book Languages</th>
                           <th> Book Chapter</th>
                           <th> Actions</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           this.state.books.map(
                               book => 
                               <tr key = {book.id}>
                                    <td> { book.bookno} </td>   
                                    <td> { book.bookname} </td>   
                                    <td> { book.bookauthor} </td>   
                                    <td> { book.category} </td>   
                                    <td> { book.relesedate} </td>   
                                    <td> { book.rating} </td>   
                                    <td> { book.pageno} </td>   
                                    <td> { book.languages} </td>   
                                    <td> { book.chapters} </td>   
                                    
                                    <td>
                                        <button onClick={ () => this.editBook(book.id)} className="btn btn-info">Update </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                                    </td>
                               </tr>
                           )
                       }
                   </tbody>
               </table>

        </div>

   </div>
    )
  }
}

export default ListBooks