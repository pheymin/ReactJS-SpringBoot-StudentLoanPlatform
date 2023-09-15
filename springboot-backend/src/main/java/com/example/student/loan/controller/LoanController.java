package com.example.student.loan.controller;

import com.example.student.loan.model.Borrower;
import com.example.student.loan.model.Lender;
import com.example.student.loan.model.Loan;
import com.example.student.loan.model.LoanBorrowerDTO;
import com.example.student.loan.repository.BorrowerRepository;
import com.example.student.loan.repository.LenderRepository;
import com.example.student.loan.repository.LoanRepository;
import com.example.student.loan.service.BorrowerService;
import com.example.student.loan.service.LenderService;
import com.example.student.loan.service.LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/loans")
public class LoanController {
    @Autowired
    private final LoanRepository loanRepository;

    private final BorrowerService borrowerService;

    private final LoanService loanService;

    private final LenderService lenderService;

    private final LenderRepository lenderRepository;

    public LoanController(LoanRepository loanRepository, BorrowerService borrowerService, LoanService loanService, LoanService loanService1, LenderService lenderService, LenderRepository lenderRepository){
        this.loanRepository = loanRepository;
        this.borrowerService = borrowerService;
        this.loanService = loanService;
        this.lenderService = lenderService;
        this.lenderRepository = lenderRepository;
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

    @GetMapping("/status/{status}")
    public ResponseEntity<List<LoanBorrowerDTO>> getPendingLoans(@PathVariable String status) {
        List<LoanBorrowerDTO> pendingLoans = loanService.findPendingLoans(status);
        return new ResponseEntity<>(pendingLoans, HttpStatus.OK);
    }

    @PostMapping("/fund")
    public ResponseEntity<Loan> fundLoan(@RequestBody Map<String, Object> loanData) {
        Integer loanID = (Integer) loanData.get("loanID");
        String loanStatus = (String) loanData.get("loanStatus");
        Integer userID = (Integer) loanData.get("userID");
        Lender lender = lenderService.findLenderIDByUserID(userID);
        Integer lenderID = lender.getLenderID();

        Loan existingLoan = loanRepository.findById(loanID).orElse(null);
        if (existingLoan == null) {
            return ResponseEntity.notFound().build();
        }

        // Update loan status and lender ID
        existingLoan.setLoanStatus(loanStatus);
        existingLoan.setLenderID(lenderID);

        Date approvedDate = new Date();
        existingLoan.setApprovedDate(approvedDate);

        loanRepository.save(existingLoan);

        return ResponseEntity.ok(existingLoan);
    }

    @PostMapping("/borrowersign")
    public ResponseEntity<Loan> borrowerSign(@RequestBody Map<String, Object> loanData) {
        Integer loanID = (Integer) loanData.get("loanID");
        String loanStatus = (String) loanData.get("loanStatus");

        Loan existingLoan = loanRepository.findById(loanID).orElse(null);
        if (existingLoan == null) {
            return ResponseEntity.notFound().build();
        }

        existingLoan.setLoanStatus(loanStatus);

        loanRepository.save(existingLoan);

        return ResponseEntity.ok(existingLoan);
    }

    @GetMapping("/loanborrower/{id}")
    public ResponseEntity<LoanBorrowerDTO> getLoanBorrowerDTOById(@PathVariable Integer id) {
        LoanBorrowerDTO loanBorrowerDTO = loanService.getLoanBorrowerDTOById(id);
        if (loanBorrowerDTO == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(loanBorrowerDTO);
    }

    @GetMapping("/loanborrower/lender/{id}")
    public ResponseEntity<List<LoanBorrowerDTO>> getLoanBorrowerDTOByLenderID(@PathVariable Integer id) {
        Lender lender = lenderRepository.findLenderIDByUserUserID(id);
        Integer lenderID = lender.getLenderID();
        List<LoanBorrowerDTO> loanBorrowerDTO = loanService.getLoanBorrowerDTOByLenderID(lenderID);
        if (loanBorrowerDTO == null) {
            return ResponseEntity.notFound().build();
        }
        return new ResponseEntity<>(loanBorrowerDTO, HttpStatus.OK);
    }

    @GetMapping("/loanborrower")
    public ResponseEntity<List<LoanBorrowerDTO>> getLoanBorrowerDTO() {
        List<LoanBorrowerDTO> loanBorrowerDTO = loanService.getLoanBorrowerDTO();
        if (loanBorrowerDTO == null) {
            return ResponseEntity.notFound().build();
        }
        return new ResponseEntity<>(loanBorrowerDTO, HttpStatus.OK);
    }

}
