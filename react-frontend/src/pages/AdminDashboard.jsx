import React, { useState, useEffect } from 'react'
import { Card, Col, Row, Statistic } from 'antd';
import userService from '../services/userService';
import LoanService from '../services/LoanService';

const QuickAction = () => {
    return (
        <div className='mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 border rounded-lg px-5 py-10'>
            <h4 className='md:col-span-6 space-y-2 font-semibold'>Quick Action</h4>
            <div className='md:col-span-3 space-y-2 cursor-pointer md:border-r-2' onClick={() => { window.location.href = "manage-user"; }}>
                <div className='p-5 space-y-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                    <h5 className='font-semibold'>Manage User</h5>
                    <p>Control and oversee user accounts, ensuring accurate information and smooth operations.</p>
                </div>
            </div>
            <div className='md:col-span-3 space-y-2 cursor-pointer' onClick={() => { window.location.href = "view-loan"; }}>
                <div className='p-5 space-y-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h5 className='font-semibold'>View Loan</h5>
                    <p>Access and review your loan details, including terms, status, and other information.</p>
                </div>
            </div>
            <div className='md:col-span-3 space-y-2 cursor-pointer md:border-r-2' onClick={() => { window.location.href = "manage-loan"; }}>
                <div className='p-5 space-y-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                    <h5 className='font-semibold'>Manage Loan and Repayment</h5>
                    <p>Handle user loan application, monitor its progress, and manage their repayment plan efficiently.</p>
                </div>
            </div>
            <div className='md:col-span-3 space-y-2 cursor-pointer' onClick={() => { window.location.href = "view-loan"; }}>
                <div className='p-5 space-y-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <h5 className='font-semibold'>Profile</h5>
                    <p>Manage your personal information and preferences in your profile.</p>
                </div>
            </div>
        </div>
    )
}

const StatisticCard = () => {
    const [borrowers, setBorrowers] = useState(0)
    const [lenders, setLenders] = useState(0)
    const [loans, setLoans] = useState(0)

    useEffect(() => {
        userService.getUsers().then((res) => {
            let borrowers = res.data.filter((user) => user.userType === 'Borrower')
            let lenders = res.data.filter((user) => user.userType === 'Lender')
            setBorrowers(borrowers.length)
            setLenders(lenders.length)
        })

        LoanService.getLoanBorrower().then((res) => {
            setLoans(res.data.length)
        })
    }, [])

    return (
        <Row gutter={16}>
                <Col span={8}>
                    <Card bordered={false}>
                        <Statistic
                            title="Total No. of Borrowers"
                            value={borrowers}
                            valueStyle={{
                                color: '#3f8600',
                            }}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={false}>
                        <Statistic
                            title="Total No. of Lenders"
                            value={lenders}
                            valueStyle={{
                                color: '#cf1322',
                            }}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={false}>
                        <Statistic
                            title="Total No. of Loans"
                            value={loans}
                            valueStyle={{
                                color: '#cf1322',
                            }}
                        />
                    </Card>
                </Col>
            </Row>
    )
}

const AdminDashboard = () => {
    useEffect(() => {
        let userId = localStorage.getItem('userID')
        let userType = localStorage.getItem('userType')
        if (!userId) {
            window.location.href = '/login'
        }
        if (userType !== 'Admin') {
            window.location.href = '/'
        }
    }, [])

    return (
        <div className='mx-auto w-5/6 my-5 md:px-20 space-y-5'>
            <StatisticCard />
            <QuickAction />
        </div>
    )
}

export default AdminDashboard
