import Api from "@/services/Api.js"

export default{
    async View(Values){
        var Process=await Api().get(`view/${Values.Name}`)
        return Process

    }
}