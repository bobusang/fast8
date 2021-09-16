import React, { useState } from 'react'
import SideMenu from './SideMenu'


function NavBar(props) {


    return (
        <div className="flex space-x-2 items-center justify-end p-2 h-16 shadow-md">
            <div onClick={props.toggle}>
                <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-700 h-8 w-8 md:hidden" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>
            </div>
            
            <div className="flex-1 md:hidden">

            <img 
            className="h-10"
            src="https://www.zahironline.com/en/wp-content/uploads/2016/09/gadjian-logo-zahir-online-337x150.png" />
            </div>
            
            
            <div className="hidden sm:block">
                Hallo, <span className="text-green-500">Gadjian User</span>
            </div>
            <img
            className=" h-12 h-12 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9yHRs1BHzlXYAjYkkopXybh-XeIyaZWFN1xpLyMq_5Nd9XbAaILxQPWbOM7fNmXZT6PE&usqp=CAU" />
        </div>
    )
}

export default NavBar
