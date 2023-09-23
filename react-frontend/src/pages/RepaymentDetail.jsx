import React, {useState, useEffect} from 'react'
import TransactionHistory from '../components/TransactionHistory';
import LoanService from '../services/LoanService';
import { Breadcrumb,Segmented } from 'antd';

const RepaymentDetail = () => {

    const [loan, setLoan] = useState({});
    useEffect(() => {
        let userId = localStorage.getItem('userID')
        let userType = localStorage.getItem('userType')
        if (!userId) {
            window.location.href = '/login'
        }
        if (userType !== 'Admin') {
            window.location.href = '/'
        }

        //get loanid from url
        let loanID = new URLSearchParams(window.location.search).get('id')
        LoanService.getLoanById(loanID)
            .then((res) => {
                setLoan(res.data)
            })
    }, [])

  return (
    <div className='mx-auto w-4/5 my-5 md:px-20 space-y-5'>
        <Breadcrumb
                separator=">"
                items={[
                    {
                        title: 'View Repayment',
                        href: 'http://localhost:5173/admin/manage-loan',
                    },
                    {
                        title: 'Repayment Detail',
                    },
                ]}
            />
      <TransactionHistory loan={loan} />
    </div>
  )
}

export default RepaymentDetail
