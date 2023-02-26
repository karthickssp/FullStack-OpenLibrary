package com.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="registerdetails")
public class Register {
	
	@Id
	private long code;
	private String firstname;
	private String lastname;
	private String email;
	private String phoneno;
	private String dob;
	private String username;
	private String password;
	
	public Register()
	{
		
	}

	public Register(long code, String firstname, String lastname, String email, String phoneno, String dob,
			String username, String password) {
		super();
		this.code = code;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.phoneno = phoneno;
		this.dob = dob;
		this.username = username;
		this.password = password;
	}

	public long getCode() {
		return code;
	}

	public void setCode(long code) {
		this.code = code;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhoneno() {
		return phoneno;
	}

	public void setPhoneno(String phoneno) {
		this.phoneno = phoneno;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
}
