package com.example.student.loan.controller;

import com.example.student.loan.model.Lender;
import com.example.student.loan.repository.LenderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/api/v1/")
public class LenderController {
    @Autowired
    private LenderRepository lenderRepository;

    @GetMapping("/lenders")
    public List<Lender> getAllLenders(){ return lenderRepository.findAll();}
}
