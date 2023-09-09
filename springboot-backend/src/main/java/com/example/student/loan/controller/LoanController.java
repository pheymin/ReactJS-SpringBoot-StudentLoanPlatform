package com.example.student.loan.controller;

import com.example.student.loan.model.Borrower;
import com.example.student.loan.model.Loan;
import com.example.student.loan.repository.LoanRepository;
import com.example.student.loan.service.BorrowerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/loans")
public class LoanController {
    @Autowired
    private final LoanRepository loanRepository;

    private final BorrowerService borrowerService;

    public LoanController(LoanRepository loanRepository, BorrowerService borrowerService) {
        this.loanRepository = loanRepository;
        this.borrowerService = borrowerService;
    }

    @GetMapping
    public List<Loan> getAllLoans(){
        return loanRepository.findAll();
    }

    @GetMapping("/{id}")
    public Loan getLoanById(@PathVariable Integer id){ return loanRepository.findById(id).orElse(null);}

    @PutMapping("/{id}")
    public Loan updateLoan(@PathVariable Integer id, @RequestBody Loan loan) {
        return loanRepository.save(loan);
    }

    @DeleteMapping("/{id}")
    public void deleteLoan(@PathVariable Integer id) {
        loanRepository.deleteById(id);
    }

    @PostMapping
    public Loan createLoan(@RequestBody Loan loan) {
        System.out.println(loan.getBorrowerID());
        return loanRepository.save(loan);
    }

    @GetMapping("/user/{id}")
    public Loan getLoanByBorrowerID(@PathVariable Integer id) {
        Borrower existingBorrower = borrowerService.findBorrowerIDByUserID(id);
        if (existingBorrower == null) {
            return null;
        }
        //get borrower id from borrower object
        Integer borrowerId = existingBorrower.getBorrowerID();
        return loanRepository.findLoanByBorrowerID(borrowerId);
    }
}
