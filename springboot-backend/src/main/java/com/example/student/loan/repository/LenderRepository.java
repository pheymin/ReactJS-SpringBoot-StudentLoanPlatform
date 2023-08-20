package com.example.student.loan.repository;

import com.example.student.loan.model.Lender;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LenderRepository extends JpaRepository<Lender, Integer> {
}
