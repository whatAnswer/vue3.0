import service from "../until/request"

// 获取seller
export function getSeller(data){
    console.log("9999999999999999");
  return service.request({
    method:'post',
    url:'/newlogin_pwd.jsp',
    applicationType: 'application/x-www-form-urlencoded',  //这一段表示，是post 请求，就将 请求参数转换成 JSON 格式
    data
  })
}