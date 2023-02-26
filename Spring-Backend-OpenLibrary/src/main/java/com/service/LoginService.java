package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.LoginRepository;
import com.entity.Login;

@Service
public class LoginService {
	
	@Autowired
	LoginRepository loginRepository;
	
	public Login saveLogin(Login l)   
	{  
		return loginRepository.save(l);  
	}
	
	public Optional<List<Login>> getAll()   
	{  
		return Optional.of(loginRepository.findAll());  
	} 
}
