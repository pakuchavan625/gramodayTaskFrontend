import React,{useEffect, useState} from 'react'
import "./Styles/contactDetail.css"
import Business from "../Component/Business"
import Modal from 'react-modal';
import axios from "axios"

const customStyles = {
    content: {
      top: '45%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius:"10px"
    },
  };
  

const ContactDetail = () => {
const [personInfo,setPersonInfo]=useState({})

useEffect(()=>{
    persondetails()
},[])


const persondetails=()=>{
    axios.get('https://api.gramoday.net:8082/v1/user/bySlug?profileSlug=mmtradingco').then(resp => {
     setPersonInfo(resp.data)
     console.log(setPersonInfo(resp.data))
     console.log(personInfo)
     console.log(resp)

}).catch(err=>err);
}

    const[modalIsOpen,setModalIsOpen]=useState(false)

    const handleContactPopup=()=>{
        setModalIsOpen(true)
    }

    function closeModal() {
        setModalIsOpen(false);
      }
  return (
    <div>
        <div className="contact-detail-container">
            <div className="proile-pc">
            <span class="fa-solid fa-user profile-icon"></span>
            </div>
            <div className="detail mx-4 ">
             <h1>{personInfo.name}</h1>
             <div>
                <span>{personInfo.loclevel3Name}</span>
                <span>{personInfo.loclevel2Name}</span>
             </div>
             <div className='mb-3'>{personInfo.language}</div>
             <div className="buttons" >
                <button className='btn  text-white mb-3 btn-buttons' onClick={handleContactPopup}>
                    <span class="fa-solid fa-address-book mx-2"></span>
                    <span>connect</span>
                </button>
                <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div className='popup-wrapper'>
            <div className='popup-heading'>
                <div className="popup-description mx-5">You need to download the Gramoday App for this</div>
                <div className='cancel-icon' onClick={closeModal}>X</div>
            </div>

            <div className='playStore'>
                <span>Do u want to go playStore?</span>
            </div>

            <div className="buttonForPlaystore">
                <button className='btn-playstore'>Yes</button>
                <button className='btn-playstore'>No</button>
            </div>
            
        </div>
      </Modal>
                <button className='btn text-white mx-3 mb-3 btn-buttons' onClick={handleContactPopup}>
                    <span class="fa-solid fa-phone mx-2"></span>
                    <span>contact</span>
                </button>
            </div>
            </div>
            <div className='share-button'>
            <button className='btn text-white mx-3 mb-3 btn-buttons'>
                    <span class="fa-brands fa-whatsapp mx-2"></span>
                    <span>share</span>
                </button>
            </div>
           
        </div>
        <Business/>
    </div>
  )
}

export default ContactDetail