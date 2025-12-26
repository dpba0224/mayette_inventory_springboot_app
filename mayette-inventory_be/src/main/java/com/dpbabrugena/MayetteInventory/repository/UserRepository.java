package com.dpbabrugena.MayetteInventory.repository;

import com.dpbabrugena.MayetteInventory.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
