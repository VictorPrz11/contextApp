import { create } from "zustand";

export interface ProfileState{
    email: string,
    name:string,

    changeProfile: (name:string, email:string)=> void
}
export const useProfileStore = create<ProfileState>()((set,get)=>({
    name: 'Victor Prz',
    email:'VicPrrrrrr@holamundo.com',
    changeProfile:(name:string, email:string)=>{

        set({name,email})
    }
}))