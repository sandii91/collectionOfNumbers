function myFunction() {
    var i;
    var j;
    var k;
    var totalSum = 0;
    var average;
    var arr2 = []
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
    
    	for(j in arr) {
		 if(arr[j] > average) {
           arr2.push(arr[j])
		 }
		}
    document.getElementById("up").innerHTML = arr2;
    }

 
   

