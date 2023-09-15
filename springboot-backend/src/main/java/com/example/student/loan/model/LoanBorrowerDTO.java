package com.example.student.loan.model;

public class LoanBorrowerDTO {
    private Loan loan;
    private Borrower borrower;

    public LoanBorrowerDTO() {
    }

    public LoanBorrowerDTO(Loan loan, Borrower borrower) {
        this.loan = loan;
        this.borrower = borrower;
    }

    public Loan getLoan() {
        return loan;
    }

    public void setLoan(Loan loan) {
        this.loan = loan;
    }

    public Borrower getBorrower() {
        return borrower;
    }

    public void setBorrower(Borrower borrower) {
        this.borrower = borrower;
    }
}
