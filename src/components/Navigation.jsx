import React, { useState } from "react";
import PersonelList from "./PersonelList";

function Navigation() {
  const [isMobile, setIsMobile] = useState(false);

  const handleClick = () => {
    setIsMobile(!isMobile);
    console.log(isMobile);
  };

  return (
    <div>
      <main class="flex flex-col h-screen">
        <div class="flex flex-1 overflow-hidden">
          {/* SideNav */}
          <div
            className={`${
              isMobile
                ? "absolute inset-0 opacity-100 "
                : "hidden -translate-x-full opacity-0 md:opacity-100 md:translate-x-0"
            } z-50 md:flex bg-gray-100 transform bg-white shadow  p-4 transition duration-300 ease-in-out`}
          >
            <div className="">
              <button
                onClick={handleClick}
                className="md:hidden bg-red-100 right-4 top-4 absolute"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <img
                alt="gadjian logo"
                className="max-h-16 mt-10"
                src="https://www.zahironline.com/wp-content/plugins/phastpress/phast.php?service=images&src=https%3A%2F%2Fwww.zahironline.com%2Fwp-content%2Fuploads%2F2016%2F09%2Fgadjian-logo-zahir-online-337x150.png&cacheMarker=1594306559-6717&token=ac5f808b3d7d91d2"
              />
              <div className="space-y-2 my-8">
                <div className="flex cursor-pointer items-center p-2 hover:bg-blue-100 hover:opacity-100 hover:text-green-600 rounded-xl opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  Beranda
                </div>
                <div className="flex cursor-pointer items-center p-2 hover:bg-blue-100 hover:opacity-100 hover:text-green-600 rounded-xl opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                  Personel List
                </div>
                <div className="flex cursor-pointer items-center p-2 hover:bg-blue-100 hover:opacity-100 hover:text-green-600 rounded-xl opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Daily Attendance
                </div>
              </div>
            </div>
          </div>

          {/* Header */}
          <div class="flex flex-1 flex-col">
            <div className="flex items-center w-full bg-white shadow-lg h-20 px-4">
              <button className="md:hidden" onClick={handleClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="md:hidden">
                <img
                  alt="gadjian logo"
                  className="max-h-12"
                  src="https://www.zahironline.com/wp-content/plugins/phastpress/phast.php?service=images&src=https%3A%2F%2Fwww.zahironline.com%2Fwp-content%2Fuploads%2F2016%2F09%2Fgadjian-logo-zahir-online-337x150.png&cacheMarker=1594306559-6717&token=ac5f808b3d7d91d2"
                />
              </div>
              <div className="flex-grow">
                <div className="flex items-center space-x-2">
                  <div className="ml-auto">
                    Hallo, <span className="text-green-600">Gadjian User</span>
                  </div>
                  <img
                    alt="profile pic"
                    className="h-14 w-14 object-cover rounded-full"
                    src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-1 overflow-y-auto">
              {/* Contents */}
              <PersonelList />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Navigation;
