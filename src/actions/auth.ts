if (process.env.NEXT_PUBLIC_API_URL === undefined) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
  }

const url = process.env.NEXT_PUBLIC_API_URL;

const headers ={ 
    'Content-Type':'application/json',
    'Accept':'*/*'
}

export const signIn = async(body:object) =>{
    console.log(body);
    try{
        
        const request = await fetch(`${url}/sign-in`,{
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


const Authentication = {signIn}

export default Authentication