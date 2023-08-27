import React from 'react'
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
    return (
        <div className='w-9/12 mx-auto my-5 md:px-20 space-y-5'>
            <h2>Loan Application</h2>
            <Tabs defaultActiveKey="1" items={items} />
        </div>
    )
}

export default LoanApplication
