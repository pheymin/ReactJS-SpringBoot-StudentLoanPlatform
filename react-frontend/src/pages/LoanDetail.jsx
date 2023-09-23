import React from 'react'
import { useEffect, useState } from 'react'
import { Breadcrumb,Segmented } from 'antd';
import LoanService from '../services/LoanService';
import LenderService from '../services/LenderService';

const LoanDetail = () => {
    //get loanid from url
    let loanID = new URLSearchParams(window.location.search).get('id')
    const [loan, setLoan] = useState({});
    useEffect(() => {
        let userId = localStorage.getItem('userID')
        let userType = localStorage.getItem('userType')
        if (!userId) {
            window.location.href = '/login'
        }
        if (userType !== 'Admin') {
            window.location.href = '/'
        }

        LoanService.getLoanBorrowerByLoanID(loanID)
            .then((res) => {
                const loan = res.data.loan;
                const borrower = res.data.borrower;
                if (loan && borrower) {
                    const formattedData = {
                        loanID: loan.loanID,
                        borrowerName: borrower.user.name,
                        loanAmount: loan.loanAmount,
                        loanDurationStart: loan.loanDurationStart,
                        loanDurationEnd: loan.loanDurationEnd,
                        loanPurpose: loan.loanPurpose,
                        appliedDate: loan.appliedDate,
                        approvedDate: loan.approvedDate,
                        status: loan.loanStatus,
                        uniName: borrower.uniName,
                        levelOfStudy: borrower.levelOfStudy,
                        course: borrower.course,
                        courseStart: borrower.courseStart,
                        courseEnd: borrower.courseEnd,
                        repaymentTerms: loan.repaymentTerms,
                    };
                    const lenderId = loan.lenderID;
                    if (lenderId !== null) {

                        LenderService.getLenderById(lenderId)
                            .then((response) => {
                                formattedData.lenderName = response.data.name;
                            }).then(() => {
                                setLoan(formattedData);
                            })
                    } else {
                        setLoan(formattedData);
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    return (
        <div className='mx-auto w-5/6 my-5 md:px-20 space-y-5'>
            <Breadcrumb
                separator=">"
                items={[
                    {
                        title: 'View Loan',
                        href: 'http://localhost:5173/admin/view-loan',
                    },
                    {
                        title: 'Loan Detail',
                    },
                ]}
            />
            <h2>Loan Details</h2>
            <h3>Loan Information</h3>
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                <div className='md:col-span-2 space-y-2'>
                    <label htmlFor="uniName" className="block text-sm font-medium leading-6 text-gray-400">
                        Loan ID
                    </label>
                    <p>{loan.loanID}</p>
                </div>

                <div className='space-y-2'>
                    <label htmlFor="borrowerName" className="block text-sm font-medium leading-6 text-gray-400">
                        Borrower Name
                    </label>
                    <p>{loan.borrowerName}</p>
                </div>

                <div className='space-y-2'>
                    <label htmlFor="lenderName" className="block text-sm font-medium leading-6 text-gray-400">
                        Lender Name
                    </label>
                    <p>{loan.lenderName}</p>
                </div>

                <div className='space-y-2'>
                    <label htmlFor="loanAmount" className="block text-sm font-medium leading-6 text-gray-400">
                        Loan Amount
                    </label>
                    <p>RM {loan.loanAmount}</p>
                </div>

                <div className='space-y-2'>
                    <label htmlFor="loanDuration" className="block text-sm font-medium leading-6 text-gray-400">
                        Loan Duration
                    </label>
                    <p>From {loan.loanDurationStart} to {loan.loanDurationEnd}</p>
                </div>

                <div className='space-y-2'>
                    <label htmlFor="interestRate" className="block text-sm font-medium leading-6 text-gray-400">
                        Interest Rate
                    </label>
                    <p>3%</p>
                </div>

                <div className='space-y-2'>
                    <label htmlFor="loanPurpose" className="block text-sm font-medium leading-6 text-gray-400">
                        Loan Purpose
                    </label>
                    <p>{loan.loanPurpose}</p>
                </div>

                <div className='space-y-2'>
                    <label htmlFor="appliedDate" className="block text-sm font-medium leading-6 text-gray-400">
                        Applied Date
                    </label>
                    <p>{loan.appliedDate}</p>
                </div>

                <div className='space-y-2'>
                    <label htmlFor="approvedDate" className="block text-sm font-medium leading-6 text-gray-400">
                        Approved Date
                    </label>
                    {loan.approvedDateDate === '' ? (
                        <p>-</p>
                    ) : (
                        <p>{loan.approvedDate}</p>
                    )}
                </div>

                <div className='space-y-2'>
                    <label htmlFor="status" className="block text-sm font-medium leading-6 text-gray-400">
                        Loan Status
                    </label>
                    <p>{loan.status}</p>
                </div>
                
                <div className='space-y-2'>
                    <label htmlFor="repaymentTerms" className="block text-sm font-medium leading-6 text-gray-400">
                        Repayment Terms
                    </label>
                    <p>{loan.repaymentTerms}</p>
                </div>

            </div>
            <hr />
            <h3>Education-Related Information</h3>
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                <div className='md:col-span-2 space-y-2'>
                    <label htmlFor="uniName" className="block text-sm font-medium leading-6 text-gray-400">
                        University Name
                    </label>
                    <p>{loan.uniName}</p>
                </div>

                <div className='space-y-2'>
                    <label htmlFor="levelOfStudy" className="block text-sm font-medium leading-6 text-gray-400">
                        Level of Study
                    </label>
                    <p>{loan.levelOfStudy}</p>
                </div>

                <div className='space-y-2'>
                    <label htmlFor="course" className="block text-sm font-medium leading-6 text-gray-400">
                        Course
                    </label>
                    <p>{loan.course}</p>
                </div>

                <div className='space-y-2'>
                    <label htmlFor="courseDuration" className="block text-sm font-medium leading-6 text-gray-400">
                        Course Duration
                    </label>
                    <p>From {loan.courseStart} to {loan.courseEnd}</p>
                </div>
            </div>
        </div>
    )
}

export default LoanDetail
