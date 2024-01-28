import React from "react";

const ModalD = ({ phone, county }) => {
   return (
      <div
         style={{ border: "1px solid #46139f" }}
         className="modal fade"
         id="modalD"
         tabindex="-1"
         role="dialog"
         aria-labelledby="modalD"
         aria-hidden="true">
         <div className="modal-dialog" role="document">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title" id="modalD">
                     Modal C
                  </h5>
               </div>
               <div>
                  <p className="fs-4 px-3">
                     Phone: {phone} ({county})
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ModalD;
