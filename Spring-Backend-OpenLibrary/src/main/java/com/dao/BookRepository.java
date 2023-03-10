package com.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.entity.Book;

public interface BookRepository extends JpaRepository<Book,Long>{

	@Override
	List<Book>findAll();

	Page<Book> findAll(Pageable paging);	
	
	List<Book> findByAuthor(String author);
	
	List<Book> findBybooknameStartingWith(String letter);
	
	List<Book> findByratingGreaterThan(double rank);


}