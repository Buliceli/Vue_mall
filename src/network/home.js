import {request,request2} from './request'

export function getHomeMutidata(){
   return request({
       url: '/home/multidata'
   })
}

export function getBottomData(type){
    return request2({
        params: {
            a: 'list',
            c: 'data',
            type: type
        }
    })
}