import axios from "axios";
import React, { useEffect, useState } from "react";
import ModalA from "./Modals/ModalA";
import ModalB from "./Modals/ModalB";

const Problem2 = () => {
   const [contacts, setContacts] = useState([]);
   const [displayContacts, setDisplayContacts] = useState([]);
   const [isOnlyEven, setIsOnlyEven] = useState(false);

   // Fetch all contacts
   useEffect(() => {
      axios
         .get("https://contact.mediusware.com/api/contacts/")
         .then((res) => setContacts(res.data.results));
   }, []);

   // Only even data
   const onlyEvenContacts = contacts.filter((item) => item.id % 2 === 0);

   // Initially show all contacts
   useEffect(() => {
      setDisplayContacts(contacts);
   }, [contacts]);

   // Display contact base on only even checkbox
   useEffect(() => {
      if (isOnlyEven) {
         setDisplayContacts(onlyEvenContacts);
      } else {
         setDisplayContacts(contacts);
      }
   }, [isOnlyEven]);

   return (
      <div className="container">
         <div className="row justify-content-center mt-5">
            <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

            <div className="d-flex justify-content-center gap-3">
               <button
                  data-target="#modalA"
                  data-toggle="modal"
                  className="btn btn-lg btn-outline-primary"
                  type="button">
                  All Contacts
               </button>
               <button
                  data-target="#modalB"
                  data-toggle="modal"
                  className="btn btn-lg btn-outline-warning"
                  type="button">
                  US Contacts
               </button>
            </div>
            <ModalA
               contacts={displayContacts}
               evenOnly={isOnlyEven}
               setEvenOnly={setIsOnlyEven}
            />
            <ModalB contacts={contacts} />
         </div>
      </div>
   );
};

export default Problem2;
