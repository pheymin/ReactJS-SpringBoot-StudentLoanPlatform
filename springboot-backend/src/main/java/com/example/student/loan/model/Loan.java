package com.example.student.loan.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "Loan")
public class Loan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer loanID;

    @Column(name = "borrowerID")
    private Integer borrowerID;

    @Column(name = "lenderID")
    private Integer lenderID;

    @Column(name = "loan_amount")
    private Double loanAmount;

    @Column(name = "loan_duration_start")
    @Temporal(TemporalType.DATE)
    private Date loanDurationStart;

    @Column(name = "loan_duration_end")
    @Temporal(TemporalType.DATE)
    private Date loanDurationEnd;

    @Column(name = "loan_status")
    private String loanStatus;

    @Column(name = "loan_purpose")
    private String loanPurpose;

    @Column(name = "applied_date")
    @Temporal(TemporalType.DATE)
    private Date appliedDate;

    @Column(name = "approved_date")
    @Temporal(TemporalType.DATE)
    private Date approvedDate;

    @Column(name = "issued_date")
    @Temporal(TemporalType.DATE)
    private Date issuedDate;

    @Column(name = "payment_terms")
    private Integer repaymentTerms;

    public Loan(Integer loanID, Integer borrowerID, Integer lenderID, Double loanAmount, Date loanDurationStart, Date loanDurationEnd, String loanStatus, String loanPurpose, Date appliedDate, Date approvedDate, Date issuedDate, Integer repaymentTerms) {
        this.loanID = loanID;
        this.borrowerID = borrowerID;
        this.lenderID = lenderID;
        this.loanAmount = loanAmount;
        this.loanDurationStart = loanDurationStart;
        this.loanDurationEnd = loanDurationEnd;
        this.loanStatus = loanStatus;
        this.loanPurpose = loanPurpose;
        this.appliedDate = appliedDate;
        this.approvedDate = approvedDate;
        this.issuedDate = issuedDate;
        this.repaymentTerms = repaymentTerms;
    }

    public Loan() {}

    public Integer getLoanID() {
        return loanID;
    }

    public void setLoanID(Integer loanID) {
        this.loanID = loanID;
    }

    public Integer getBorrowerID() {
        return borrowerID;
    }

    public void setBorrowerID(Integer borrowerID) {
        this.borrowerID = borrowerID;
    }

    public Integer getLenderID() {
        return lenderID;
    }

    public void setLenderID(Integer lenderID) {
        this.lenderID = lenderID;
    }

    public Double getLoanAmount() {
        return loanAmount;
    }

    public void setLoanAmount(Double loanAmount) {
        this.loanAmount = loanAmount;
    }

    public Date getLoanDurationStart() {
        return loanDurationStart;
    }

    public void setLoanDurationStart(Date loanDurationStart) {
        this.loanDurationStart = loanDurationStart;
    }

    public Date getLoanDurationEnd() {
        return loanDurationEnd;
    }

    public void setLoanDurationEnd(Date loanDurationEnd) {
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

    public Date getAppliedDate() {
        return appliedDate;
    }

    public void setAppliedDate(Date appliedDate) {
        this.appliedDate = appliedDate;
    }

    public Date getApprovedDate() {
        return approvedDate;
    }

    public void setApprovedDate(Date approvedDate) {
        this.approvedDate = approvedDate;
    }

    public Date getIssuedDate() {
        return issuedDate;
    }

    public void setIssuedDate(Date issuedDate) {
        this.issuedDate = issuedDate;
    }

    public Integer getRepaymentTerms() {
        return repaymentTerms;
    }

    public void setRepaymentTerms(Integer repaymentTerms) {
        this.repaymentTerms = repaymentTerms;
    }
}
