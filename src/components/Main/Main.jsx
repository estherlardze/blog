import React, {useState} from 'react';
import './main.css';
import {MdOutlineKeyboardArrowDown, MdKeyboardArrowRight} from 'react-icons/md';
import {RiAddCircleLine, RiDeleteBinLine} from 'react-icons/ri';


const Main = () => {
  const [toggleIcon, setToggleIcon] = useState(true);
  const addBlock = ()=>{
    alert("hey")
  }

  return (
    <div className='acme__main'>
       <div className='acme__main-nav'></div>

       <div>
         <h4 class="acme__main-title">Making the world a better place</h4>
       </div>

       <div className='acme__main-content'>
       <article className='acme__main-content_ArticleA'>
        <div className='acme__main-content_text'>
        <p>{toggleIcon ? <MdOutlineKeyboardArrowDown  onClick={() => setToggleIcon(false)}/> 
        : <MdKeyboardArrowRight  onClick={() => setToggleIcon(true)}/>} <span>Text</span></p>
        
        <RiDeleteBinLine className='del__icon'/>
        </div>
        <div className='acme__main-content__blogA'>
            <h3>Making the world a better place</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi accusamus quidem, nam aut omnis reprehenderit harum. Blanditiis accusantium dolorem exercitationem rem, harum saepe perspiciatis!</p>
          </div>
        </article>

          <article className='acme__main-content_ArticleB'>
          <div className='acme__main-content_image'>
          <p> {toggleIcon ? <MdOutlineKeyboardArrowDown  onClick={() => setToggleIcon(false)}/> : <MdKeyboardArrowRight  onClick={() => setToggleIcon(true)}/>}
           <span>Image</span></p>
           <RiDeleteBinLine className='del__icon'/>
        </div>
   
             <div className='acme__main-content__blogB'>
             <div className="acme__main-content_upload-image">
               <p>Upload image</p>
               <label htmlFor="file"><input type="file"  id="file"/> <span>Upload a file</span> or drag and drop</label>
             </div>
             <div className="acme__main-content_upload-caption">
               <p>Caption</p>
             <input type="text" />  
             </div>
         </div>
          
          </article>
          <p className='acme__main-add_block' onClick={addBlock}><RiAddCircleLine />Add block</p>
     </div>
    </div>
  )
}

export default Main
