var iterativeLog = (array) =>{
array.forEach(function(element,index){
  console.log(`${index}: ${element}`)
});
}

var iterate = (callback) => { //so the callback is the name of the argument you pass to iterate and its datatype is function
  var arr = ["Clothes", "Makeup", "Perfume"]
  arr.forEach(callback) //the forEach function expects to receive a function as an argument and it will call that function on each element of the array.
  return arr
}

//when you see callback that's a signal that we're talking about a function that's passed as an argument to another function

var doToArray = (array, callback) => {
  array.forEach(callback)
}
