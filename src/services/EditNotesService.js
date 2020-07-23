import Api from "@/services/Api.js"
export default{
    async Edit(values){
        
        var Process=await Api().put('update',values)
        return Process
    }
}