import { useEffect, useState } from "react";
import ModalC from "./ModalC";

const ModalB = ({ contacts }) => {
   const [USContacts, setUSContacts] = useState([]);
   const [evenData, setEvenData] = useState(false);

   // FIlter only United States contacts
   const onlyUSContacts = contacts.filter(
      (item) => item.country.name === "United States"
   );

   // Initially show US contacts
   useEffect(() => {
      setUSContacts(onlyUSContacts);
   }, [contacts]);

   // Display contact base on only even checkbox
   useEffect(() => {
      if (evenData) {
         setUSContacts(onlyEvenUSContacts);
      } else {
         setUSContacts(onlyUSContacts);
      }
   }, [evenData]);

   // Only even data
   const onlyEvenUSContacts = onlyUSContacts.filter(
      (item) => item.id % 2 === 0
   );

   return (
      <div
         className="modal fade"
         id="modalB"
         tabindex="-1"
         role="dialog"
         aria-labelledby="modalB"
         aria-hidden="true">
         <div className="modal-dialog" role="document">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title" id="modalB">
                     Modal B
                  </h5>
               </div>
               <div>
                  <table className="table table-striped ">
                     <thead>
                        <tr>
                           <th scope="col">ID</th>
                           <th scope="col">Phone</th>
                           <th scope="col">Country</th>
                           <th scope="col">Action</th>
                        </tr>
                        {USContacts.map((item, index) => (
                           <tr key={index}>
                              <td scope="col">{item.id}</td>
                              <td scope="col">{item.phone}</td>
                              <td scope="col">{item.country.name}</td>
                              <td scope="col">
                                 <button
                                    data-target="#modalC"
                                    data-toggle="modal"
                                    className="btn btn-primary">
                                    Open
                                 </button>
                                 <ModalC
                                    phone={item.phone}
                                    county={item.country.name}
                                 />
                              </td>
                           </tr>
                        ))}
                     </thead>
                     <tbody></tbody>
                  </table>
               </div>
               <div className="d-flex align-items-center">
                  <div className="modal-footer justify-content-start">
                     <button
                        data-dismiss="modal"
                        data-target="#modalA"
                        data-toggle="modal"
                        type="button"
                        className="btn btn-secondary">
                        All Contracts
                     </button>
                     <button
                        data-dismiss="modal"
                        data-target="#modalB"
                        data-toggle="modal"
                        type="button"
                        className="btn btn-secondary">
                        US Contracts
                     </button>
                     <button
                        data-dismiss="modal"
                        type="button"
                        className="btn btn-primary">
                        Close
                     </button>
                  </div>
                  <div>
                     <input
                        onChange={() => {
                           setEvenData(!evenData);
                        }}
                        name="onlyEven"
                        type="checkbox"
                        id="onlyEven"
                     />
                     <label className="me-4" htmlFor="onlyEven">
                        Only Even
                     </label>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ModalB;
