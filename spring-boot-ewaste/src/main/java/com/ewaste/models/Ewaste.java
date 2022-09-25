package com.ewaste.models;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Ewaste {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String title;
	private String date;
	private int quantity;

	@Column(name = "username_id")
	private long usernameid;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "username_id", nullable = false, insertable = false, updatable = false)
	private User username;
	private int ecopoints;
	private double weight;

	public Ewaste() {
		super();
	}

	public long getId() {
		return id;
	}

	public double getWeight() {
		return weight;
	}

	public void setWeight(double weight) {
		this.weight = weight;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public User getUsername() {
		return username;
	}

	public void setUsername(User username) {
		this.username = username;
	}

	public int getEcopoints() {
		return ecopoints;
	}

	public void setEcopoints(int ecopoints) {
		this.ecopoints = ecopoints;
	}

	public long getUsernameid() {
		return usernameid;
	}

	public void setUsernameid(int usernameid) {
		this.usernameid = usernameid;
	}

	@Override
	public String toString() {
		return "Ewaste [id=" + id + ", title=" + title + ", date=" + date + ", quantity=" + quantity
				+ ", username=" + username + ", ecopoints=" + ecopoints + ", weight=" + weight + "]";
	}

	public Ewaste(long id, String title, String date, int quantity, User username, int ecopoints,
			double weight) {
		super();
		this.id = id;
		this.title = title;
		this.date = date;
		this.quantity = quantity;
		this.username = username;
		this.ecopoints = ecopoints;
		this.weight = weight;
	}

}
