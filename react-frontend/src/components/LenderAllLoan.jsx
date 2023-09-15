import React from 'react'
import { useEffect, useState } from 'react'
import { Table, Space, Button, Modal, Breadcrumb } from 'antd';
import LoanService from '../services/LoanService';
import Agreement from '../components/BorrowerAgreement';

const LenderAllLoan = () => {
    const [data, setData] = useState([]);
    const [fund, setFund] = useState(false);
    const [loanID, setLoanID] = useState('');

    useEffect(() => {
        // Fetch data from your service
        LoanService.getLoanByStatus('Pending')
            .then((res) => {
                const formattedData = res.data.map((loan) => ({
                    key: loan.loan.loanID,
                    name: loan.borrower.user.name,
                    uniName: loan.borrower.uniName,
                    levelOfStudy: loan.borrower.levelOfStudy,
                    course: loan.borrower.course,
                    courseStart: loan.borrower.courseStart,
                    courseEnd: loan.borrower.courseEnd,
                    loanAmount: loan.loan.loanAmount,
                    loanPurpose: loan.loan.loanPurpose,
                }));
                setData(formattedData);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: 100,
            fixed: 'left'
        },
        {
            title: 'University Name',
            dataIndex: 'uniName',
            key: 'uniName',
            width: 150
        },
        {
            title: 'Level of Study',
            dataIndex: 'levelOfStudy',
            key: 'levelOfStudy',
            width: 100
        },
        {
            title: 'Course',
            dataIndex: 'course',
            key: 'course',
            width: 100
        },
        {
            title: 'Course Duration',
            children: [
                {
                    title: 'Course Start Date',
                    dataIndex: 'courseStart',
                    key: 'courseStart',
                    width: 100,
                },
                {
                    title: 'Course End Date',
                    dataIndex: 'courseEnd',
                    key: 'courseEnd',
                    width: 100
                },],
        },
        {
            title: 'Loan Amount',
            dataIndex: 'loanAmount',
            key: 'loanAmount',
            width: 100,
        },
        {
            title: 'Loan Purpose',
            dataIndex: 'loanPurpose',
            key: 'loanPurpose',
            width: 100,
        },
        {
            title: 'Action',
            key: 'action',
            width: 130,
            fixed: 'right',
            render: (text, record) => (
                <Space size="middle">
                    <Button onClick={() => handleFund(record.key)}>Fund this Borrower</Button>
                </Space>
            ),
        },
    ];

    const handleFund = (key) => {
        setFund(true);
        setLoanID(key);
    };


    return (
        <div className='space-y-5'>
            {fund ? (
                <div className='space-y-5'>
                    <Breadcrumb
                        separator=">"
                        items={[
                            {
                                title: 'All Loans',
                                href: '/lender/loan'
                            },
                            {
                                title: 'Sign Loan Agreement',
                            },
                        ]}
                    />
                    <Agreement loanID={loanID} />
                </div>
            ) :
                (
                    <div className='space-y-5'>
                        <Breadcrumb
                            separator=">"
                            items={[
                                {
                                    title: 'All Loans',
                                },
                            ]}
                        />
                        <Table
                            columns={columns}
                            dataSource={data}
                            bordered
                            size="middle"
                            scroll={{
                                x: 'calc(700px + 50%)',
                                // y: 400,
                            }}
                        /></div>
                )}
        </div>
    )
}

export default LenderAllLoan
