import React from 'react'

const MainBanner = () => {
  return (
    <main className='flex flex-col lg:flex-row h-[92vh]'>
        <div className='flex flex-col justify-center items-center h-1/2 lg:h-full lg:w-1/2 bg-prussian-blue font-sans'>
            <h1 className='text-4xl'>Experience the Thrill</h1>
            <p className='text-lg mt-10'>Ride fast. Ride hard. Ride safe.</p>
        </div>

        <img className='' src='https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
    </main>
  )
}

export default MainBanner