import React from 'react'
import { Steps } from 'antd';

const Borrower = () => {
    return (
        <div className='w-9/12 mx-auto my-5 md:py-4 space-y-5'>
            <h2>Dashboard</h2>
            <div className='grid grid-rows-2 grid-cols-1 w-100'>
                <div className='flex flex-col border rounded-lg px-5 py-10'>
                    <h4 className='font-semibold'>Loan Status</h4>
                    <Steps
                        direction="horizontal"
                        size="small"
                        current={2}
                        items={[
                            {
                                title: 'Pending'
                            },
                            {
                                title: 'In Progress'
                            },
                            {
                                title: 'Lender Signed'
                            },
                            {
                                title: 'Borrower Signed'
                            },
                            {
                                title: 'Lender Paid'
                            },
                            {
                                title: 'Repayment In Progress'
                            },
                            {
                                title: 'Completed'
                            }
                        ]}
                    />
                </div>

            </div>

        </div>
    )
}

export default Borrower
