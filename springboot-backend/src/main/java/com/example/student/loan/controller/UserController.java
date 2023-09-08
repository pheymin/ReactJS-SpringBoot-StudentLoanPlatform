package com.example.student.loan.controller;

import com.example.student.loan.model.*;
import com.example.student.loan.repository.UserRepository;
import com.example.student.loan.service.AdminService;
import com.example.student.loan.service.BorrowerService;
import com.example.student.loan.service.LenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private final UserRepository userRepository;

    @Autowired BorrowerController borrowerController;

    @Autowired LenderController lenderController;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Integer id){ return userRepository.findById(id).orElse(null);}

    @PutMapping("/{id}")
    public User updateUser(@PathVariable Integer id, @RequestBody User user) {
        user.setUserID(id);
        return userRepository.save(user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Integer id) {
        userRepository.deleteById(id);
    }

    // login
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginRequest){
        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        User user = userRepository.findByEmail(email);

        if(user == null){
            return ResponseEntity.badRequest().body("User not found");
        }

        if(!password.equals(user.getPassword())){
            return ResponseEntity.badRequest().body("Incorrect password");
        }

        return ResponseEntity.ok(user);
    }

    // register
    @PostMapping
    public ResponseEntity<?> createUser(@RequestBody User registerRequest) {
        try {
            // Create a new User entity from the registration request
            User newUser = new User();
            newUser.setName(registerRequest.getName());
            newUser.setEmail(registerRequest.getEmail());
            newUser.setPassword(registerRequest.getPassword());
            newUser.setDob(registerRequest.getDob());
            newUser.setIc(registerRequest.getIc());
            newUser.setPhone(registerRequest.getPhone());
            newUser.setUserType(registerRequest.getUserType());
            newUser.setCity(registerRequest.getCity());
            newUser.setStreet(registerRequest.getStreet());
            newUser.setState(registerRequest.getState());
            newUser.setPostcode(registerRequest.getPostcode());
            newUser.setStatus(registerRequest.getStatus());
            newUser.setPhotoUrl(registerRequest.getPhotoUrl());
            newUser.setBankName(registerRequest.getBankName());
            newUser.setBankAcc(registerRequest.getBankAcc());

            // Save the user to the User table
            newUser = userRepository.save(newUser);

            // Based on the selected user type, create and save the corresponding entity
            switch (registerRequest.getUserType()) {
                case "Borrower":
                    Borrower newBorrower = new Borrower();
                    newBorrower.setUser(newUser);
                    borrowerController.createBorrower(newBorrower);
                    break;
                case "Lender":
                    Lender newLender = new Lender();
                    newLender.setUser(newUser);
                    lenderController.createLender(newLender);
                    break;
                default:
                    return ResponseEntity.badRequest().body("Invalid user type");
            }

            return ResponseEntity.ok("Registration successful");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Registration failed");
        }
    }
}
