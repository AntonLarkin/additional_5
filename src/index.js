module.exports = function check(str, bracketsConfig) {
  // your solution
    str=str.split("");
    var del = false;
    var isop= true;
    while(!del&&isop){
        isop = false;
        for(var i=0;i<str.length;i++){
            if(str[i]=='('&& !del) {str.splice(i,1); del=true; isop=true;}
            if(str[i]==')'&& del) {str.splice(i,1); del=false;}

    }

     }var isop= true;
     while(!del&&isop){
        isop = false;
        for(var i=0;i<str.length;i++){
            if(str[i]=='['&& !del) {str.splice(i,1); del=true; isop=true;}
            if(str[i]==']'&& del) {str.splice(i,1); del=false;}

    }

     }var isop= true;
     while(!del&&isop){
        isop = false;
        for(var i=0;i<str.length;i++){
            if(str[i]=='{'&& !del) {str.splice(i,1); del=true; isop=true;}
            if(str[i]=='}'&& del) {str.splice(i,1); del=false;}

    }

     }var isop= true;
     while(!del&&isop){
        isop = false;
        for(var i=0;i<str.length;i++){
            if(str[i]=='|'&& !del) {str.splice(i,1); del=true; isop=true;}
            if(str[i]=='|'&& del) {str.splice(i,1); del=false;}

    }

     }
     if(str.length>0) return false;
     else return true;
   }
