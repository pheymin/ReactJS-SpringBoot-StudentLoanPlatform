package com.example.student.loan.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Document")
public class Document {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer docID;

    @Column(name = "userID")
    private Integer userID;

    @Column(name = "doc_type")
    private String documentType;

    @Column(name = "file_path")
    private String filePath;

    public Document() {}

    public Document(Integer docID, Integer userID, String documentType, String filePath) {
        this.docID = docID;
        this.userID = userID;
        this.documentType = documentType;
        this.filePath = filePath;
    }

    public Integer getDocID() {
        return docID;
    }

    public void setDocID(Integer docID) {
        this.docID = docID;
    }

    public Integer getUserID() {
        return userID;
    }

    public void setUserID(Integer userID) {
        this.userID = userID;
    }

    public String getDocumentType() {
        return documentType;
    }

    public void setDocumentType(String documentType) {
        this.documentType = documentType;
    }

    public String getFilePath() {
        return filePath;
    }

    public void setFilePath(String filePath) {
        this.filePath = filePath;
    }
}
