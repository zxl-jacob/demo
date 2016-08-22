// promise 异步请求对象
/*
    @promise.prototype.then 可以调用另一个then方法。
        形成链式写法，then的返回结果传递给另外一个then方法作为回调
    @promise.prototype.catch() 处理上个回调的异常
    @promise.prototype.all()  将多个promise实例包装成Promise对象
    @promise.prototype.race()
    */
let getJson = (url)=>{

    let promise = new Promise((resolve,object)=>{
        let XmlhttpRequest = new XMLHttpRequest();
        let handle = ()=>{
            if(this.status === 200){
                resolve(this.response);
            }else{
                object(new Error(this.statusText));
            }
        }

        XmlhttpRequest.open('GET',url);

        XmlhttpRequest.onReadystateChange = handle;

        XmlhttpRequest.responseType = 'json';

        XmlhttpRequest.setRequestHeader("Accept","application/json");

        XmlhttpRequest.send();

    });

    return promise;
};
getJson('test.php').then((data)=>{
    return data;
},(error)=>{
    return error;
}).then((data)=>{
    console.log(data)
},(error)=>{
    console.log(error);
})