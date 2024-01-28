import React, { useEffect, useState } from "react";

const Problem1 = () => {
   const [show, setShow] = useState("all");
   const [nameList, setNameList] = useState([]);
   const [inputValue, setInputValue] = useState({});
   const [filterData, setFilterData] = useState([]);

   console.log(filterData);
   const handleClick = (val) => {
      setShow(val);
   };

   // Handle input field change
   const handleInputChange = (e) => {
      const { name, value } = e.target;

      // Set values in a state
      setInputValue((prev) => ({ ...prev, [name]: value }));
   };

   // Handle submit
   const handleSubmit = (e) => {
      e.preventDefault();
      setNameList((prev) => [...prev, inputValue]);
   };

   // Filter name list by status
   useEffect(() => {
      const filteredNameList = nameList.filter((item) => item.status === show);

      if (!filteredNameList.length) {
         setFilterData(nameList);
      } else {
         setFilterData(filteredNameList);
      }
   }, [show, nameList]);

   return (
      <div className="container">
         <div className="row justify-content-center mt-5">
            <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
            <div className="col-6 ">
               <form
                  onSubmit={handleSubmit}
                  className="row gy-2 gx-3 align-items-center mb-4">
                  <div className="col-auto">
                     <input
                        onChange={handleInputChange}
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                     />
                  </div>
                  <div className="col-auto">
                     <input
                        onChange={handleInputChange}
                        type="text"
                        name="status"
                        className="form-control"
                        placeholder="Status"
                     />
                  </div>
                  <div className="col-auto">
                     <button type="submit" className="btn btn-primary">
                        Submit
                     </button>
                  </div>
               </form>
            </div>
            <div className="col-8">
               <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item">
                     <button
                        className={`nav-link ${show === "all" && "active"}`}
                        type="button"
                        onClick={() => handleClick("all")}>
                        All
                     </button>
                  </li>
                  <li className="nav-item">
                     <button
                        className={`nav-link ${show === "active" && "active"}`}
                        type="button"
                        onClick={() => handleClick("active")}>
                        Active
                     </button>
                  </li>
                  <li className="nav-item">
                     <button
                        className={`nav-link ${
                           show === "completed" && "active"
                        }`}
                        type="button"
                        onClick={() => handleClick("completed")}>
                        Completed
                     </button>
                  </li>
               </ul>
               <div className="tab-content"></div>
               <table className="table table-striped ">
                  <thead>
                     <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Status</th>
                     </tr>
                     {filterData.map((item, index) => (
                        <tr key={index}>
                           <td scope="col">{item.name}</td>
                           <td scope="col">{item.status}</td>
                        </tr>
                     ))}
                  </thead>
                  <tbody></tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default Problem1;
