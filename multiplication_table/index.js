// 9*9乘法表

for(var i=1;i<10;i++){
    for(var j=1;j<=i;j++){
        //console.log(`${i}*${j}=${i*j}`);
        document.write(`${i}*${j}=${i*j} &nbsp;&nbsp;&nbsp;&nbsp;`);
    }
    document.write("<br/>");
}