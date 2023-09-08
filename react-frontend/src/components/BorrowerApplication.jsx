import React, { useState, useEffect } from 'react'
import { DatePicker} from 'antd';
import DocumentService from '../services/documentService';

const { RangePicker } = DatePicker;

const BorrowerApplication = () => {

    useEffect(() => {
        DocumentService.checkUserDocument(localStorage.getItem('userID')).then((response) => {
            if (response.data != '200') {
                alert('Please upload the required documents before applying for a loan.');
                window.location.href = '/profile';
            }
        });
    }, []);

    const [courseDuration, setCourseDuration] = useState(null);

    const [loan, setLoan] = useState({
        universityName: '',
        levelOfStudy: '',
        loanAmount: '',
        course: '',
        courseDuration: '',
        interestRate: '',
        loanPurpose: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (courseDuration === null) {
            alert('Please select the course duration.');
            return;
        }
    };

    return (
        <form className='space-y-5'>
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                <div className='md:col-span-2 space-y-2'>
                    <label htmlFor="uni-name" className="block text-sm font-medium leading-6 text-gray-900">
                        University Name
                    </label>
                    <input
                        type="text"
                        name="uni-name"
                        id="uni-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                    />
                </div>

                <div className='space-y-2'>
                    <label htmlFor="level-of-study" className="block text-sm font-medium leading-6 text-gray-900">
                        Level of Study
                    </label>
                    <select
                        type="text"
                        name="level-of-study"
                        id="level-of-study"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        value={'Degree'}
                    >
                        <option value="Diploma">Diploma</option>
                        <option value="Degree">Degree</option>
                        <option value="Master">Master</option>
                        <option value="PhD">PhD</option>
                    </select>
                </div>

                <div className='space-y-2'>
                    <label htmlFor="loan-amount" className="block text-sm font-medium leading-6 text-gray-900">
                        Loan Amount
                    </label>
                    <input
                        type="number"
                        step="0.01" 
                        name="loan-amount"
                        id="loan-amount"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
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
                    />
                </div>

                <div className='space-y-2'>
                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                        Loan Duration
                    </label>
                    <RangePicker
                        name="loan-duration"
                        id="loan-duration"
                        className='w-full py-1.5'
                        disabled
                        value={courseDuration}
                    />
                </div>
                
                <div className='space-y-2'>
                    <label htmlFor="course-duration" className="block text-sm font-medium leading-6 text-gray-900">
                        Course Duration
                    </label>
                    <RangePicker
                        name="course-duration"
                        id="course-duration"
                        required
                        className='w-full py-1.5'
                        onChange={(value) => setCourseDuration(value)}
                    />
                </div>

                <div className='space-y-2'>
                    <label htmlFor="interest-rate" className="block text-sm font-medium leading-6 text-gray-900">
                        Interest Rate
                    </label>
                    <input
                        type="text"
                        name="interest-rate"
                        id="interest-rate"
                        autoComplete="interest-rate"
                        value={3 + '%'}
                        disabled
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>

                <div className='space-y-2'>
                    <label htmlFor="loan-purpose" className="block text-sm font-medium leading-6 text-gray-900">
                        Loan Purpose
                    </label>
                    <input
                        type="text"
                        name="loan-purpose"
                        id="loan-purpose"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
            <button
                type="submit"
                onClick={handleSubmit}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Submit
            </button>
        </form>
    )
}

export default BorrowerApplication
