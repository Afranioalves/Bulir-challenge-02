import { getCookie } from "cookies-next";

if (process.env.NEXT_PUBLIC_API_URL === undefined) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
  }

const url = process.env.NEXT_PUBLIC_API_URL;

export const findAll = async(token:string) =>{

    try{
        
        const request = await fetch(`${url}/service`,{
            method: 'GET',
            headers:{ Authorization: `Bearer ${token}`}
            
        });

        return{
            code:request.status,
            data: await request.json()
        }

    }catch(error){
        return {
            code:500,
            error:true
        }
    }
}


const service = {findAll}

export default service