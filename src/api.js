import axios from "axios";

export const  ApiCall =  async(url, method)=> {
 await axios[method](url).then((Response)=> {
    console.log(Response.data)
    return Response.data
})
}