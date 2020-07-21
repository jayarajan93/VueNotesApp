import Api from '@/services/Api'

export default{
   async Add(values)
    {
    
        var Process=await Api().post("Add",values)
        return Process
    }
}
