/*
    @describe：按需加载想加载的css文件和js文件
    @usage method : let source = new loadSource(arg) arg 是数组，分别存放想要加载的样式或者脚本 
    @source._getFilesType();
    @author:zhaoxinglai
*/
class loadSource {
    //初始化loadScource
    constructor(arrSource){
        this.Sourse = typeof arrSource==='object'?arrSource:[];
    }
    //创建空白区
    _DocumentFragment(){
        return document.createDocumentFragment();
    }
    //追加节点
    _appendChild(fragment){
        document.getElementsByTagName("head")[0].appendChild(fragment);
    }

    //处理样式文件和script脚本
    _getFilesType(){
        let len=this.Sourse.length,documentfragent;
        if (len<0) {return false;}
        for(let item=0 ; item < len;item++){
        
            // 得到文件后缀名
            let filessuffix = len[item].match(/\.[^\.]+$/)[0];
            switch(filessuffix){
                case ".css":
                    let link;
                    link = document.createElement("link");
                    link.rel = "stylesheet";
                    link.type = "text/css";
                    link.href = len[item];
                    documentfragent = this._DocumentFragment().appendChild(link);
                    break;
                default:
                    let script;
                    script = document.createElement('script');
                    script.type = "text/javascript";
                    script.src = len[item];
                    documentfragent = this._DocumentFragment().appendChild(script);
                    break;
            }
        }
        this._appendChild(documentfragent);
    }
}