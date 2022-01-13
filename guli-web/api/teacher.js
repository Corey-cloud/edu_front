import request from '@/utils/request'

const api_name = '/edu/teacher'

export default{

    getList(){
        return request({
            url:`${api_name}/list`,
            method:'get'
        })
    },
    getById(teacherId){
        return request({
            url:`${api_name}/getListById/${teacherId}`,
            method:'get'
        })
    },
    getPageList(page, limit){
        return request({
            url:`${api_name}/pageWeb/${page}/${limit}`,
            method:'get'
        })
    }
}