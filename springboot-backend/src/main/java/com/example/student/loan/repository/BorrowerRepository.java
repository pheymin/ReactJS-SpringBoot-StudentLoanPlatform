package com.example.student.loan.repository;


import com.example.student.loan.model.Borrower;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface BorrowerRepository extends JpaRepository<Borrower, Integer> {

    Borrower findBorrowerIDByUserUserID(Integer userID);
}
