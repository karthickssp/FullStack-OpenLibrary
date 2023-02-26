import React, { Component } from 'react'
import BookService from './Service/BookService'

export class CreateBook extends Component {

  constructor(props) {
    super(props)

    this.state = {
        // step 2
        id: this.props.match.params.id,
        bookno: '',
        bookname: '',
        bookauthor: '',
        category: '',
        releasedate: '',
        rating: '',
        pageno: '',
        languages: '',
        chapters: ''
    }
    this.changeBookNoHandler = this.changeBookNoHandler.bind(this);
    this.changeBookNameHandler = this.changeBookNameHandler.bind(this);
    this.changeBookAuthorHandler = this.changeBookAuthorHandler.bind(this);
    this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
    this.changeReleaseDateHandler = this.changeReleaseDateHandler.bind(this);
    this.changeRatingHandler = this.changeRatingHandler.bind(this);
    this.changePageNoHandler = this.changePageNoHandler.bind(this);
    this.changeLanguagesHandler = this.changeLanguagesHandler.bind(this);
    this.changeChaptersHandler = this.changeChaptersHandler.bind(this);
    this.saveOrUpdateBook = this.saveOrUpdateBook.bind(this);
}

// step 3
componentDidMount(){

    // step 4
    if(this.state.id === '_add'){
        return
    }else{
        BookService.getBookById(this.state.id).then( (res) =>{
            let book = res.data;
            this.setState({
                bookno: book.bookno,
                bookname: book.bookname,
                bookauthor: book.bookauthor,
                category: book.category,
                releasedate: book.releasedate,
                rating: book.rating,
                pageno: book.pageno,
                languages: book.languages,
                chapters: book.chapters
            });
        });
    }        
}
saveOrUpdateBook = (e) => {
    e.preventDefault();
    let book = {
        bookno: this.state.bookno,
        bookname: this.state.bookname,
        bookauthor: this.state.bookauthor,
        category: this.state.category,
        releasedate: this.state.releasedate,
        rating: this.state.rating,
        pageno: this.state.pageno,
        languages: this.state.languages,
        chapters: this.state.chapters
    };
    console.log('book => ' + JSON.stringify(book));

    // step 5
    if(this.state.id === '_add'){
        BookService.createBook(book).then(res =>{
            this.props.history.push('/books');
        });
    }else{
        BookService.updateBook(book, this.state.id).then( res => {
            this.props.history.push('/books');
        });
    }
}

changeBookNoHandler = (event) => {
    this.setState({bookno: event.target.value});
}

changeBookNameHandler = (event) => {
    this.setState({bookname: event.target.value});
}

changeBookAuthorHandler = (event) => {
    this.setState({bookauthor: event.target.value});
}

changeCategoryHandler = (event) => {
    this.setState({category: event.target.value});
}

changeReleaseDateHandler = (event) => {
    this.setState({releasedate: event.target.value});
}

changeRatingHandler = (event) => {
    this.setState({rating: event.target.value});
}

changePageNoHandler = (event) => {
    this.setState({pageno: event.target.value});
}

changeLanguagesHandler = (event) => {
    this.setState({languages: event.target.value});
}

changeChaptersHandler = (event) => {
  this.setState({ chapters: event.target.value });
};

cancel() {
  this.props.history.push('/books');
}

getTitle(){
  if(this.state.id === '_add'){
      return <h3 className="text-center">Add Book</h3>
  }else{
      return <h3 className="text-center">Update Book</h3>
  }
}
  render() {
    return (
        <div>
        <br></br>
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        {
                            this.getTitle()
                        }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group">
                                    <label> Book Number: </label>
                                    <input placeholder="Book Number" name="bookno" className="form-control" 
                                        value={this.state.bookno} onChange={this.changeBookNoHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Book Name: </label>
                                    <input placeholder="Book Name" name="bookname" className="form-control" 
                                        value={this.state.bookname} onChange={this.changeBookNameHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Book Author: </label>
                                    <input placeholder="Book Author" name="bookauthor" className="form-control" 
                                        value={this.state.bookauthor} onChange={this.changeBookAuthorHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Category: </label>
                                    <input placeholder="Category" name="category" className="form-control" 
                                        value={this.state.category} onChange={this.changeCategoryHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Release Date: </label>
                                    <input placeholder="Release Date" name="releasedate" className="form-control" 
                                        value={this.state.releasedate} onChange={this.changeReleaseDateHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Rating: </label>
                                    <input placeholder="Rating" name="rating" className="form-control" 
                                        value={this.state.rating} onChange={this.changeRatingHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Page Number: </label>
                                    <input placeholder="Page Number" name="pageno" className="form-control" 
                                        value={this.state.pageno} onChange={this.changePageNoHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Languages: </label>
                                    <input placeholder="Languages" name="languages" className="form-control" 
                                        value={this.state.languages} onChange={this.changeLanguagesHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Chapters: </label>
                                    <input placeholder="Chapters" name="chapters" className="form-control" 
                                        value={this.state.chapters} onChange={this.changeChaptersHandler}/>
                                </div>
                                    <button className="btn btn-success" onClick={this.saveOrUpdateBook}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

               </div>
        </div>

    )
  }
}

export default CreateBook