class CommonDataManager {
   static myInstance = null;
   theme = "light";

   static getInstance(){
       if (CommonDataManager.myInstance == null){
           CommonDataManager.myInstance = new CommonDataManager();
       }
       return this.myInstance;
   }

   setTheme(res){
       this.theme = res;
   }
   getTheme(){
       return this.theme;
   }
}
export default CommonDataManager;
