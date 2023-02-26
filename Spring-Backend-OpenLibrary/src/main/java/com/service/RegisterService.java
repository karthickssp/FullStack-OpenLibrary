package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.RegisterRepository;
import com.entity.Register;

@Service
public class RegisterService {
	
	@Autowired
	RegisterRepository registerRepository;
	
	public Optional<List<Register>> getAll()   
	{  
		return Optional.of(registerRepository.findAll());  
	}  
	
	public Optional<Register> getRegister(long code)   
	{  
		return registerRepository.findById(code); 
	}  
	
	public void deleteRegister(long code)   
	{  
		registerRepository.deleteById(code);  
	}  
	
	public Register saveRegister(Register r)   
	{  
		return registerRepository.save(r);  
	}
	
	public Register updateRegister(Register r)   
	{  
		registerRepository.save(r);  
		return r;  
	}  

}
