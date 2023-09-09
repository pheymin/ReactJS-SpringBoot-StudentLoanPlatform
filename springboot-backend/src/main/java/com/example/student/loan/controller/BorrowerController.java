package com.example.student.loan.controller;

import com.example.student.loan.model.Borrower;
import com.example.student.loan.model.BorrowerDTO;
import com.example.student.loan.repository.BorrowerRepository;
import com.example.student.loan.service.BorrowerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
    public ResponseEntity<BorrowerDTO> updateBorrower(@PathVariable Integer id, @RequestBody BorrowerDTO borrower) {
        Borrower existingBorrower = borrowerService.findBorrowerIDByUserID(id);

        if (existingBorrower == null) {
            return ResponseEntity.notFound().build();
        }
        try{
            Borrower updatedBorrower = existingBorrower;
            updatedBorrower.setUniName(borrower.getUniName());
            updatedBorrower.setLevelOfStudy(borrower.getLevelOfStudy());
            updatedBorrower.setCourse(borrower.getCourse());
            updatedBorrower.setCourseStart(borrower.getCourseStart());
            updatedBorrower.setCourseEnd(borrower.getCourseEnd());

            Borrower savedBorrower = borrowerService.updateBorrower(updatedBorrower);
            BorrowerDTO updatedBorrowerDTO = BorrowerDTO.createDTO(savedBorrower);

            return ResponseEntity.ok(updatedBorrowerDTO);
        }
        catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/{id}")
    public void deleteBorrower(@PathVariable Integer id) {
        borrowerService.deleteBorrower(id);
    }
}
