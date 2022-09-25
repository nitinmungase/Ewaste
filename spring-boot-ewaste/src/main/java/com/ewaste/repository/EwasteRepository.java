package com.ewaste.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ewaste.models.Ewaste;

@Repository
public interface EwasteRepository extends JpaRepository<Ewaste, Long> {

	List<Ewaste> findByUsername_id(Long username_id);
}
