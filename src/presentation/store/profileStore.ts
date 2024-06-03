import { create } from "zustand";

export interface ProfileState{
    email: string,
    name:string,
}
export const useProfileStore = create<ProfileState>()((set,get)=>({
    name: 'Victor Prz',
    email:'VicPrrrrrr@holamundo.com'
}))