import {create} from 'zustand'

export const themeGlobalState = create((set)=>({
    themeColor: localStorage.getItem("chat-theme") || "dark",
    

    setThemeColor: (themeColor)=> {
        localStorage.setItem("chat-theme",themeColor)
        set({ themeColor });}
}));