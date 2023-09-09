import React, { useEffect, useState } from 'react'
import { Breadcrumb } from 'antd';
import UserService from '../services/userService'

const UpdateForm = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        dob: '',
        ic: '',
        userType: '',
        street: '',
        city: '',
        state: '',
        postcode: ''
    })
    //get user id from url
    let userId = new URLSearchParams(window.location.search).get('id')

    useEffect(() => {
        UserService.getUserById(userId)
            .then(res => {
                setUser(res.data)
            })
            .catch(err => {
                alert(err)
                window.location.href = '/admin/manage-user'
            })

    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({ ...prevUser, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await UserService.updateUser(user, userId);
            alert(user.name + 'information updated');
        } catch (error) {
            alert(error.response.data);
        }
    }

    return (
        <form className='space-y-5' onSubmit={handleSubmit}>
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className='md:col-span-6 space-y-2'>
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={user.name}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        disabled
                    />
                </div>

                <div className='md:col-span-3 space-y-2'>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={user.email || ''}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        onChange={e => handleInputChange(e)}
                    />
                </div>

                <div className='md:col-span-3 space-y-2'>
                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={user.phone || ''}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        pattern="\d{10,11}"
                        title='Phone number must have 10-11 digits (without "-")'
                        onChange={e => handleInputChange(e)}
                    />
                </div>

                <div className='md:col-span-3 space-y-2'>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                    </label>
                    <input
                        type="text"
                        name="password"
                        id="password"
                        value={user.password || ''}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        minLength={8}
                        onChange={e => handleInputChange(e)}
                    />
                </div>

                <div className='md:col-span-3 space-y-2'>
                    <label htmlFor="dob" className="block text-sm font-medium leading-6 text-gray-900">
                        Date of Birth
                    </label>
                    <input
                        type="date"
                        name="dob"
                        id="dob"
                        value={user.dob}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        disabled
                    />
                </div>

                <div className='md:col-span-3 space-y-2'>
                    <label htmlFor="ic" className="block text-sm font-medium leading-6 text-gray-900">
                        IC Number
                    </label>
                    <input
                        type="digit"
                        name="ic"
                        id="ic"
                        value={user.ic}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        disabled
                    />
                </div>

                <div className='md:col-span-3 space-y-2'>
                    <label htmlFor="userType" className="block text-sm font-medium leading-6 text-gray-900">
                        User Type
                    </label>
                    <input
                        type="text"
                        id="userType"
                        name="userType"
                        value={user.userType}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        disabled
                    />
                </div>

                <div className='md:col-span-6 space-y-2'>
                    <label htmlFor="street" className="block text-sm font-medium leading-6 text-gray-900">
                        Street address
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="street"
                            id="street"
                            value={user.street}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            required
                            onChange={e => handleInputChange(e)}
                        />
                    </div>
                </div>

                <div className="md:col-span-2 space-y-2">
                    <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                        City
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="city"
                            id="city"
                            value={user.city}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            required
                            onChange={e => handleInputChange(e)}
                        />
                    </div>
                </div>

                <div className="md:col-span-2 space-y-2">
                    <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900">
                        State / Province
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="state"
                            id="state"
                            value={user.state}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            required
                            onChange={e => handleInputChange(e)}
                        />
                    </div>
                </div>

                <div className="md:col-span-2 space-y-2">
                    <label htmlFor="postcode" className="block text-sm font-medium leading-6 text-gray-900">
                        ZIP / Postal code
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="postcode"
                            id="postcode"
                            value={user.postcode}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            required
                            pattern="\d{5}"
                            title="ZIP/Postal code must have 5 digits"
                            onChange={e => handleInputChange(e)}
                        />
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={() => window.location.href = "manage-user"}>
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </form >
    )
}

const UpdateUser = () => {
    let userId = localStorage.getItem('userID')
    let userType = localStorage.getItem('userType')

    useEffect(() => {
        if (!userId || userType !== 'Admin') {
            window.location.href = '/login'
            localStorage.clear()
        }
    }
        , [])

    return (
        <div className='mx-auto w-5/6 my-5 md:px-20 space-y-5'>
            <Breadcrumb
                separator=">"
                items={[
                    {
                        title: 'Manage User Account',
                        href: '/admin/manage-user',
                    },
                    {
                        title: 'Update Account Information',
                    },
                ]}
            />
            <h2>Update User Information</h2>
            <UpdateForm />
        </div>
    )
}

export default UpdateUser
