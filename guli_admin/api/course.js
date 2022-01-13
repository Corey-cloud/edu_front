import request from '@/utils/request'

const api_name = '/edu/course'

export default{

    getPageList(page, limit){
        return request({
            url:`${api_name}/pageWeb/${page}/${limit}`,
            method:'get'
        })
    },
    getCourseInfoWebByCourseId(courseId){
        return request({
            url:`${api_name}/courseInfoWeb/${courseId}`,
            method:'get'
        })
    }
}