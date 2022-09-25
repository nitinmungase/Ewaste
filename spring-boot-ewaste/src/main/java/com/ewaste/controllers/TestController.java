package com.ewaste.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ewaste.models.Ewaste;
import com.ewaste.security.services.EwasteService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController {

	@Autowired
	private EwasteService ewasteService;

	@GetMapping("/all")
	public String allAccess() {
		return "Public Content.";
	}

	@GetMapping("/user/{username_id}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public ResponseEntity<List<Ewaste>> getItem(@PathVariable Long username_id) {
		return new ResponseEntity<List<Ewaste>>(ewasteService.findByUsername_id(username_id), HttpStatus.OK);
	}

	@PostMapping("/user")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public Ewaste addItem(@RequestBody Ewaste item) {
		return this.ewasteService.addItem(item);
	}

	@PutMapping("/user")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public Ewaste updateItem(@RequestBody Ewaste item) {
		return this.ewasteService.updateItem(item);
	}

	@DeleteMapping("/user/{itemId}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public ResponseEntity<HttpStatus> deleteItem(@PathVariable int itemId) {
		try {
			this.ewasteService.deleteItem(itemId);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/admin")
	@PreAuthorize("hasRole('ADMIN')")
	public List<Ewaste> getItems() {
		return this.ewasteService.getItems();
	}
	
	
}
