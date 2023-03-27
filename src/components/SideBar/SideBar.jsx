import React from 'react';
import './sidebar.css';
import { AiOutlineHome }  from 'react-icons/ai';
import {FiFileText} from 'react-icons/fi';
import {VscCopy} from 'react-icons/vsc';
import {RxImage} from 'react-icons/rx';


const SideBar = () => {
  const Article = ({Icon, text}) => {
    return (
      <div>
         <p>{Icon}</p>
         <p>{text}</p>
      </div>
    )
  }
  
  return (
    <div className="acme__sidebar">
    <div className='acme__sidebar-top'>
     <h3>A</h3>
     <p>Acme corp</p>
     </div>
    <div className='acme__sidebar-content'>
    <Article Icon={<AiOutlineHome />} text = "Dashboard" className='text-muted'/>
    <Article Icon ={<FiFileText />} text = "Post" />
    <Article Icon = {<VscCopy/> } text = "Pages" />
    <Article Icon = { <RxImage />} text = "Media" />
    </div>
    </div>
  )
}

export default SideBar
