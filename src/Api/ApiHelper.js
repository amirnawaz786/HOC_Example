import {fetch} from "react-native/Libraries/Network/fetch";

class ApiHelper {

    getAPi = (url,body,callback) =>{
          fetch(url)
              .then((response)=>response.json())
              .then((response)=>{
                  callback(response);
              })
    }
    postApi = (url,body,callback) =>{

    }

}
const apiHelper = new ApiHelper();
export default apiHelper;
