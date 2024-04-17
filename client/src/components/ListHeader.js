import Modal from "./Modal";
import { useState } from "react";

// Destructure prop: listName
const ListHeader = ({listName}) => {

    const [showModal, setShowModal] = useState(false)

    //signOut functional expression
    const signOut = () =>{
      console.log('signout')
    }


    return (
      <div className="list-header">
        <h1>{listName}</h1>
        <div className="button-container">
          <button className="create" onClick={()=>setShowModal(true)}>Add new</button>
          <button className="signout" onClick={signOut}>Sign out</button>
        </div>
        {showModal && <Modal mode={'create'} setShowModal = {setShowModal}/>}
      </div>
    );
  }
  
  export default ListHeader;