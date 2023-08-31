package com.example.student.loan.service;

import com.example.student.loan.model.Borrower;
import com.example.student.loan.model.BorrowerDTO;
import com.example.student.loan.repository.BorrowerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BorrowerService {
    private final BorrowerRepository borrowerRepository;

    public BorrowerService(BorrowerRepository borrowerRepository) {
        this.borrowerRepository = borrowerRepository;
    }

    public List<Borrower> getAllBorrowers() {
        return borrowerRepository.findAll();
    }

    public BorrowerDTO getBorrowerDTOById(Integer id) {
        Borrower borrower = borrowerRepository.findById(id).orElse(null);
        if(borrower == null) return null;
        return BorrowerDTO.createDTO(borrower);
    }

    public Borrower getBorrowerById(Integer id) {
        return borrowerRepository.findById(id).orElse(null);
    }

    public Borrower createBorrower(Borrower borrower) {
        return borrowerRepository.save(borrower);
    }

    public Borrower updateBorrower(Integer id, Borrower borrower) {
        borrower.setBorrowerID(id);
        return borrowerRepository.save(borrower);
    }

    public void deleteBorrower(Integer id) {
        borrowerRepository.deleteById(id);
    }
}
