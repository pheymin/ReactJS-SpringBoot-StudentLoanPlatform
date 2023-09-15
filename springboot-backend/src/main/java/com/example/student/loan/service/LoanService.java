package com.example.student.loan.service;

import com.example.student.loan.model.Borrower;
import com.example.student.loan.model.Loan;
import com.example.student.loan.model.LoanBorrowerDTO;
import com.example.student.loan.repository.BorrowerRepository;
import com.example.student.loan.repository.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class LoanService {
    private final LoanRepository loanRepository;
    private final BorrowerRepository borrowerRepository;

    @Autowired
    public LoanService(LoanRepository loanRepository, BorrowerRepository borrowerRepository) {
        this.loanRepository = loanRepository;
        this.borrowerRepository = borrowerRepository;
    }

    public List<LoanBorrowerDTO> findPendingLoans(String status) {
        List<Loan> pendingLoans = loanRepository.findByLoanStatus(status);

        // Extract borrower IDs from pending loans
        List<Integer> borrowerIds = pendingLoans.stream()
                .map(Loan::getBorrowerID)
                .collect(Collectors.toList());

        List<Borrower> pendingBorrowers = borrowerRepository.findByBorrowerIDIn(borrowerIds);

        // Create a list of LoanWithBorrowerDTO objects by combining loans and borrowers
        List<LoanBorrowerDTO> loanWithBorrowers = new ArrayList<>();
        for (Loan loan : pendingLoans) {
            Borrower correspondingBorrower = pendingBorrowers.stream()
                    .filter(borrower -> borrower.getBorrowerID().equals(loan.getBorrowerID()))
                    .findFirst()
                    .orElse(null);

            loanWithBorrowers.add(new LoanBorrowerDTO(loan, correspondingBorrower));
        }

        return loanWithBorrowers;
    }

    public LoanBorrowerDTO getLoanBorrowerDTOById(Integer id) {
        Loan loan = loanRepository.findById(id).orElse(null);
        if(loan == null) return null;
        Borrower borrower = borrowerRepository.findById(loan.getBorrowerID()).orElse(null);
        if(borrower == null) return null;
        return new LoanBorrowerDTO(loan, borrower);
    }

    public List<LoanBorrowerDTO> getLoanBorrowerDTOByLenderID(Integer lenderID) {
        List<Loan> loans = loanRepository.findByLenderID(lenderID);
        List<LoanBorrowerDTO> loanBorrowerDTOs = new ArrayList<>();

        for (Loan loan : loans) {
            Borrower borrower = borrowerRepository.findById(loan.getBorrowerID()).orElse(null);
            if(borrower == null) return null;
            loanBorrowerDTOs.add(new LoanBorrowerDTO(loan, borrower));
        }

        return loanBorrowerDTOs;
    }

    public List<LoanBorrowerDTO> getLoanBorrowerDTO(){
        List<Loan> loans = loanRepository.findAll();
        List<LoanBorrowerDTO> loanBorrowerDTOs = new ArrayList<>();

        for (Loan loan : loans) {
            Borrower borrower = borrowerRepository.findById(loan.getBorrowerID()).orElse(null);
            if(borrower == null) return null;
            loanBorrowerDTOs.add(new LoanBorrowerDTO(loan, borrower));
        }

        return loanBorrowerDTOs;
    }
}
