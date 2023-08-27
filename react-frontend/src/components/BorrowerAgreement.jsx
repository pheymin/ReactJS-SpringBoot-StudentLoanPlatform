import React from 'react'

const BorrowerAgreement = () => {
    return (
        <div className='space-y-5'>
            <h3 className='font-semibold'>Preview of Agreement</h3>
            <h3 className='font-semibold'>LOAN AGREEMENT TERMS AND CONDITIONS</h3>
            <p>Terms and conditions</p>
            <p>
                <strong>Parties:</strong><br />
                This Student Loan Agreement ("Agreement") is entered into on <strong>[Date]</strong> (the "Effective Date") between <strong>[Lender's Name]</strong> (referred to as "Lender") and <strong>[Borrower's Name]</strong> (referred to as "Borrower").
                <br /><br />
                <strong>Loan Details:</strong><br />

                <em>Loan Amount:</em> The Lender agrees to lend the Borrower the principal amount of <strong>[Loan Amount]</strong> (the "Loan").<br />
                <em>Interest Rate:</em> The Loan shall accrue interest at an annual rate of <strong>3%</strong>.<br />
                <em>Repayment Terms:</em> The Borrower agrees to repay the Loan beginning on <strong>[Expected Graduation]</strong>.<br /><br />
                <strong>Use of Funds:</strong><br />
                The Borrower agrees to use the Loan funds solely for educational purposes, including tuition, books, fees, and other related expenses.
                <br /><br />
                <strong>Prepayment:</strong><br />
                The Borrower may prepay the Loan in full or in part at any time without incurring any prepayment penalties.
                <br /><br />
                <strong>Entire Agreement:</strong><br />
                This Agreement constitutes the entire agreement between the parties and supersedes all prior oral or written agreements, understandings, or representations.
                <br /><br />
                <strong>Execution:</strong><br />
                By signing below, the parties acknowledge their understanding and acceptance of the terms and conditions set forth in this Agreement.

            </p>
            <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Submit
            </button>

        </div>
    )
}

export default BorrowerAgreement
