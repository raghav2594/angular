package com.angular.rest.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.angular.rest.dto.MessageRequest;

@RestController
@RequestMapping("/api")
public class UppercaseConverterController {
	
	@CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/uppercase")
    public ResponseEntity<MessageRequest> uppercaseConverter(@RequestBody MessageRequest request)
	{
    	request.setMessage(request.getMessage().toUpperCase());
		return ResponseEntity.ok(request);
	}
}
