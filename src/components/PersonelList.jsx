import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import PersonelCard from "./PersonelCard";

function PersonelList(props) {
  const url = "https://randomuser.me/api/?results=28";

  const [persons, setPersons] = useState([]);
  const [error, setError] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const personPerPage = 4;
  const pagesVisited = pageNumber * personPerPage;

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("ada masalah");
      })
      .then((person) => setPersons(person.results))
      .catch((error) => setError(error.message));
  }, []);

  useEffect(() => {
    localStorage.setItem("saved-data", JSON.stringify(persons));
  }, []);
  if (error) return <h1>{error}</h1>;
  console.log("inilah", persons);

  const displayPerson = persons
    .slice(pagesVisited, pagesVisited + personPerPage)
    .map((data, index) => {
      return (
        <>
          <PersonelCard key={index} data={data} />
        </>
      );
    });

  const pageCount = Math.ceil(persons.length / personPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="flex-1">
      <div className="bg-gray-200 h-auto p-4 ">
        {/* Personel Page Header card */}
        <div className="p-2 bg-white rounded-xl flex flex-col md:flex-row items-center justify-between">
          <div>
            <div className="font-bold text-gadjian text-4xl">
              {" "}
              PERSONEL LIST
            </div>
            <div className=" text-gray-600 text-xl">List of all Personel</div>
          </div>

          <div className="w-full md:w-1/3 flex items-center space-x-4">
            <form class="relative w-3/4">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                />
              </svg>
              <input
                class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
                type="text"
                aria-label="Find Personnels"
                placeholder="Filter projects"
              />
            </form>

            <button className="flex items-center justify-between bg-gadjian text-white p-2 rounded-lg w-full ">
              ADD PERSONELS
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className="md:flex items-center m-2 justify-between">
          {displayPerson}
        </div>
        <div className="mx-auto w-96 mt-8">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLablel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"flex items-center justify-between"}
            breakLinkClassName={"mx-2"}
            pageClassName={"mx-2"}
            previousLinkClassName={
              "mx-2 p-2 border-2 border-blue-700 rounded-lg hover:bg-blue-700 hover:text-white"
            }
            nextLinkClassName={
              "mx-2 p-2 border-2 border-blue-700 rounded-lg hover:bg-blue-700 hover:text-white"
            }
            activeLinkClassName={"text-blue-700 underline"}
            disabledClassName={"opacity-50"}
          />
        </div>
        {/* {map(persons, (datas, index) => (
          <PersonelCard key={index} data={datas} />
        ))} */}
      </div>
    </div>
  );
}

export default PersonelList;
