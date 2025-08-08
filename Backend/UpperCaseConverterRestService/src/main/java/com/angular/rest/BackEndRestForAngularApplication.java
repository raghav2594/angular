package com.angular.rest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.angular.rest.*")
public class BackEndRestForAngularApplication {

	
	public static void main(String[] args) 
	{
		SpringApplication.run(BackEndRestForAngularApplication.class, args);
	}

}
