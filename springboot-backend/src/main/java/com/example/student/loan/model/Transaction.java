package com.example.student.loan.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Transaction")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer transactionID;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "loanID")
    private Loan loan;

    @Column(name = "transaction_type")
    private String transactionType;

    @Column(name = "amount")
    private Double amount;

    @Column(name = "created_date")
    private String createdDate;

    public Transaction(Integer transactionID, Loan loan, String transactionType, Double amount, String createdDate) {
        this.transactionID = transactionID;
        this.loan = loan;
        this.transactionType = transactionType;
        this.amount = amount;
        this.createdDate = createdDate;
    }

    public Transaction() {}

    public Integer getTransactionID() {
        return transactionID;
    }

    public void setTransactionID(Integer transactionID) {
        this.transactionID = transactionID;
    }

    public Loan getLoan() {
        return loan;
    }

    public void setLoan(Loan loan) {
        this.loan = loan;
    }

    public String getTransactionType() {
        return transactionType;
    }

    public void setTransactionType(String transactionType) {
        this.transactionType = transactionType;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public String getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(String createdDate) {
        this.createdDate = createdDate;
    }
}
