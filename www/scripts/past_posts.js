function getCount(parent){
  var relevantChildren = 0;
  var children = parent.childNodes.length;
  for(var i=0; i < children; i++){
    if(parent.childNodes[i].nodeType != 3){
      relevantChildren += getCount(parent.childNodes[i]);
      relevantChildren++;
    }
  }
  return relevantChildren;
}

$(document).ready(function() {
//TODO: change to for loop
  //for now these 3 lines have to be copy and pasted and edited for each month, should probably figure out a for loop at some point
  const arr = [
    'may',
    'june',
  ]
  for(let x in arr) {
    var ele = document.getElementById(arr[x]);
    // console.log("x" + arr[x]);
    // console.log("ele" + ele);
    var count1 = getCount(ele.parentNode, true) - 2;
    // console.log("c1" + count1);
    ele.innerHTML = ele.innerHTML + " (" + count1 + ")";
  }
  // //may
  // var maycount1 = document.getElementById("may");
  // var maycount2 = getCount(maycount1.parentNode, true) - 2;
  // maycount1.innerHTML = maycount1.innerHTML + " (" + maycount2 + ")";
  // //June
  // var junecount1 = document.getElementById("june");
  // var junecount2 = getCount(junecount1.parentNode, true) - 2;
  // document.getElementById("june").innerHTML = document.getElementById("june").innerHTML + " (" + junecount2 + ")";
});

/* references:
https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode
https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children
https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType */
