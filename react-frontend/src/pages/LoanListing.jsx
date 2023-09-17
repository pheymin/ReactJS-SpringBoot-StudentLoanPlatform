import React, { useEffect, useState } from 'react'
import { Tabs } from 'antd';
import LenderAllLoan from '../components/LenderAllLoan';
import LenderLoan from '../components/LenderLoan';

const LoanListing = () => {
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

    const items = [
        {
            key: '1',
            label: 'All Loans',
            children: <LenderAllLoan />,
        },
        {
            key: '2',
            label: 'My Ongoing Loans',
            children: <LenderLoan />
        }
    ];

    return (
        <div className='mx-auto w-4/5 my-5 md:px-20 space-y-5'>
            <h2>Loan Listing</h2>
            <Tabs defaultActiveKey='1' items={items} />
        </div>
    )
}

export default LoanListing
