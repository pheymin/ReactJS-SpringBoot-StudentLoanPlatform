import React from 'react'
import { useEffect, useState } from 'react'
import { Table, Space, Button, Modal, Breadcrumb } from 'antd';
import LoanService from '../services/LoanService';
import LenderService from '../services/LenderService';

const ManageRepayment = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        LoanService.getLoanBorrower().then((loanResponse) => {
            const loansInProgress = loanResponse.data.filter((loan) => loan.loan.loanStatus === 'Repayment In Progress');
            
            const lenderPromises = loansInProgress.map((loan) => {
                return LenderService.getLenderById(loan.loan.lenderID)
                    .then((lenderResponse) => lenderResponse.data);
            });

            Promise.all(lenderPromises).then((lenders) => {
                const newData = loansInProgress.map((loan, index) => {
                    return {
                        key: loan.loan.loanID,
                        loanID: loan.loan.loanID,
                        borrowerName: loan.borrower.user.name,
                        loanAmount: loan.loan.loanAmount,
                        loanDurationStart: loan.loan.loanDurationStart,
                        loanDurationEnd: loan.loan.loanDurationEnd,
                        lenderName: lenders[index].name,
                    };
                });
                setData(newData);
            });
        });
    }, []);

    const columns = [
        {
            title: 'Loan ID',
            dataIndex: 'loanID',
            key: 'loanID',
            width: 100,
            fixed: 'left'
        },
        {
            title: 'Borrower Name',
            dataIndex: 'borrowerName',
            key: 'borrowerName',
            width: 150,
            fixed: 'left'
        },
        {
            title: 'Lender Name',
            dataIndex: 'lenderName',
            key: 'lenderName',
            width: 150
        },
        {
            title: 'Loan Amount',
            dataIndex: 'loanAmount',
            key: 'loanAmount',
            width: 150
        },
        {
            title: 'Loan Start Date',
            dataIndex: 'loanDurationStart',
            key: 'loanDurationStart',
            width: 150
        },
        {
            title: 'Loan End Date',
            dataIndex: 'loanDurationEnd',
            key: 'loanDurationEnd',
            width: 150
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button onClick={() => handleView(record.key)}>View Detail</Button>
                </Space>
            ),
            width: 80,
        }
    ]

    const handleView = (key) => {
        window.location.href = `/admin/manage-loan/detail?id=${key}`;
    }

    return (
        <div className='mx-auto w-5/6 my-5 md:px-20 space-y-5'>
            <Breadcrumb
                separator=">"
                items={[
                    {
                        title: 'View Repayment',
                    },
                ]}
            />
            <h2>View Repayment In Progress Loan</h2>
            <Table
                columns={columns}
                dataSource={data}
                bordered
                size="middle"
            />
        </div>
    )
}

export default ManageRepayment
