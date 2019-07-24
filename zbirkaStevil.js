function myFunction() {
    var i;
    var j;
    var k;
    var totalSum = 0;
    var average;
    var arr = [];
    var arr = prompt(" Insert a number ").split(",");
    for (i = 0; i <9; i++) {
         arr.push(prompt(" Insert a number " + (i+2)));
    }
    document.getElementById("number").innerHTML = arr;
    
   for(j in arr) {
      totalSum += Number(arr[j]);
        var numCnt = arr.length;
        var average = totalSum/numCnt; 
    }
    document.getElementById("middle").innerHTML = average;
   
    for(k = 0; k > average; k++) {
        if(k > average) {
            console.log(k);
            document.getElementById("bigger").innerHTML = k;
        }
    }
}
 
   

