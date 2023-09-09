package com.example.student.loan.repository;

import com.example.student.loan.model.Loan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoanRepository extends JpaRepository<Loan, Integer> {
    public Loan findLoanByBorrowerID(Integer borrowerID);
}
