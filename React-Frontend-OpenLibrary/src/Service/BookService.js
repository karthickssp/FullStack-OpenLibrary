import axios from 'axios';

const base_url="https://localhost:8080/api/books";

class BookService
{
    getBooks(){
        return axios.get(base_url);
    }

    createBook(Book){
        return axios.post(base_url, Book);
    }

    getBookById(Bookno){
        return axios.get(base_url + '/' + Bookno);
    }

    updateBook(Bookno, Book){
        return axios.put(base_url + '/' + Bookno, Book);
    }

    deleteBook(Bookno){
        return axios.delete(base_url + '/' + Bookno);
    }
}
export default new BookService()