import Api from '@/services/Api'
import axios from 'axios'

export default{
    register(credentials){
        console.log("Test")
        console.log(credentials)
        console.log(Api())
        return Api().post('register',credentials)
    }
}