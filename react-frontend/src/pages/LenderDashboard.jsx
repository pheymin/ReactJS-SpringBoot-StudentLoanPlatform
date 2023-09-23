import React, { useState, useEffect } from 'react'
import LoanService from '../services/LoanService';
import { Space, Table, Tag } from 'antd';

const QuickAction = () => {
    return (
        <div className='mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 border rounded-lg px-5 py-10'>
            <h4 className='md:col-span-6 space-y-2 font-semibold'>Quick Action</h4>
            <div className='md:col-span-3 space-y-2 cursor-pointer md:border-r-2' onClick={() => { window.location.href = "loan"; }}>
                <div className='p-5 space-y-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                    </svg>
                    <h5 className='font-semibold'>Loan Listing</h5>
                    <p>View all loans that are available for application.</p>
                </div>
            </div>
            <div className='md:col-span-3 space-y-2 cursor-pointer' onClick={() => { window.location.href = "/profile"; }}>
                <div className='p-5 space-y-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <h5 className='font-semibold'>Profile</h5>
                    <p>Manage your personal information and preferences in your profile.</p>
                </div>
            </div>
        </div>
    )
}

const Transaction = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        let userId = localStorage.getItem('userID');
        LoanService.getLoanBorrowerByLenderID(userId).then((res) => {
            //set data in details
            const newData = res.data
            .filter((loan) => loan.loan.loanStatus === 'Lender Paid')
            .map((loan, index) => {
                return {
                    transaction: `Fund Transfer ${index + 1}`,
                    borrower: loan.borrower.user.name,
                    date: loan.loan.issuedDate,
                    loanAmount: loan.loan.loanAmount,
                };
            });
            setData(newData);
        });
    }, []);

    const columns = [
        {
            title: 'Fund Transfer',
            dataIndex: 'transaction',
        },
        {
            title: 'Borrower',
            dataIndex: 'borrower',
        },
        {
            title: 'Date',
            dataIndex: 'date',
        },
        {
            title: 'Amount (RM)',
            dataIndex: 'loanAmount',
        },
    ];

    return (
        <div className='border rounded-lg px-5 py-10 space-y-4'>
            <h4 className='font-semibold'>Payment History</h4>
            <Table dataSource={data}
                columns={columns}
                pagination={false}
                bordered />
        </div>
    )
}

const LenderDashboard = () => {

    useEffect(() => {
        let userId = localStorage.getItem('userID')
        let userType = localStorage.getItem('userType')
        if (!userId) {
            window.location.href = '/login'
        }
        if (userType !== 'Lender') {
            window.location.href = '/'
        }
    }, [])

    return (
        <div className='mx-auto w-4/5 my-5 md:px-20 space-y-5'>
            <Transaction />
            <QuickAction />
        </div>
    )
}

export default LenderDashboard
