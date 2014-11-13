function LOG(x){console.log(x);}
function str(x){JSON.stringify(x);}
function $E(x){return document.getElementById(x.substr(1))}
function $U(x){return x===undefined;}
function $HTML(x,y){ if ($U(y)) return $E(x).innerHTML; else $E(x).innerHTML=y;}
