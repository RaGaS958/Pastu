import { configureStore } from '@reduxjs/toolkit'
import pastes from './feature/pasteSlice'
export const store = configureStore({
  reducer: {
    paste: pastes,
  },
})