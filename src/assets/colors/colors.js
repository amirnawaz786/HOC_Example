import CommonDataManager from "../../Utiils/Singleton";
const theme = CommonDataManager.getInstance().getTheme();
let light = "light";
 const Colors  =  {
    darkTheme :{
        TEXT_COLOR :  "#ffffff",
        BACKGROUND_COLOR : "#040404",
    },
     lightTheme:{
             TEXT_COLOR :  "#000000" ,
             BACKGROUND_COLOR :  "#ffffff",
     }

};
 export default Colors;


