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


const findAll = async(token:string) =>{

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

const findAllMyServices = async(token:string) =>{

    try{
        
        const request = await fetch(`${url}/service/my-services`,{
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

const create = async(body:Object) =>{

    try{
        
        const request = await fetch(`${url}/service`,{
            method: 'POST',
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

const hiring = async(body:Object) =>{

    try{
        
        const request = await fetch(`${url}/hiring`,{
            method: 'POST',
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

const disableEnableService = async(serviceId:string) =>{

    try{
        
        const request = await fetch(`${url}/service/${serviceId}`,{
            method: 'PUT',
            headers, 
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



const service = {findAll, create, hiring, findAllMyServices, disableEnableService}

export default service