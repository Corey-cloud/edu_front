import request from '@/utils/request'

const api_name = '/vod'

export default{

    getPlayAuth(videoSourceId){
        return request({
            url:`${api_name}/getPlayAuth/${videoSourceId}`,
            method:'get'
        })
    }
}