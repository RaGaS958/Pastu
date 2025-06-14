import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  pastes: localStorage.getItem("pastes")
           ? JSON.parse(localStorage.getItem("pastes"))
           : [] 
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPaste: (state,action) => {
     const paste=action.payload;
      const index=state.pastes.findIndex((item)=>
      item.title === paste.title)
      if(index == -1)
      {
        state.pastes.push(paste);
  localStorage.setItem("pastes", JSON.stringify(state.pastes)); 
  
 toast.success("Paste Created",
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
         toast.error("Paste already exists",
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
    
    },
    updateToPaste: (state,action) => {
      const paste=action.payload;
      const index=state.pastes.findIndex((item)=>
      item._id === paste._id)
      if(index >=0)
      {
        state.pastes[index]=paste;
         localStorage.setItem("pastes", JSON.stringify(state.pastes)); 
 toast.success("Paste Updated",
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

    },
    resetToPaste: (state) => {
      state.pastes=[];
        localStorage.setItem("pastes", JSON.stringify(state.pastes)); 
 toast.success("All Pastes are Removed",
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

    },
    removePastes: (state,action) =>{
      const pasteId=action.payload;
      console.log(pasteId);
      const index =state.pastes.findIndex((item)=>
      item._id ===pasteId);
      if(index >= 0)
      {
        state.pastes.splice(index,1);
          localStorage.setItem("pastes", JSON.stringify(state.pastes)); 
 toast.success("Paste Removed",
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

    },

  },
})

export const { addToPaste, updateToPaste, resetToPaste, removePastes } = pasteSlice.actions

export default pasteSlice.reducer