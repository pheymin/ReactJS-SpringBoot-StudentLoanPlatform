import React from 'react'
import { useEffect, useState } from 'react'
import { Table, Space, Button, Modal, Breadcrumb } from 'antd';
import LoanService from '../services/LoanService';

const ViewLoan = () => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: 100,
            fixed: 'left'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            width: 150
        },
        {
            title: 'Date of Birth',
            dataIndex: 'dob',
            key: 'dob',
            width: 100
        },
        {
            title: 'Phone Number',
            dataIndex: 'phone',
            key: 'phone',
            width: 100
        },
        {
            title: 'Address',
            children: [
                {
                    title: 'Street',
                    dataIndex: 'street',
                    key: 'street',
                    width: 200,
                },
                {
                    title: 'State',
                    dataIndex: 'state',
                    key: 'state',
                    width: 150,
                    sorter: (a, b) => a.state.length - b.state.length,
                },
                {
                    title: 'City',
                    dataIndex: 'city',
                    key: 'city',
                    width: 150,
                    sorter: (a, b) => a.city.length - b.city.length,
                },
                {
                    title: 'Postcode',
                    dataIndex: 'postcode',
                    key: 'postcode',
                    width: 100,
                },
            ],
        },
        {
            title: 'Action',
            key: 'action',
            width: 110,
            fixed: 'right',
            render: (text, record) => (
                <Space size="middle">
                    <Button onClick={() => handleView(record.key)}>View Detail</Button>
                </Space>
            ),
        },
    ];

    const [data, setData] = useState([]);

    useEffect(() => {
        let userId = localStorage.getItem('userID')
        let userType = localStorage.getItem('userType')
        if (!userId) {
            window.location.href = '/login'
        }
        if (userType !== 'Admin') {
            window.location.href = '/'
        }
        
        LoanService.getLoanBorrower().then((res) => {
            const newData = res.data.map((loan) => {
                return {
                    key: loan.loan.loanID,
                    name: loan.borrower.user.name,
                    email: loan.borrower.user.email,
                    dob: loan.borrower.user.dob,
                    phone: loan.borrower.user.phone,
                    street: loan.borrower.user.street,
                    state: loan.borrower.user.state,
                    city: loan.borrower.user.city,
                    postcode: loan.borrower.user.postcode,
                };
            });
            setData(newData);
        });
    }, []);


    const handleView = (key) => {
        window.location.href = `/admin/view-loan/detail?id=${key}`;
    }

    return (
        <div className='mx-auto w-5/6 my-5 md:px-20 space-y-5'>
            <Breadcrumb
                separator=">"
                items={[
                    {
                        title: 'View Loan',
                    },
                ]}
            />
            <h2>View Borrower Loan</h2>
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

export default ViewLoan