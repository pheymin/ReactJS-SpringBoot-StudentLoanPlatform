package com.example.student.loan.repository;

import com.example.student.loan.model.Document;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DocumentRepository extends JpaRepository<Document, Integer> {
    public List<Document> findByUserID(Integer userID);
}
