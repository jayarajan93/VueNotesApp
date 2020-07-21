import Api from '@/services/Api'

export default{
    async Delete(values)
    {
        var Process=await Api().delete(`delete/${values.Name}`)
        return Process
    }
}