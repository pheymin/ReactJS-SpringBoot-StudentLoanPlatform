import React from 'react'
import { Table, Typography } from 'antd';
const { Text } = Typography;

const TransactionHistory = (loan) => {
    const { loanAmount, loanDurationEnd, repaymentTerms } = loan.loan;

    const finalLoanAmount = loanAmount* 1.03;
    // 1. Get the current date
    const currentDate = new Date();

    // 2. Calculate the number of payments made before the current date
    const loanEndDate = new Date(loanDurationEnd);
    const monthsDiff = (currentDate.getFullYear() - loanEndDate.getFullYear()) * 12 + (currentDate.getMonth() - loanEndDate.getMonth()) + 1;
    const paymentsMade = Math.max(monthsDiff, 0);

    // 3. Calculate the total repayment made
    const repaymentPerTransaction = (finalLoanAmount / repaymentTerms).toFixed(2);
    const totalRepayment = (paymentsMade * repaymentPerTransaction).toFixed(2);

    // 4. Calculate the current balance
    const currentBalance = (finalLoanAmount - totalRepayment).toFixed(2);

    // 5. Create the transaction data
    const transactionData = [];
    for (let i = 0; i < paymentsMade; i++) {
        const transactionDate = new Date(loanEndDate);
        transactionDate.setMonth(transactionDate.getMonth() + i);
        transactionData.push({
            name: `Transaction ${i + 1}`,
            date: transactionDate.toLocaleDateString(),
            repayment: repaymentPerTransaction,
        });
    }

    const columns = [
        {
            title: 'Transaction',
            dataIndex: 'name',
        },
        {
            title: 'Date',
            dataIndex: 'date',
        },
        {
            title: 'Repayment',
            dataIndex: 'repayment',
        },
    ];

    return (
        <div className='border rounded-lg px-5 py-10 space-y-4'>
            <h4 className='font-semibold'>Payment History</h4>
            <Table
                columns={columns}
                dataSource={transactionData}
                pagination={false}
                bordered
                summary={(pageData) => {
                    return (
                        <>
                            <Table.Summary.Row>
                                <Table.Summary.Cell index={0}>Total</Table.Summary.Cell>
                                <Table.Summary.Cell index={1}>
                                    <Text type="danger">{finalLoanAmount}</Text>
                                </Table.Summary.Cell>
                                <Table.Summary.Cell index={2}>
                                    <Text>{totalRepayment}</Text>
                                </Table.Summary.Cell>
                            </Table.Summary.Row>
                            <Table.Summary.Row>
                                <Table.Summary.Cell index={0}>Balance</Table.Summary.Cell>
                                <Table.Summary.Cell index={1} colSpan={2}>
                                    <Text type="danger">{currentBalance}</Text>
                                </Table.Summary.Cell>
                            </Table.Summary.Row>
                        </>
                    );
                }}
            />
        </div>
    );
};

export default TransactionHistory
