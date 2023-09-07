import React, { useEffect, useState } from 'react'
import { Tabs } from 'antd';
import Application from '../components/BorrowerApplication';
import Agreement from '../components/BorrowerAgreement';

const items = [
    {
        key: '1',
        label: 'Loan Application',
        children: <Application />,
    },
    {
        key: '2',
        label: 'Loan Agreement',
        children: <Agreement />,
        // disabled: true,
    }
];

const LoanApplication = () => {

    useEffect(() => {
        let userType = localStorage.getItem('userType')
        if (userType !== 'Borrower') {
            window.location.href = '/';
        }
    }, [])

    return (
        <div className='mx-auto w-4/5 my-5 md:px-20 space-y-5'>
            <h2>Loan Application</h2>
            <Tabs defaultActiveKey="1" items={items} />
        </div>
    )
}

export default LoanApplication
