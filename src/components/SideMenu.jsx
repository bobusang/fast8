import React, {useState}from 'react'
import MainPage from './MainPage';

function SideMenu(props) {
    const [isToggle, setIsToggle] = useState(false);

    const handleClick = () => {
        setIsToggle(!isToggle)
        console.log(isToggle)
    }
    

    return (
        <div className="flex">
            
            <div className={`bg-white z-50 h-screen w-60 absolute inset-y-0 left-0 transform transition duraton-200 ease-in-out md:relative md:translate-x-0 ${isToggle ? " -translate-x-full" : ""}`}>
                <img 
                className="w-40 mx-auto"
                src="https://media-exp1.licdn.com/dms/image/C4E0BAQGour1ZkDHbZQ/company-logo_200_200/0/1519890909345?e=2159024400&v=beta&t=7QIh13cURjQwdLj6HnQJtpbXiA7Sx6RlFAGmLmTRLHo"/>
                
                {/* Menu */}

                <div className="space-y-2">
                    <div
                    className="px-8 space-x-4 flex flex-wrap items-center jsutify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        <div className="text-black font-semibold text-sm">Beranda</div>
                    </div>
                
                    <div
                    className="text-green-500 px-8 space-x-4 flex flex-wrap items-center jsutify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class=" h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                        <div className=" font-semibold text-sm">Personal List</div>
                    </div>

                    <div
                    className="px-8 space-x-4 flex flex-wrap items-center jsutify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>
                        <div className="text-black font-semibold text-sm">Daily Attendance</div>
                    </div>
                </div>
            </div>
            

            

            
            {/* Top Navigation */}
            <div className="flex-1">
            
            <div className=
            {`
            ${isToggle ? "hidden" : "absolute"}
            
            top-0
            w-screen
            h-screen
            backdrop-filter
            backdrop-blur-sm
            transition duration-200
            
            `}
            
            onClick={handleClick}>
            </div>

                <div className="flex space-x-2 items-center justify-end p-2 h-16 shadow-md">
                <button className="hover:bg-gray-100" onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-700 h-8 w-8 md:hidden" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                    </svg>
                </button>
                
                <div className="flex-1 md:hidden">

                <img 
                className="h-10"
                src="https://www.zahironline.com/en/wp-content/uploads/2016/09/gadjian-logo-zahir-online-337x150.png" />
                </div>
                
                
                <div className="hidden sm:block">
                    Hallo, <span className="text-green-500">Gadjian User</span>
                </div>
                <img
                onClick={handleClick}
                className=" h-12 h-12 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9yHRs1BHzlXYAjYkkopXybh-XeIyaZWFN1xpLyMq_5Nd9XbAaILxQPWbOM7fNmXZT6PE&usqp=CAU" />
                </div>

                <MainPage />
            </div>

            

        </div>
    )
}

export default SideMenu
