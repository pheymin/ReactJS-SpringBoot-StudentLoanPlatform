import React, { useEffect, useState } from 'react'
import { Tabs } from 'antd';
import Application from '../components/BorrowerApplication';
import Agreement from '../components/BorrowerAgreement';
import LoanService from '../services/LoanService';

const LoanApplication = () => {
    const [activeTab, setActiveTab] = useState('2');
    const [loanID, setLoanID] = useState('');
    const items = [
        {
            key: '1',
            label: 'Loan Application',
            children: <Application />,
        },
        {
            key: '2',
            label: 'Loan Agreement',
            children: <Agreement loanID={loanID}/>,
        }
    ];

    useEffect(() => {
        LoanService.getLoanByBorrowerID(localStorage.getItem('userID')).then((response) => {
            let loanStatus = response.data.loanStatus;
            setLoanID(response.data.loanID);
            if (loanStatus === 'Lender Signed') {
                items[0].disabled = false;
                items[1].disabled = false;

                setActiveTab('2');
            }else if(loanStatus === 'Pending' || loanStatus === ''){
                items[0].disabled = false;
                items[1].disabled = true;

                setActiveTab('1');
            }else{
                items[0].disabled = false;
                items[1].disabled = false;
            }
        });
    }, []);

    return (
        <div className='mx-auto w-4/5 my-5 md:px-20 space-y-5'>
            <h2>Loan Application</h2>
            <Tabs defaultActiveKey={activeTab} items={items}/>
        </div>
    )
}

export default LoanApplication
