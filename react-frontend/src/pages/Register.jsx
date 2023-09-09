import React, { useState, useEffect } from 'react'
import UserService from '../services/userService'

export default function Register() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [dob, setDob] = useState('')
    const [ic, setIc] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [postcode, setPostcode] = useState('')
    const [phone, setPhone] = useState('')
    const [userType, setUserType] = useState('Borrower')
    const [bankName, setBankName] = useState('')
    const [bankAcc, setBankAcc] = useState('')
    const [status, setStatus] = useState(1)
    const [photoUrl, setPhotoUrl] = useState("https://source.boringavatars.com/marble/120/" + ic)

    useEffect(() => {
        //redirect to dashboard if user is already logged in
        if (localStorage.getItem('userID')) {
            switch (localStorage.getItem('userType')) {
                case 'Borrower':
                    window.location.href = '/borrower';
                    break;
                case 'Lender':
                    window.location.href = '/lender';
                    break;
                case 'Admin':
                    window.location.href = '/admin';
                    break;
            }
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await UserService.createUser({
                email,
                password,
                name,
                dob,
                ic,
                street,
                city,
                state,
                postcode,
                phone,
                userType,
                status,
                bankName,
                bankAcc,
                photoUrl
            });
            window.location.href = '/login';
        } catch (error) {
            alert(error.response.data);
        }
    }

    const handleCancel = () => {
        window.location.href = '/login';
    }
        
    return (
        <form className='w-9/12 mx-auto my-5 md:border rounded-lg md:px-20 md:py-4' onSubmit={handleSubmit}>
            <div className="space-y-12">
                <div className="pb-8">
                    <h2 className="text-base font-semibold leading-7 text-gray-900 mb-4">Register Account</h2>

                    <div className="sm:col-span-4">
                        <label htmlFor="full-name" className="block text-sm font-medium leading-6 text-gray-900">
                            Full Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="full-name"
                                name="full-name"
                                type="full-name"
                                autoComplete="full-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                required
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    autoComplete="password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                    minLength={8}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="dob" className="block text-sm font-medium leading-6 text-gray-900">
                                Date of Birth
                            </label>
                            <div className="mt-2">
                                <input
                                    type="date"
                                    name="dob"
                                    id="dob"
                                    autoComplete="date of birth"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                    max={(new Date(new Date().setFullYear(new Date().getFullYear() - 17))).toISOString().split('T')[0]} // Set the maximum date
                                    onChange={(e) => setDob(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="ic" className="block text-sm font-medium leading-6 text-gray-900">
                                IC Number
                            </label>
                            <div className="mt-2">
                                <input
                                    type="digit"
                                    name="ic"
                                    id="ic"
                                    autoComplete="ic number"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                    pattern="\d{12}" // Regular expression for exactly 12 digits
                                    title='IC number must have 12 digits (without "-")' // Error message if pattern does not match
                                    onChange={(e) => setIc(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                Street address
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="street-address"
                                    id="street-address"
                                    autoComplete="street-address"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                    onChange={(e) => setStreet(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                            <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                City
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    autoComplete="address-level2"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                State / Province
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="region"
                                    id="region"
                                    autoComplete="address-level1"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                    onChange={(e) => setState(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                ZIP / Postal code
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="postal-code"
                                    id="postal-code"
                                    autoComplete="postal-code"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                    pattern="\d{5}" // Regular expression for exactly 5 digits
                                    title="ZIP/Postal code must have 5 digits" // Error message if pattern does not match
                                    onChange={(e) => setPostcode(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                                Phone Number
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    autoComplete="phone"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                    pattern="\d{10,11}" // Regular expression for 10-11 digits
                                    title='Phone number must have 10-11 digits (without "-")' // Error message if pattern does not match
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="user-type" className="block text-sm font-medium leading-6 text-gray-900">
                                User Type
                            </label>
                            <div className="mt-2">
                                <select
                                    id="user-type"
                                    name="user-type"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                    value={userType}
                                    onChange={(e) => setUserType(e.target.value)}
                                >
                                    <option value="Borrower">Borrower</option>
                                    <option value="Lender">Lender</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="sm:col-span-3">
                            <label htmlFor="bank" className="block text-sm font-medium leading-6 text-gray-900">
                                Bank
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="bank"
                                    id="bank"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                    //contain alphabet and space
                                    pattern="[A-Za-z\s]+"
                                    title='Bank name must only contain alphabets'
                                    onChange={(e) => setBankName(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="bank-account" className="block text-sm font-medium leading-6 text-gray-900">
                                Bank Account
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="bank-account"
                                    id="bank-account"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                    pattern="\d{10,11}"
                                    title='Bank account must have 10-11 digits (without "-")'
                                    onChange={(e) => setBankAcc(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" onClick={handleCancel} className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </form>
    )
}
