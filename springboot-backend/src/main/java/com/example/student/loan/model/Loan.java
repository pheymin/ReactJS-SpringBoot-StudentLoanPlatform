package com.example.student.loan.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Loan")
public class Loan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer loanID;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "borrowerID")
    private User borrower;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "lenderID")
    private User lender;

    @Column(name = "loan_amount")
    private Double loanAmount;

    @Column(name = "loan_duration_start")
    private String loanDurationStart;

    @Column(name = "loan_duration_end")
    private String loanDurationEnd;

    @Column(name = "loan_status")
    private String loanStatus;

    @Column(name = "loan_purpose")
    private String loanPurpose;

    @Column(name = "applied_date")
    private String appliedDate;

    @Column(name = "approved_date")
    private String approvedDate;

    public Loan(Integer loanID, User borrower, User lender, Double loanAmount, String loanDurationStart, String loanDurationEnd, String loanStatus, String loanPurpose, String appliedDate, String approvedDate) {
        this.loanID = loanID;
        this.borrower = borrower;
        this.lender = lender;
        this.loanAmount = loanAmount;
        this.loanDurationStart = loanDurationStart;
        this.loanDurationEnd = loanDurationEnd;
        this.loanStatus = loanStatus;
        this.loanPurpose = loanPurpose;
        this.appliedDate = appliedDate;
        this.approvedDate = approvedDate;
    }

    public Loan() {}

    public Integer getLoanID() {
        return loanID;
    }

    public void setLoanID(Integer loanID) {
        this.loanID = loanID;
    }

    public User getBorrower() {
        return borrower;
    }

    public void setBorrower(User borrower) {
        this.borrower = borrower;
    }

    public User getLender() {
        return lender;
    }

    public void setLender(User lender) {
        this.lender = lender;
    }

    public Double getLoanAmount() {
        return loanAmount;
    }

    public void setLoanAmount(Double loanAmount) {
        this.loanAmount = loanAmount;
    }

    public String getLoanDurationStart() {
        return loanDurationStart;
    }

    public void setLoanDurationStart(String loanDurationStart) {
        this.loanDurationStart = loanDurationStart;
    }

    public String getLoanDurationEnd() {
        return loanDurationEnd;
    }

    public void setLoanDurationEnd(String loanDurationEnd) {
        this.loanDurationEnd = loanDurationEnd;
    }

    public String getLoanStatus() {
        return loanStatus;
    }

    public void setLoanStatus(String loanStatus) {
        this.loanStatus = loanStatus;
    }

    public String getLoanPurpose() {
        return loanPurpose;
    }

    public void setLoanPurpose(String loanPurpose) {
        this.loanPurpose = loanPurpose;
    }

    public String getAppliedDate() {
        return appliedDate;
    }

    public void setAppliedDate(String appliedDate) {
        this.appliedDate = appliedDate;
    }

    public String getApprovedDate() {
        return approvedDate;
    }

    public void setApprovedDate(String approvedDate) {
        this.approvedDate = approvedDate;
    }
}
