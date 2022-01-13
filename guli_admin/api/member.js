import request from '@/utils/request'

const api_name = '/api/ucenter/wx'

export default{

    parseJwt(token){
        return request({
            url:`${api_name}/getMemberByToken/${token}`,
            method:'get'
        })
    }
}