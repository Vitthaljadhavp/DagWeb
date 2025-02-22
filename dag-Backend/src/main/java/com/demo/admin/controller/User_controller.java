package com.demo.admin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.admin.entity.User;
import com.demo.admin.repo.User_repo;

@RestController
@CrossOrigin("*")
public class User_controller {

	
	@Autowired
	private User_repo repo;
	

	@PostMapping("userlogin")
	public ResponseEntity<?> loginUser(@RequestBody User logindata){
		User login= repo.findByemail(logindata.getEmail());
		
		// Check if the user exists
		if (login == null) {
			return ResponseEntity.status(404).body("User not found");
		}
		
		if(login.getPassword().equals(logindata.getPassword()))
				return ResponseEntity.ok(login);
		
		return(ResponseEntity<?>) ResponseEntity.internalServerError();
	}
	
	
}
