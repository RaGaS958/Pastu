import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSearchParams } from "react-router-dom"
import { useSelector } from "react-redux"
import toast from 'react-hot-toast';


const ViewPaste = () => {
    const [searchParams,setSearchParams]=useSearchParams();
      const pastees =useSelector((state)=>
            state.paste.pastes);
        const pasteId=searchParams.get("pasteID");
        console.log(pasteId);   
            const paste=pastees.find((p)=>
                p._id === pasteId);    
        
  return (
    <div id='view'>
   <div className="innerview">
     <h1>
        {paste.title}
    </h1>
    <div className="dateview">
                    Pasted at:  {paste.createdAt.substring(0,10)}

    </div>
    <textarea 
    id="contentview"
    readOnly
    type='text'
    value={ paste.content}
    />
  <button id='back' onClick={ ()=>{
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





  <NavLink to={`/?pasteId=${pasteId}`} id='back' >
              EDIT
            </NavLink>  

    <NavLink to='/pastes' id='back' >
     BACK 
    </NavLink>
       
    </div>
    
    <footer>
        <div class="container">
            <p>&copy; 2025 Pastu. Made with ❤️ for the developer community.</p>
        </div>
    </footer>

    </div>
  )
}

export default ViewPaste