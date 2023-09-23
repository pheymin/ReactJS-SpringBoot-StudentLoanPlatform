import React, { useEffect, useState } from 'react'
import { Tabs } from 'antd';
import Application from '../components/BorrowerApplication';
import Agreement from '../components/BorrowerAgreement';
import LoanService from '../services/LoanService';

const LoanApplication = () => {
    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        let userId = localStorage.getItem('userID')
        let userType = localStorage.getItem('userType')
        if (!userId) {
            window.location.href = '/login'
        }
        if (userType !== 'Borrower') {
            window.location.href = '/'
        }

        LoanService.getLoanByBorrowerID(userId).then((response) => {
            let loanStatus = response.data.loanStatus;

            // Create a new array with updated items
            const updatedItems = [...items];

            if (loanStatus === 'Pending' || loanStatus === '') {
                updatedItems[0].disabled = false;
                updatedItems[1].disabled = true;
                setActiveTab('1');
            } else if (loanStatus === 'Lender Signed') {
                updatedItems[0].disabled = false;
                updatedItems[1].disabled = false;
                updatedItems[1].children = <Agreement loanID={response.data.loanID} />,
                setActiveTab('2');
            } else {
                updatedItems[0].disabled = false;
                updatedItems[1].disabled = false;
                updatedItems[1].children = <Agreement loanID={response.data.loanID} />
            }

            setItems(updatedItems);
        });
    }, []);

    const [items, setItems] = useState([
        {
            key: '1',
            label: 'Loan Application',
            children: <Application />,
            disabled: false,
        },
        {
            key: '2',
            label: 'Loan Agreement',
            disabled: true,
        }
    ]);

    return (
        <div className='mx-auto w-4/5 my-5 md:px-20 space-y-5'>
            <h2>Loan Application</h2>
            <Tabs defaultActiveKey={activeTab} items={items} />
        </div>
    )
}

export default LoanApplication
