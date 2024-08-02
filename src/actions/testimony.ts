
if (process.env.NEXT_PUBLIC_API_URL_TESIMONY === undefined) {
    throw new Error("NEXT_PUBLIC_API_URL_TESIMONY is not defined");
  }

const url = process.env.NEXT_PUBLIC_API_URL_TESIMONY;

export const getFakeTestimony = async() =>{

    try{
        
        const request = await fetch(`${url}/?results=10`);

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
