package com.dpbabrugena.MayetteInventory.service;

import com.dpbabrugena.MayetteInventory.dto.LoginRequest;
import com.dpbabrugena.MayetteInventory.dto.RegisterRequest;
import com.dpbabrugena.MayetteInventory.dto.Response;
import com.dpbabrugena.MayetteInventory.dto.UserDTO;
import com.dpbabrugena.MayetteInventory.entity.User;

public interface UserService {
    Response registerUser(RegisterRequest registerRequest);
    Response loginUser(LoginRequest loginRequest);
    Response getAllUsers();
    User getCurrentLoggedInUser();
    Response updateUser(Long id, UserDTO userDTO);
    Response deleteUser(Long id);
    Response getUserTransactions(Long id);
}
