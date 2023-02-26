package com.control;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Login;
import com.service.LoginService;

@RestController
@RequestMapping("/api/login")
public class LoginController {
	

	@Autowired
	LoginService loginService;
	
	@GetMapping("/login")  
	public Optional<List<Login>> GetAllBooks()   
	{  
		return loginService.getAll();  
	}  


	@PostMapping("/login")  
	public Login SaveBook(@RequestBody Login l)   
	{  
		return loginService.saveLogin(l);  
	}  

}
