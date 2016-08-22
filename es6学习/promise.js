// promise 异步请求对象
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
    console.log(data);
},(error)=>{
    console.error(error);
})