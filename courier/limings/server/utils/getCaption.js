module.exports = function(obj,state) {
    var index=obj.lastIndexOf("\-");
    if(state==0){
        obj=obj.substring(0,index);
    }else {
        obj=obj.substring(index+1,obj.length);
    }
    return obj;
}
// var data = 'aaa-bbb'
//截取符号前面部分
// getCaption(data,0)  //输出aaa
//截取符号后面部分
// getCaption(data,1)  //输出bbb
