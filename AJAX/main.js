myButton.addEventListener('click', (e) => {
    let request = new XMLHttpRequest()
    request.open('GET', 'http://jack.com:8002/xxx')//初始化 配置request
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            console.log('请求响应都完成了')
            if(request.status >= 200 && request.status < 300){
                console.log('说明请求成功')
                console.log(typeof request.responseText)
                console.log(request.responseText)
                let string = request.responseText
                //把符合JSON语法的字符串
                //转 换 成 JS 对 应 的 值
                let object = window.JSON.parse(string)
                console.log(object)
                console.log(typeof object)
            }else if(request.status>= 400){
                console.log('说明请求失败')
            }
        }
    }
    request.send()
})

// myButton.addEventListener('click', (e) => {
//     let request = new XMLHttpRequest()
//     request.onreadystatechange = (e)=>{
//         if(request.readyState === 4){
//             console.log('请求响应都完成了')

//             if(request.status >= 200 && request.status < 300){
//                 console.log('说明请求成功')
//                 console.log(request.responseText)
//                 let parser = new DOMParser();
//                 let xmlDoc = parser.parseFromString(request.responseText,"text/xml");
//                 let c = xmlDoc.getElementsByTagName('content')[0].textContent
//                 console.log(c)
//             }else if(request.status>= 400){
//                 console.log('说明请求失败')
//             }
//         }
//     }
//     request.open('GET', '/xxx')//初始化
//     request.send()
// })