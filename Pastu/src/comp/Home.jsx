import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom"
import { useDispatch,useSelector } from "react-redux"
import { addToPaste, updateToPaste } from '../redux/feature/pasteSlice';
import toast from 'react-hot-toast';

const Home = () => {
    const [title,settitle]=useState('');
    const [code,setcode]=useState('');
    const [searchParams,setSearchParams]=useSearchParams();
    const pasteId=searchParams.get("pasteId");
      const pastees =useSelector((state)=>
        state.paste.pastes);
    const dispatch=useDispatch();
    function handleTitle(e){
        settitle(e.target.value);
    }
      function handlecode(e){
        setcode(e.target.value);
    }
    console.log(pasteId);
        useEffect(() =>{
        if(pasteId)
        {
          const paste=pastees.find((item)=>
            item._id === pasteId)
          console.log(paste);
            settitle(paste.title);
        setcode(paste.content);
        
        
        }
      },[pasteId])
    function createPaste()
    {       
      if(!title)
      {
      toast.error("Enter the Title",
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
      else
      {
         const paste={
      title: title,
      content: code,
      _id: pasteId || Date.now().toString(2),
      createdAt : new Date().toISOString(),
        
      }
      
  
      
      if(pasteId)
      {
        dispatch(updateToPaste(paste));
        setcode("");
                  setSearchParams("");
               settitle("");
      }
      else{
   dispatch(addToPaste(paste));
      
         const index=pastees.findIndex((item)=>
      item.title === paste.title)
         if(index == -1)
         {
            setcode("");
                  setSearchParams("");
               settitle("");
         }
         else
         {
          settitle("");
         }
        }
      }
    }
  return (
    <div id='home'>
        <div className="code">
        <textarea 
        id='codeinp'
        type="text"
         placeholder='Enter code here'
          value={code}
          onChange={handlecode}
          />
          <div className="title">
                 <input 
        id='titleinp'
        type="text"
         placeholder='Enter title here'
          value={title}
          onChange={handleTitle}
          />
          <button className='savepaste' onClick={createPaste}>
            {
              pasteId ? "Update Paste" : "Create Paste"
            }
          </button>
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

export default Home