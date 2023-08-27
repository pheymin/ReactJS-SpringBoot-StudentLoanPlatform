import React, { useEffect, useState } from 'react'
import UserService from '../services/userService'

const UploadDocument = () =>
(
    <form className='space-y-5'>
        <hr />
        <h2 className="text-base font-semibold leading-7 text-gray-900">Upload Document</h2>
        <div className='space-y-5'>
            <div className='flex flex-col space-y-2'>
                <label htmlFor="offer-letter">1. University Offer Letter <span className="text-sm font-medium leading-6 text-gray-400">(*Accepted file type: pdf)</span></label>
                <input type="file" id="offer-letter" name="offer-letter" accept="application/pdf" required />
            </div>
            <div className='flex flex-col space-y-2'>
                <label htmlFor="transcript">2. Academic Transcript <span className="text-sm font-medium leading-6 text-gray-400">(*Accepted file type: pdf)</span></label>
                <input type="file" id="transcript" name="transcript" accept="application/pdf" required />
            </div>
            <div className='flex flex-col space-y-2'>
                <label htmlFor="ic">3. Identification Card <span className="text-sm font-medium leading-6 text-gray-400">*Accepted file type: png, jpg, jpeg, pdf</span></label>
                <input type="file" id="ic" name="ic" accept="image/png, image/jpeg, application/pdf" required />
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
    let userId = localStorage.getItem('userID')
    let userType = localStorage.getItem('userType')
    const [user, setUser] = useState({})

    useEffect(() => {
        if (!userId) {
            window.location.href = '/login'
        }
        if (userType !== 'Borrower') {
            if (userType === 'Lender') {
                window.location.href = '/lender'
            } else {
                window.location.href = '/admin'
            }
        }

        UserService.getUserById(userId)
            .then(res => {
                setUser(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className='w-9/12 mx-auto my-5 md:border rounded-lg md:px-20 md:py-4'>
            <div className="space-y-12">
                <div className='pb-8'>
                    <h2 className=" text-gray-900 mb-4">Profile</h2>

                    <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5 flex flex-col">
                        <div className='self-center'>
                            <img src={user.photoUrl} alt="profile" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-400">
                                Full Name
                            </label>
                            <p>{user.name}</p>
                        </div>
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-gray-400">
                                Email address
                            </label>
                            <p>{user.email}</p>
                        </div>

                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-gray-400">
                                Date of Birth
                            </label>
                            <p>{user.dob}</p>
                        </div>

                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-gray-400">
                                Phone Number
                            </label>
                            <p>{user.phone}</p>
                        </div>

                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-gray-400">
                                IC Number
                            </label>
                            <p>{user.ic}</p>
                        </div>

                        <div className="col-span-full">
                            <label className="block text-sm font-medium leading-6 text-gray-400">
                                Street address
                            </label>
                            <p>{user.street}</p>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                            <label className="block text-sm font-medium leading-6 text-gray-400">
                                City
                            </label>
                            <p>{user.city}</p>
                        </div>

                        <div className="sm:col-span-2">
                            <label className="block text-sm font-medium leading-6 text-gray-400">
                                State / Province
                            </label>
                            <p>{user.state}</p>
                        </div>

                        <div className="sm:col-span-2">
                            <label className="block text-sm font-medium leading-6 text-gray-400">
                                ZIP / Postal code
                            </label>
                            <p>{user.postcode}</p>
                        </div>
                    </div>
                </div>
                {localStorage.getItem('userType') === 'Borrower' ? (
                    <UploadDocument />
                ) : (<></>)}

            </div>
        </div>
    )
}

export default Profile
