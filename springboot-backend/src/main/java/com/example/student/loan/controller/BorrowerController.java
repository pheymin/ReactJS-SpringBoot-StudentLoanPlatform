package com.example.student.loan.controller;

import com.example.student.loan.model.Borrower;
import com.example.student.loan.dto.BorrowerDTO;
import com.example.student.loan.service.BorrowerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/borrowers")
public class BorrowerController {
    private final BorrowerService borrowerService;

    // Constructor injection
    public BorrowerController(BorrowerService borrowerService) {
        this.borrowerService = borrowerService;
    }

    @GetMapping
    public ResponseEntity<List<BorrowerDTO>> getAllBorrowers() {
        List<Borrower> borrowers = borrowerService.getAllBorrowers();
        List<BorrowerDTO> borrowerDTOs = new ArrayList<>();

        for (Borrower borrower : borrowers) {
            borrowerDTOs.add(BorrowerDTO.createDTO(borrower));
        }

        return ResponseEntity.ok(borrowerDTOs);
    }

    @GetMapping("/{id}")
    public ResponseEntity<BorrowerDTO> getBorrowerById(@PathVariable Integer id) {
        Borrower borrower = borrowerService.getBorrowerById(id);
        BorrowerDTO borrowerDTO = BorrowerDTO.createDTO(borrower);

        return ResponseEntity.ok(borrowerDTO);
    }

    @PostMapping
    public ResponseEntity<BorrowerDTO> createBorrower(@RequestBody Borrower borrower) {
        Borrower newBorrower = borrowerService.createBorrower(borrower);
        BorrowerDTO borrowerDTO = BorrowerDTO.createDTO(newBorrower);

        return ResponseEntity.ok(borrowerDTO);
    }

    @PutMapping("/{id}")
    public ResponseEntity<BorrowerDTO> updateBorrower(@PathVariable Integer id, @RequestBody Borrower borrower) {
        Borrower updatedBorrower = borrowerService.updateBorrower(id, borrower);
        BorrowerDTO borrowerDTO = BorrowerDTO.createDTO(updatedBorrower);

        return ResponseEntity.ok(borrowerDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteBorrower(@PathVariable Integer id) {
        borrowerService.deleteBorrower(id);
    }
}
