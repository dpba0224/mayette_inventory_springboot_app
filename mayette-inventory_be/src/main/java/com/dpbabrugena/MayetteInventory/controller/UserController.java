package com.dpbabrugena.MayetteInventory.controller;

import com.dpbabrugena.MayetteInventory.dto.LoginRequest;
import com.dpbabrugena.MayetteInventory.dto.RegisterRequest;
import com.dpbabrugena.MayetteInventory.dto.Response;
import com.dpbabrugena.MayetteInventory.dto.UserDTO;
import com.dpbabrugena.MayetteInventory.entity.User;
import com.dpbabrugena.MayetteInventory.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping ("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/all")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Response> getAllUsers(){
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Response> updateUser(
            @PathVariable Long id,
            @RequestBody UserDTO userDTO
    ){
        return ResponseEntity.ok(userService.updateUser(id, userDTO));
    }

    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Response> deleteUser(
            @PathVariable Long id
    ){
        return ResponseEntity.ok(userService.deleteUser(id));
    }

    @GetMapping("/transactions/{id}")
    public ResponseEntity<Response> getUserAndTransactions(
            @PathVariable Long id
    ){
        return ResponseEntity.ok(userService.getUserTransactions(id));
    }

    @GetMapping("/current")
    public ResponseEntity<User> getCurrent(){
        return ResponseEntity.ok(userService.getCurrentLoggedInUser());
    }
}
