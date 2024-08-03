import { getCookie } from "cookies-next";

if (process.env.NEXT_PUBLIC_API_URL === undefined) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
  }

const url = process.env.NEXT_PUBLIC_API_URL;

const token = getCookie('TOKEN')

const headers ={ 
    'Content-Type':'application/json',
    'Accept':'*/*',
    Authorization: `Bearer ${token}`
}

const seeBalance = async(token:string) =>{

    try{
        
        const request = await fetch(`${url}/account`,{
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

const topUpWalletBalance = async(body:object) =>{

    try{
        
        const request = await fetch(`${url}/account`,{
            method: 'PUT',
            headers,
            body: JSON.stringify(body)
            
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

const  wallet = {seeBalance,  topUpWalletBalance}
export default wallet
