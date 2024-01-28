const ModalC = ({ phone, county }) => {
   return (
      <div
         className="modal fade"
         id="modalC"
         tabindex="-1"
         role="dialog"
         aria-labelledby="modalC"
         aria-hidden="true">
         <div className="modal-dialog" role="document">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title" id="modalC">
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

export default ModalC;
