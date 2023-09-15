import React, { useState, useEffect } from 'react'
import { DatePicker } from 'antd';
import DocumentService from '../services/documentService';
import BorrowerService from '../services/BorrowerService';
import LoanService from '../services/LoanService';

const { RangePicker } = DatePicker;

const Form = () => {

    const [borrower, setBorrower] = useState({
        userID: localStorage.getItem('userID'),
        uniName: '',
        levelOfStudy: 'Degree',
        course: '',
        courseStart: '',
        courseEnd: ''
    });

    const [loan, setLoan] = useState({
        borrowerID: '',
        loanAmount: '',
        loanDurationStart: '',
        loanDurationEnd: '',
        loanPurpose: '',
        appliedDate: new Date().toISOString().slice(0, 10),
        loanStatus: 'Pending'
    });

    const [loanDuration, setLoanDuration] = useState([]);

    const formatDate = (date) => date.toISOString().slice(0, 10);

    const handleLoanDurationChange = (selectedDuration) => {
        setLoanDuration(selectedDuration);
        const courseStart = formatDate(selectedDuration[0]);
        const courseEnd = formatDate(selectedDuration[1]);

        setBorrower({ ...borrower, courseStart, courseEnd });
        setLoan({ ...loan, loanDurationStart: courseStart, loanDurationEnd: courseEnd });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBorrower({ ...borrower, [name]: value });
        setLoan({ ...loan, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (loanDuration.length == 0) {
            alert('Please select the course duration.');
            return;
        }

        BorrowerService.updateBorrower(borrower, localStorage.getItem('userID'))
            .then((response) => {
                const updatedBorrowerID = response.data.borrowerID;
                const updatedLoan = { ...loan, borrowerID: updatedBorrowerID };
                setLoan(updatedLoan);

                console.log(response.data);
                return updatedBorrowerID;
            })
            .then((borrowerID) => {
                console.log(loan);
                return LoanService.createLoan({ ...loan, borrowerID });
            })
            .then((response) => {
                alert('Loan application submitted successfully.');
                window.location.href = '/borrower/loan-application';
            })
            .catch((error) => {
                console.error(error);
            });

    };

    return (
        <form className='space-y-5' onSubmit={handleSubmit}>
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                <div className='md:col-span-2 space-y-2'>
                    <label htmlFor="uniName" className="block text-sm font-medium leading-6 text-gray-900">
                        University Name
                    </label>
                    <input
                        type="text"
                        name="uniName"
                        id="uniName"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        onChange={handleInputChange}
                    />
                </div>

                <div className='space-y-2'>
                    <label htmlFor="levelOfStudy" className="block text-sm font-medium leading-6 text-gray-900">
                        Level of Study
                    </label>
                    <select
                        type="text"
                        name="levelOfStudy"
                        id="levelOfStudy"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        value={'Degree'}
                        onChange={handleInputChange}
                    >
                        <option value="Diploma">Diploma</option>
                        <option value="Degree">Degree</option>
                        <option value="Master">Master</option>
                        <option value="PhD">PhD</option>
                    </select>
                </div>

                <div className='space-y-2'>
                    <label htmlFor="loanAmount" className="block text-sm font-medium leading-6 text-gray-900">
                        Loan Amount
                    </label>
                    <input
                        type="number"
                        step="0.01"
                        name="loanAmount"
                        id="loanAmount"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        onChange={handleInputChange}
                    />
                </div>

                <div className='space-y-2'>
                    <label htmlFor="course" className="block text-sm font-medium leading-6 text-gray-900">
                        Course
                    </label>
                    <input
                        type="text"
                        name="course"
                        id="course"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        onChange={handleInputChange}
                    />
                </div>

                <div className='space-y-2'>
                    <label htmlFor="loanDuration" className="block text-sm font-medium leading-6 text-gray-900">
                        Loan Duration
                    </label>
                    <RangePicker
                        name="loanDuration"
                        id="loanDuration"
                        className='w-full py-1.5'
                        disabled
                        value={loanDuration}
                    />
                </div>

                <div className='space-y-2'>
                    <label htmlFor="courseDuration" className="block text-sm font-medium leading-6 text-gray-900">
                        Course Duration
                    </label>
                    <RangePicker
                        name="courseDuration"
                        id="courseDuration"
                        required
                        className='w-full py-1.5'
                        onChange={handleLoanDurationChange}
                    />
                </div>

                <div className='space-y-2'>
                    <label htmlFor="interestRate" className="block text-sm font-medium leading-6 text-gray-900">
                        Interest Rate
                    </label>
                    <input
                        type="text"
                        name="interestRate"
                        id="interestRate"
                        value={3 + '%'}
                        disabled
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>

                <div className='space-y-2'>
                    <label htmlFor="loanPurpose" className="block text-sm font-medium leading-6 text-gray-900">
                        Loan Purpose
                    </label>
                    <input
                        type="text"
                        name="loanPurpose"
                        id="loanPurpose"
                        required
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
            <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Submit
            </button>
        </form>
    )
}

const FilledForm = ({ loan, borrower }) => {

    return (
        <>
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                <div className='md:col-span-2 space-y-2'>
                    <label htmlFor="uniName" className="block text-sm font-medium leading-6 text-gray-900">
                        University Name
                    </label>
                    <p>{borrower.uniName}</p>
                </div>

                <div className='space-y-2'>
                    <label htmlFor="levelOfStudy" className="block text-sm font-medium leading-6 text-gray-900">
                        Level of Study
                    </label>
                    <p>{borrower.levelOfStudy}</p>
                </div>

                <div className='space-y-2'>
                    <label htmlFor="loanAmount" className="block text-sm font-medium leading-6 text-gray-900">
                        Loan Amount
                    </label>
                    <p>{loan.loanAmount}</p>
                </div>

                <div className='space-y-2'>
                    <label htmlFor="course" className="block text-sm font-medium leading-6 text-gray-900">
                        Course
                    </label>
                    <p>{borrower.course}</p>
                </div>

                <div className='space-y-2'>
                    <label htmlFor="loanDuration" className="block text-sm font-medium leading-6 text-gray-900">
                        Loan Duration
                    </label>
                    <p>From {loan.loanDurationStart} to {loan.loanDurationEnd}</p>
                </div>

                <div className='space-y-2'>
                    <label htmlFor="courseDuration" className="block text-sm font-medium leading-6 text-gray-900">
                        Course Duration
                    </label>
                    <p>From {loan.loanDurationStart} to {loan.loanDurationEnd}</p>
                </div>

                <div className='space-y-2'>
                    <label htmlFor="interestRate" className="block text-sm font-medium leading-6 text-gray-900">
                        Interest Rate
                    </label>
                    <p>3%</p>
                </div>

                <div className='space-y-2'>
                    <label htmlFor="loanPurpose" className="block text-sm font-medium leading-6 text-gray-900">
                        Loan Purpose
                    </label>
                    <p>{loan.loanPurpose}</p>
                </div>
            </div>
        </>
    )
}

const BorrowerApplication = () => {
    const [loan, setLoan] = useState(null);
    const [borrower, setBorrower] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Add isLoading state
    const userId = localStorage.getItem('userID');

    useEffect(() => {
        DocumentService.checkUserDocument(userId).then((response) => {
            if (response.data == 200) {
                LoanService.getLoanByBorrowerID(userId).then((response) => {
                    if (response.data != '') {
                        setLoan(response.data);
                        BorrowerService.getBorrowerById(response.data.borrowerID).then((response) => {
                            setBorrower(response.data);
                            setIsLoading(false); // Set isLoading to false when borrower data is available
                        });
                    } else {
                        setIsLoading(false);
                    }
                });
            } else {
                alert('Please upload the required documents before applying for a loan.');
                window.location.href = '/profile';
            }
        });
    }, []);

    return (
        <div className='space-y-5'>
            {isLoading ? (
                <p>Loading...</p>
            ) : loan ? (
                <FilledForm loan={loan} borrower={borrower} />
            ) : (
                <Form />
            )}
        </div>
    );
};


export default BorrowerApplication
