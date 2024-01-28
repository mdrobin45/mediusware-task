import ModalC from "./ModalC";

const ModalA = ({ contacts, evenOnly, setEvenOnly }) => {
   return (
      <div
         className="modal fade"
         id="modalA"
         tabindex="-1"
         role="dialog"
         aria-labelledby="modalA"
         aria-hidden="true">
         <div className="modal-dialog" role="document">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title" id="modalA">
                     Modal A
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
                        {contacts.map((item, index) => (
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
                           setEvenOnly(!evenOnly);
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

export default ModalA;
