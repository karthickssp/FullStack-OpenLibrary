package com.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="librarybooks")

public class Book {
	
	@Id
	private long bookno;
	private String bookname;
	private String bookauthor;
	private String category;
	private String releasedate;
	private double rating;
	private long pageno;
	private int languages;
	private int chapters;
	
	public Book()
	{
		
	}

	public Book(long bookno, String bookname, String bookauthor, String category, String releasedate, double rating,
			long pageno, int languages, int chapters) {
		super();
		this.bookno = bookno;
		this.bookname = bookname;
		this.bookauthor = bookauthor;
		this.category = category;
		this.releasedate = releasedate;
		this.rating = rating;
		this.pageno = pageno;
		this.languages = languages;
		this.chapters = chapters;
	}

	public long getBookno() {
		return bookno;
	}

	public void setBookno(long bookno) {
		this.bookno = bookno;
	}

	public String getBookname() {
		return bookname;
	}

	public void setBookname(String bookname) {
		this.bookname = bookname;
	}

	public String getBookauthor() {
		return bookauthor;
	}

	public void setBookauthor(String bookauthor) {
		this.bookauthor = bookauthor;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getReleasedate() {
		return releasedate;
	}

	public void setReleasedate(String releasedate) {
		this.releasedate = releasedate;
	}

	public double getRating() {
		return rating;
	}

	public void setRating(double rating) {
		this.rating = rating;
	}

	public long getPageno() {
		return pageno;
	}

	public void setPageno(long pageno) {
		this.pageno = pageno;
	}

	public int getLanguages() {
		return languages;
	}

	public void setLanguages(int languages) {
		this.languages = languages;
	}

	public int getChapters() {
		return chapters;
	}

	public void setChapters(int chapters) {
		this.chapters = chapters;
	}
	
	
	
}