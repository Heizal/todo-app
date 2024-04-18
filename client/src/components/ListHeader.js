import Modal from "./Modal";
import { useState } from "react";
import {useCookies} from 'react-cookie'

// Destructure prop: listName
const ListHeader = ({listName, getData}) => {
    const [cookies, setCookie, removeCookie] = useCookies(null)
    const [showModal, setShowModal] = useState(false)

    //signOut functional expression
    const signOut = () =>{
      console.log('signout')
      removeCookie('Email')
      removeCookie('AuthToken')
      window.location.reload()
    }


    return (
      <div className="list-header">
        <h1>{listName}</h1>
        <div className="button-container">
          <button className="create" onClick={()=>setShowModal(true)}>Add new</button>
          <button className="signout" onClick={signOut}>Sign out</button>
        </div>
        {showModal && <Modal mode={'create'} setShowModal = {setShowModal} getData={getData}/>}
      </div>
    );
  }
  
  export default ListHeader;