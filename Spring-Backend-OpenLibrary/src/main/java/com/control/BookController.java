package com.control;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Book;
import com.service.BookService;

@CrossOrigin(origins = "https://localhost:3000")
@RestController
@RequestMapping("api/library")
public class BookController {
	
	@Autowired
	BookService bookservice;

	@GetMapping("/book")  
	public List<Book> GetAllBooks()   
	{  
		return bookservice.getAllBooks();  
	}  

	@GetMapping("/book/{bookno}") 
	public ResponseEntity<Book> GetBooks(@PathVariable("bookno") long bookno)
	{  
		Book book = bookservice.getBooks(bookno); 
		return ResponseEntity.ok(book);
	}  

	@DeleteMapping("/book/{bookno}")  
	public ResponseEntity<Map<String, Boolean>> DeleteBook(@PathVariable("bookno") long bookno)   
	{  
		bookservice.deleteBook(bookno);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}  

	@PostMapping("/book")  
	public Book SaveBook(@RequestBody Book books)   
	{  
		return bookservice.saveBook(books);  
	}  
	
	@PutMapping("/put")  
	public ResponseEntity<Book> Update(@PathVariable Long id,@RequestBody Book books)   
	{  
		Book book = bookservice.update(books);  
		return ResponseEntity.ok(book); 
	} 
	
	//sorting
	@GetMapping("/asort/{feild}")
	public Iterable<Book> getBookSort(@PathVariable("feild") String feild)
	{
		return bookservice.BookAscendingsort(feild);
	}
	
	@GetMapping("/dsort/{feild}")
	public Iterable<Book> getDesBookSort(@PathVariable("feild") String feild)
	{
		return bookservice.BookDescendingsort(feild);
	}
	
	//paging
	@GetMapping("/page/{pageno}/{pagesize}")
	public Page <Book> getBookPage(@PathVariable("pageno") int pageno,@PathVariable("pagesize") int pagesize)
	{
		return bookservice.Bookpage(pageno,pagesize);
	} 
	
	//page and sort
	@GetMapping("/pagesort/{pageno}/{pagesize}/{feild}")
	public Page<Book> BookPageSort(@PathVariable ("pageno") int pageno,@PathVariable ("pagesize") int pagesize,@PathVariable ("feild")String feild)
	{
		return bookservice.Bookpagesort(pageno, pagesize,feild);
	}
	
	//books by author
	@GetMapping("/byauthor/{author}")
	public Iterable<Book> getAuthorBook(@PathVariable("author") String author)
	{
		return bookservice.AuthorBook(author);
	}
	
	@GetMapping("/start/{letter}")
	public Iterable<Book> getStartBook(@PathVariable("letter") String letter)
	{
		return bookservice.StartBook(letter);
	}
	
	@GetMapping("/rank/{rank}")
	public Iterable<Book> getRankBook(@PathVariable("rank") double rank)
	{
		return bookservice.RankingBook(rank);
	}

}