export const getFirstName = (name:string)=>{
    const result = name.split(' ');
    const firstname = result[0];
    return firstname
}