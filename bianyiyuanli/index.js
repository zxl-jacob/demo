window.onload = function(){

    // 符号内部表示

    /*
    * primary : 表示元字符串
    *  btn: 表示解析词法按钮
    *  result_table : 解析结果表示在表格当中
    *  : 标识符含义
    * character : 符号内部表示
    *   function keyword(key)  ：得到字符的内部表示及其含义
    *   var array = [];  ：定义数组用来存放分割的所有字符
        var newarray = []; ：定义数组用来存放注释符
        var arr = []; 存档除注释外的
    */

    var character  = [
        [ 0 , '无定义', '$UND' ],
        [ 1 , '标识符', '$ID' ],
        [ 2 , '整数', '$INT' ],
        [ 3 , 'begin', '$BEGIN' ],
        [ 4 , 'end' , '$END' ],
        [ 5 , 'abs' , '$ABS' ],
        [ 6 , '/' , '$SLAH' ],
        [ 7 , '+' , '$PLUS' ],
        [ 8 , '-' , '$MINUS' ],
        [ 9 , '*' , '$STAR' ],
        [ 10 , '(', '$LPAR' ],
        [ 11 , ')' ,'$RPAR'],
    ];

    //获取按钮 
    var btn = document.getElementsByClassName('btn')[0];

    var result_table = document.getElementsByClassName('result_table')[0];
    // 绑定点击事件
    btn.onclick = function(){
        // 定义一个数组存放分割的数据
        var array = [];

        var newarray = [];

        var arr = [];
        // 获取编辑区域的字符串
        primary = document.getElementsByClassName('TextArea')[0].value;
        // 将/拆分为不同的数组
        var array = primary.split(' ');
        // 
        for (var i = array.length - 1; i >= 0; i--) {
            if (array[i] == '/*') {
                // 碰到左注释符就压入栈
                newarray.push(array[i]);

                var j = array.length - i-1;

                console.log(j);

                for (k = 0;k<j;k++){
                    //将右注释符及其注释符之间的内容压入栈 
                    if (array[i+k+1] == "*/") {

                        newarray.push(array[i+k+1]);

                        newarray.push(array[i+k]);

                    }
                }
            }
        }
        //打印输出注释栈
        console.log(newarray);
        // 在原数组内剔除对应的字符栈内容
        for (var n = array.length - 1; n >= 0; n--) {

            if (newarray.indexOf(array[n]) == -1) {
                // 得到最终的内容
                arr.push(array[n]);

            }

        }

        // 打印输出该最新的数据
        console.log(arr);

        for (var l = arr.length - 1; l >= 0; l--) {

            var result = keyword(arr[l]);
            // 输出当前字符的字符码、字符、字符所代表的含义
            console.log( result );
            /* start 将打印结果以表格的方式呈现 */
            var tr = document.createElement('tr');
            // 如果是符号内部表示，则显示在表格;如果不是，则不显
            if (result) {

                tr.innerHTML = "<tr><td>"+(arr.length-l)+"</td><td>"+result.code+" , "+result.str+"</td><td>"+result.meaning+" : "+result.str+"</td></tr>";
                result_table.appendChild(tr);
            }
            /* end */
        }
    }
    // 得到字符之间的内部表示和含义
    function keyword(key){

        if(key == "begin"){
            return {
                'code' : 3,
                'str' : key,
                'meaning':character[3][1]
            };
        }

        if (key == "+") {
            return {
                'code' : 7,
                'str' : key,
                'meaning':character[7][1]
            };
        }
        if (key == '-') {
            return {
                'code' : 8,
                'str' : key,
                'meaning':character[8][1]
            };
        }
        if (key == '*') {
            return {
                'code' : 9,
                'str' : key,
                'meaning':character[9][1]
            };
        }
        if (key == '(') {
            return {
                'code' : 10,
                'str' : key,
                'meaning':character[10][1]
            };
        }
        if (key == ')') {
            return {
                'code' : 11,
                'str' : key,
                'meaning':character[11][1]
            };
        }
        if (key == 'abs') {
            return {
                'code' : 5,
                'str' : key,
                'meaning':character[5][1]
            };
        }
        if (key == 'end') {
            return {
                'code' : 4,
                'str' : key,
                'meaning':character[4][1]
            };
        }
        if (typeof key == 'number') {
            return {
                'code' : 2,
                'str' : key,
                'meaning':character[2][1]
            };
        }

        if (key.match(/[A-Za-z_]+/ig)) {
            return {
                'code':1,
                'str' : key,
                'meaning' : character[1][1],
            }
        }
    }
}