import React from 'react'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const UploadDocument = () =>
(
    <form className='space-y-5'>
        <hr />
        <h2 className="text-base font-semibold leading-7 text-gray-900">Upload Document</h2>
        <div className='space-y-5'>
            <div className='flex flex-col space-y-2'>
                <label htmlFor="offer-letter">1. University Offer Letter <span className="text-sm font-medium leading-6 text-gray-400">(*Accepted file type: pdf)</span></label>
                <input type="file" id="offer-letter" name="offer-letter" accept="application/pdf" required/>
            </div>
            <div className='flex flex-col space-y-2'>
                <label htmlFor="transcript">2. Academic Transcript <span className="text-sm font-medium leading-6 text-gray-400">(*Accepted file type: pdf)</span></label>
                <input type="file" id="transcript" name="transcript" accept="application/pdf" required/>
            </div>
            <div className='flex flex-col space-y-2'>
                <label htmlFor="ic">3. Identification Card <span className="text-sm font-medium leading-6 text-gray-400">*Accepted file type: png, jpg, jpeg, pdf</span></label>
                <input type="file" id="ic" name="ic" accept="image/png, image/jpeg, application/pdf" required/>
            </div>
        </div>
        <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            Submit
        </button>
    </form>
);


const Profile = () => {
    return (
        <div className='w-9/12 mx-auto my-5 md:border rounded-lg md:px-20 md:py-4'>
            <div className="space-y-12">
                <div className='pb-8'>
                    <h2 className="text-base font-semibold leading-7 text-gray-900 mb-4">Profile</h2>

                    <div className="sm:col-span-4">
                        <Avatar size={64} icon={<UserOutlined />} />
                    </div>
                    <div className="sm:col-span-4">
                        <label className="block text-sm font-medium leading-6 text-gray-400">
                            Full Name
                        </label>
                        <p>John Smith</p>
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-gray-400">
                                Email address
                            </label>
                            <p>John Smith</p>
                        </div>

                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-gray-400">
                                Date of Birth
                            </label>
                            <p>John Smith</p>
                        </div>

                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-gray-400">
                                Phone Number
                            </label>
                            <p>John Smith</p>
                        </div>

                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-gray-400">
                                IC Number
                            </label>
                            <p>John Smith</p>
                        </div>

                        <div className="col-span-full">
                            <label className="block text-sm font-medium leading-6 text-gray-400">
                                Street address
                            </label>
                            <p>John Smith</p>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                            <label className="block text-sm font-medium leading-6 text-gray-400">
                                City
                            </label>
                            <p>John Smith</p>
                        </div>

                        <div className="sm:col-span-2">
                            <label className="block text-sm font-medium leading-6 text-gray-400">
                                State / Province
                            </label>
                            <p>John Smith</p>
                        </div>

                        <div className="sm:col-span-2">
                            <label className="block text-sm font-medium leading-6 text-gray-400">
                                ZIP / Postal code
                            </label>
                            <p>John Smith</p>
                        </div>
                    </div>
                </div>
                {localStorage.getItem('userType') === 'Borrower' ? (
                    <UploadDocument />
                    ): (<></>)}
                
            </div>
        </div>
    )
}

export default Profile
