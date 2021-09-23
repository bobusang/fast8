import React from "react";

function PersonelCard(props) {
  console.log("yaitu", props.data);
  return (
    <div>
      <div className="mt-4 p-4 bg-white rounded-xl">
        <div className="flex items-center justify-between p-2 border-b-2 border-gray-100">
          <div className="font-regular text-gray-600 ">
            Personel ID:
            <span className="text-gadjian">{props.data.id.value}</span>
          </div>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>

        <div className="flex md:block items-center justify-start">
          <img
            className="h-24 w-24 md:mx-auto rounded-full"
            alt="Person"
            src={props.data.picture.large}
          />
          <div>
            <div className="font-semibold text-sm">Name</div>
            <div className="text-md text-gray-800">
              {props.data.name.first} {props.data.name.last}
            </div>
            <div className="font-semibold text-sm">Telephone</div>
            <div className="text-md text-gray-800">{props.data.phone}</div>
            <div className="hidden md:block">
              <div className="font-semibold text-sm">Birthday</div>
              <div className="text-md text-gray-800">{props.data.dob.date}</div>
              <div className="font-semibold text-sm">Email</div>
              <div className="text-md text-gray-800">{props.data.email}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonelCard;
