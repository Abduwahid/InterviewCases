/*
		名企笔试：京东2015校招在线笔试题(人口问题)

	在一个世世代代都重男轻女的村庄里，村长决定颁布一条法律：

	村子里没有生育出儿子的夫妻可以一直生育直到生出儿子为止

	假设现在村子上的男女比例是1：1，这条法律颁布之后的若干年后村子的男女比例将会（）

	A. 男的多
	B. 女的多
	C. 一样多
	D. 不能确定

	【来自】微信公众好：算法爱好者 

	Author:Abduwahid
	Date :2016-12-30
 */
/*普通级别*/
var coupleCount = 1000;
var all=[];
for(var i=0;i<coupleCount;i++){
	var arrTemp =['1','0',Math.random()>0.5?'0':'1'];
	while(arrTemp[2].indexOf('1') == -1){
		arrTemp[2] += Math.random()>0.5?'0':'1';
	}
	all.push(arrTemp); 
}
var M=0,F=0,str=all.toString();
for(var j=0;j<str.length;j++){
	str[j]=='1'&&M++;
	str[j]=='0'&&F++;
}
console.log('假设该村庄有'+coupleCount+'对夫妻，最终该村有男：'+M+"  女："+F);
/*精简优化后的代码*/
var n=1000;/*假设该村庄有n对夫妻*/
((t)=>{
    var All=[],M=0,F=0;
    for(var i=0;i<t;i++){
        var temp=['1','0',Math.random()>0.5?'0':'1'];
        while( !temp[2].match('1') ){temp[2]+=Math.random()>0.5?'0':'1';}
        All.push(temp);
    }
    All.forEach((v)=>{
        v.forEach((j)=>{j=='1'?M+=1:F+=1});
    });
    console.log('假设该村庄有'+t+'对夫妻，最终该村有男：'+M+"  女："+F);
})(n)
