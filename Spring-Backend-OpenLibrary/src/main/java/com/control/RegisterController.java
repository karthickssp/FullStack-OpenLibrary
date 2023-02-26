package com.control;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Register;
import com.service.RegisterService;

@RestController
@RequestMapping("/api/register")
public class RegisterController {
	
	@Autowired
	RegisterService registerservice;
	
	@GetMapping("/book")  
	public Optional<List<Register>> GetAllBooks()   
	{  
		return registerservice.getAll();  
	}  

	@GetMapping("/book/{bookno}") 
	public ResponseEntity<Optional<Register>> GetBooks(@PathVariable("bookno") long code)
	{  
		Optional<Register> re = registerservice.getRegister(code); 
		return ResponseEntity.ok(re);
	}  

	@DeleteMapping("/book/{bookno}")  
	public ResponseEntity<Map<String, Boolean>> DeleteBook(@PathVariable("bookno") long code)   
	{  
		registerservice.deleteRegister(code);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}  

	@PostMapping("/book")  
	public Register SaveBook(@RequestBody Register r)   
	{  
		return registerservice.saveRegister(r);  
	}  
	
	@PutMapping("/put")  
	public ResponseEntity<Register> Update(@PathVariable Long id,@RequestBody Register r)   
	{  
		Register re = registerservice.updateRegister(r);  
		return ResponseEntity.ok(re); 
	} 
	
	
}