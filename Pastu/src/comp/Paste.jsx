import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { removePastes, resetToPaste } from '../redux/feature/pasteSlice';
import { NavLink } from 'react-router-dom'
import toast from 'react-hot-toast';
import {
  EmailShareButton,
  FacebookShareButton,
  GabShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  ThreadsShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  GabIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  ThreadsIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
  XIcon,
  BlueskyIcon,
} from "react-share";
const Paste = () => {
    const [search,setSearch]=useState("");
        const dispatch=useDispatch();
        const pastees =useSelector((state)=>
        state.paste.pastes);
      const filteredData=pastees.filter((paste)=> paste.title.
      toLowerCase().includes(search.toLowerCase()) );
 function handleCopy(){
  navigator.clipboard.writeText(pastees?.content)
  toast.success("Paste Copied",
    {
      style:
      {
          borderRadius: '10px',
      background: '#333',
      color: '#fff',

      },
       iconTheme: {
    primary: '#6666ea',
    secondary: '#ffffff',
       }
    }
      );
 }
 
  return (
    <div id='paste'>
      <div>
   <div className="topPastes">
    <h1>Pastes</h1>
    <button id='reset'onClick={()=>{
      toast.custom((t) => (
  <div id='resetlog'>
    <div className="resetmsg">
      Are you sure to remove all pastes ?
    </div>
    <button id='resetbut' onClick={() => {
      toast.dismiss(t.id)
      dispatch(resetToPaste());

    }}>
     remove
    </button>
    <button id="resetbut" onClick={
     ()=>{
      toast.dismiss(t.id)
     }

    } >
      Dismiss
    </button>
  </div>
),


);
    }
      
    } >
        RESET
    </button>
   </div>
   <div className="pasteSection">
    <input type="text"
    className='PasteSearch'
    placeholder='Search Paste'
    value={search}
    onChange={(e)=> setSearch(e.target.value)}
    />
    <div className="Allpastes">
    {
        filteredData.length > 0  ?(
      filteredData.map(
        (paste) =>{
          return ( 
              <div className="pastee" key={paste._id}>
        <div className="innerpastee">
            <h1>
              {paste.title}
            </h1>
            <div className="pasteopt">
           <NavLink to={`/pastes/View-Paste/?pasteID=${paste?._id}`} className='popt' >
              VIEW
            </NavLink>    
            <NavLink to={`/?pasteId=${paste?._id}`} className='popt' >
              EDIT
            </NavLink>   
            <button className='popt' onClick={
              () =>{
        dispatch(removePastes(paste._id));
              }
            }>
                REMOVE
            </button>
            <button className='popt' onClick={()=>{
          toast.custom((t) => (
  <div id='sharelog'>
    <div className="resetmsg">
      Share to
    </div>
    <WhatsappShareButton
          url={'https://web.whatsapp.com/'}
          title={paste.content}
          separator=":: "
          className="Demo__some-network__share-button"
        >
          <WhatsappIcon size={32} round 
          />
        </WhatsappShareButton>
    
  <br />
    <button id="resetbut" onClick={
     ()=>{
      toast.dismiss(t.id)
     }

    } >
      Dismiss
    </button>
  </div>
),


);

            }}>
              Share
            </button>
            <button className='popt' onClick={ ()=>{
             navigator.clipboard.writeText(paste?.content)
  toast.success("Paste Copied",
    {
      style:
      {
          borderRadius: '10px',
      background: '#333',
      color: '#fff',

      },
       iconTheme: {
    primary: '#6666ea',
    secondary: '#ffffff',
       }
    }
      );
    }

            }>
        
            Copy
            </button>

            </div>
            
             </div>
             <div className="date">
            Pasted at:  {paste.createdAt.substring(0,10)}
             </div>
          <div className="Contentpaste">
           {
             paste.content
           }
          </div>
      </div>
          )
        }
      )
  )
    : (
      
      <div id='noPaste'> NO PASTE</div>
      
    )
}
    
    </div>
   </div>
   </div>
    <footer>
        <div class="container">
            <p>&copy; 2025 Pastu. Made with ❤️ for the developer community.</p>
        </div>
    </footer>
    </div>
  )
}

export default Paste