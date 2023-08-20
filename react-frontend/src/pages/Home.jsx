import React from 'react'

const Header_Container = () => (
    <section className='mt-24 px-14 md:mt-0 md:px-36 flex flex-row flex-wrap items-center w-full'>
        <div className='md:w-2/5 space-y-4'>
            <div>
                <h2>Empowering Futures</h2>
                <h1 className='text-[#efbd2e]'>One Loan at a Time</h1>
            </div>
            <p className='subtitle'>Your Pathway to Education with our Student Loan Platform. Unlock Opportunities Today.</p>
            <div className='space-x-3 pt-10'>
                <button className='btn-primary'>Apply Now</button>
                <button className='btn-secondary'>Learn More</button>
            </div>
        </div>

        <div className='md:w-3/5'>
            <img className='md:w-4/5 mx-auto' src="/src/assets/home-banner.png" alt="student-loan" />
        </div>
    </section>
);

export default function Home() {
    return (
        <div>
            <Header_Container />
        </div>
    )
}
