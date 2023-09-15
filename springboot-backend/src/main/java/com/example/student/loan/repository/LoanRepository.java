package com.example.student.loan.repository;

import com.example.student.loan.model.Loan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LoanRepository extends JpaRepository<Loan, Integer> {
    public Loan findLoanByBorrowerID(Integer borrowerID);

    List<Loan> findByLoanStatus(String status);

    List<Loan> findByLenderID(Integer lenderID);
}
