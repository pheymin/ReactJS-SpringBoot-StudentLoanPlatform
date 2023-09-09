import React, { useEffect, useState } from 'react'
import { Tabs } from 'antd';
import Application from '../components/BorrowerApplication';
import Agreement from '../components/BorrowerAgreement';
import LoanService from '../services/LoanService';

const LoanApplication = () => {
    const [activeTab, setActiveTab] = useState('1');
    const items = [
        {
            key: '1',
            label: 'Loan Application',
            children: <Application />,
        },
        {
            key: '2',
            label: 'Loan Agreement',
            children: <Agreement />
        }
    ];

    useEffect(() => {
        LoanService.getLoanByBorrowerID(localStorage.getItem('userID')).then((response) => {
            let loanStatus = response.data.loanStatus;
            if (loanStatus === 'In Progress') {
                items[0].disabled = true;
                items[1].disabled = false;

                setActiveTab('2');
            }else{
                items[0].disabled = false;
                items[1].disabled = true;

                setActiveTab('1');
            }
        });
    }, []);

    return (
        <div className='mx-auto w-4/5 my-5 md:px-20 space-y-5'>
            <h2>Loan Application</h2>
            <Tabs activeKey={activeTab} items={items}/>
        </div>
    )
}

export default LoanApplication
