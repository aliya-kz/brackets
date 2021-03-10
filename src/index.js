module.exports = function check(str, bracketsConfig) {
  
 while (str.length>0) {
var temp=str;
     
  for (var k=0;k<bracketsConfig.length;k++) {
    var a=bracketsConfig[k];
    
   for (var t=0;t<str.length; t++)
  {      var ind=str.indexOf(a[0],t);
        var ind2=str.indexOf(a[1],t+1);
      if(ind2==ind+1)  {
     str=str.substring(0,ind)+str.substring(ind+1,ind2)+str.substring(ind2+1);  
           
    
} 
 } 
}
if (temp==str) {break;}
 } 
  
if (str.length>0) {return false;}
if (str.length==0) {return true;}
} 



