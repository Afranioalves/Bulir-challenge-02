
if (process.env.NEXT_PUBLIC_API_URL === undefined) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
  }

const url = process.env.NEXT_PUBLIC_API_URL;

const findAll = async(token:string) =>{

    try{
        
        const request = await fetch(`${url}/hiring`,{
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

const  hiring = {findAll}
export default hiring
