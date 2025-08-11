package com.angular.rest.controller;

import java.time.LocalTime;
import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", maxAge = 4800)

public class UserController {

	@GetMapping("/greet")
	public Map<String, String> greetUser(@RequestParam String userName) {
		LocalTime now = LocalTime.now();
		int hour = now.getHour();

		String greeting;
		if (hour >= 5 && hour < 12) {
			greeting = "Good Morning";
		} else if (hour >= 12 && hour < 17) {
			greeting = "Good Afternoon";
		} else {
			greeting = "Good Evening";
		}

		Map<String, String> response = new HashMap<>();
		response.put("message", "Hi " + userName + ", " + greeting);

		return response;	}
}
