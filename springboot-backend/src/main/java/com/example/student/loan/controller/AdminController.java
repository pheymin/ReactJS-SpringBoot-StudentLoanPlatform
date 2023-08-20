package com.example.student.loan.controller;

import com.example.student.loan.model.Admin;
import com.example.student.loan.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/api/v1/")
public class AdminController {
    @Autowired
    private AdminRepository adminRepository;

    @GetMapping("/admin")
    public List<Admin> getAllAdmin(){ return adminRepository.findAll();}
}
