package com.example.student.loan.controller;

import com.example.student.loan.model.Borrower;
import com.example.student.loan.repository.BorrowerRepository;
import com.example.student.loan.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/api/v1/")
public class BorrowerController {
    @Autowired
    private BorrowerRepository borrowerRepository;

    @GetMapping("/borrowers")
    public List<Borrower> getAllBorrowers(){return borrowerRepository.findAll();}
}
