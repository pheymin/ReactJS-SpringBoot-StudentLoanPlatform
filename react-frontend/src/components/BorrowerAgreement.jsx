import React, { useState, useEffect } from 'react'
import LoanService from '../services/LoanService';
import UserService from '../services/userService';
import LenderService from '../services/LenderService';

const BorrowerAgreement = (loanID) => {

    const [agreement, setAgreement] = useState([]);

    useEffect(() => {
        LoanService.getLoanBorrowerByLoanID(loanID.loanID)
            .then((res) => {
                const loan = res.data.loan;
                const borrower = res.data.borrower;
                if (loan && borrower) {
                    const formattedData = {
                        key: loan.loanID,
                        borrowerName: borrower.user.name,
                        loanAmount: loan.loanAmount,
                        loanEnd: loan.loanDurationEnd,
                        loanStatus: loan.loanStatus,
                    };
                    if (loan.loanStatus === 'Pending') {
                        const userId = localStorage.getItem('userID');
                        UserService.getUserById(userId)
                            .then((response) => {
                                formattedData.lenderName = response.data.name;
                                setAgreement(formattedData);
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    } else{
                        const lenderId = loan.lenderID;
                        LenderService.getLenderById(lenderId)
                            .then((response) => {
                                formattedData.lenderName = response.data.name;
                                formattedData.approvedDate = loan.approvedDate;
                                setAgreement(formattedData);
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    }
                } else {
                    console.log("Loan or borrower data is missing.");
                }
            })
    }, [loanID.loanID]);

    function getCurrentDate() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-indexed
        const day = currentDate.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let userID = parseInt(localStorage.getItem('userID'));
        if (agreement.loanStatus === 'Pending') {
            const loan = {
                loanID: agreement.key,
                loanStatus: 'Lender Signed',
                userID: userID
            }
            try {
                const response = await LoanService.fundUser(loan);
                if (response.status === 200) {
                    alert('Loan agreement signed successfully.');
                    window.location.href = '/lender/loan';
                } else {
                    alert('Loan agreement signing failed.');
                }
            } catch (error) {
                alert(error.response.data);
            }
        } else if (agreement.loanStatus === 'Lender Signed') {
            const loan = {
                loanID: agreement.key,
                loanStatus: 'Borrower Signed'
            }
            try {
                const response = await LoanService.borrowerSign(loan);
                if (response.status === 200) {
                    alert('Loan agreement signed successfully.');
                } else {
                    alert('Loan agreement signing failed.');
                }
            } catch (error) {
                alert(error.response.data);
            }
        }
    }
    return (
        <div className='space-y-5'>
            <h3 className='font-semibold'>Preview of Agreement</h3>
            {agreement ? (
                <>
                    <h3 className='font-semibold'>LOAN AGREEMENT TERMS AND CONDITIONS</h3>
                    <p>Terms and conditions</p>
                    <p>
                        <strong>Parties:</strong><br />
                        This Student Loan Agreement ("Agreement") is entered into between <strong>{agreement.lenderName}</strong> (referred to as "Lender") and <strong>{agreement.borrowerName}</strong> (referred to as "Borrower").
                        <br /><br />
                        <strong>Loan Details:</strong><br />

                        <em>Loan Amount:</em> The Lender agrees to lend the Borrower the principal amount of <strong>RM {agreement.loanAmount}</strong> (the "Loan").<br />
                        <em>Interest Rate:</em> The Loan shall accrue interest at an annual rate of <strong>3%</strong>.<br />
                        <em>Repayment Terms:</em> The Borrower agrees to repay the Loan beginning on <strong>{agreement.loanEnd}</strong>.<br /><br />
                        <strong>Use of Funds:</strong><br />
                        The Borrower agrees to use the Loan funds solely for educational purposes, including tuition, books, fees, and other related expenses.
                        <br /><br />
                        <strong>Prepayment:</strong><br />
                        The Borrower may prepay the Loan in full or in part at any time without incurring any prepayment penalties.
                        <br /><br />
                        <strong>Entire Agreement:</strong><br />
                        This Agreement constitutes the entire agreement between the parties and supersedes all prior oral or written agreements, understandings, or representations.
                        <br /><br />
                        <strong>Execution:</strong><br />
                        By signing below, the parties acknowledge their understanding and acceptance of the terms and conditions set forth in this Agreement.

                    </p>
                    <div className='space-y-10'>
                        <div className='space-y-1'>
                            <h4 className='font-bold'>Lender</h4>
                            <h2><em>{agreement.lenderName}</em></h2>
                            <p>Name: {agreement.lenderName}</p>
                            {agreement.approvedDate ? (
                                <p>Date: {agreement.approvedDate}</p>
                            ) : (
                                <p>Date: {getCurrentDate()}</p>
                            )}
                        </div>
                        <div className='space-y-1'>
                            <h4 className='font-bold'>Borrower</h4>
                            <h2><em>{agreement.borrowerName}</em></h2>
                            <p>Name: {agreement.borrowerName}</p>
                            {agreement.loanStatus === 'Pending' ? (
                                <></>
                            ) : (
                                <p>Date: {getCurrentDate()}</p>
                            )}

                        </div>
                    </div>
                    {agreement.loanStatus === 'Pending' || agreement.loanStatus === 'Lender Signed' ? (
                        <button onClick={handleSubmit} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Sign Loan Agreement
                        </button>
                    ) : (
                        <></>
                    )}

                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )

}

export default BorrowerAgreement
