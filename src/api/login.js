import http from '../utils/http';

export function getLogin() {
  return new Promise((resolve, reject) => {
    http("get",'/login').then(res => {
      resolve (res);
    },error => {
      console.log("网络异常~",error);
      reject(error)
    })
  }) 
}