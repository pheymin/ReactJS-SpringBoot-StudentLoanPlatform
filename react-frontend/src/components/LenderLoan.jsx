import React from 'react'
import { useEffect, useState } from 'react'
import { Table, Space, Button } from 'antd';
import LoanService from '../services/LoanService';

const LenderLoan = () => {
    const [data, setData] = useState([]);
    const [fund, setFund] = useState(false);
    const [loanID, setLoanID] = useState('');

    useEffect(() => {
        let userId = parseInt(localStorage.getItem('userID'));
        LoanService.getLoanBorrowerByLenderID(userId)
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
            width: 100,
            fixed: 'right',
            render: (text, record) => (
                <Space size="middle">
                    <Button onClick={() => handleFund(record.key)}>Provide Fund</Button>
                </Space>
            ),
        },
    ];

    const handleFund = (key) => {
        setFund(true);
        setLoanID(key);
    };

    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
                bordered
                size="middle"
                scroll={{
                    x: 'calc(700px + 50%)',
                    // y: 400,
                }}
            />
        </div>
    )
}

export default LenderLoan
