import React from 'react';
import author  from '../../asset/tm7.jpg';
import  './Rightbar.css';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';
import {RiAddCircleLine, RiCloseFill} from 'react-icons/ri';

function Rightbar() {
  return (
    <div className='acme__rightbar'>
      <div className='acme__rightbar-nav'></div>
      <div className='acme__rightbar-save'>
      <p className='button'>save <span><MdOutlineKeyboardArrowDown /></span></p>
     </div>
     <div className="acme_rightbar-author">
      <h5>Author</h5>
       <div className="acme__rightbar-author__image">
        <img src={author} alt="author"/>
        <p>name</p>
       </div>
     </div>
      <div className='acme__righrbar-post'>
        <h5>Post Date</h5>
        <div className="acme__rightbar-date">
          <input type="date" />
          <input type="time" />
        </div>
       
      </div>
      <div className="acme__rightbar-category">
        <h5>category</h5>
        <div>
        <p>Big data <RiCloseFill /></p>
        <RiAddCircleLine />
        </div>
      </div>
    </div>
  )
}

export default Rightbar
