// arrays

// let city0 = "Faisalabad";
// let city1 = "Lahore";
// let city3 = "Islamabad";



// array syntax 
let cities=["Faisalabad","Lahor","Islamabad","karachi","Multan","pashwar","koyta"];
// for(let i=0; i < cities.length; i++){
//     // console.log(cities[i])
// }


// let newCities=  cities.slice();
// console.log(newCities);
// newCities.splice(1, "shahkot","Mari","Jang","kashmir","Multan")
// Array methods
// add end of array(new value)
    // cities.push('karachi') 
// REMOVE endvalue of array
//    cities.pop();
// remove firstvalue of array
//    cities.shift()
// // add firstvalue of array(new value)
//      cities.unshift('Multan')
// add center of array
// console.log(cities);




// simple Alert
function simpleAlert(){
    alert("I'm an Alert")
}
// clear button
// const clearInput = () => {
//     document.getElementById('inputName').value =" "
// }

function clearInput(){
    document.getElementById('inputName').value =" "
}


function clear2(){
    document.getElementById('output').innerHTML='';
}

function printMyName(){
    let myName = document.getElementById('inputName').value;

    if(!myName){
        alert('Enter Name!');
        return;
    }
document.getElementById('output').innerHTML = myName
}
// print all citoes
function printAllCities(){
    document.getElementById('output').innerHTML='';
    for(let i=0; i < cities.length; i++){
        let num=i+1;
    document.getElementById('output').innerHTML += num+ ')'+ cities[i] +'<br>'


    }
}
// addcity
function addCity(){
    let city = document.getElementById('inputName').value;

    if(!city){
        alert('Enter New city');
        return
    }
    cities.push(city);
    document.getElementById('output').innerHTML=  '<span style="color:green; font-size=10 ">"'+ city +'"</span> has been sucessfuly added on your list please again print cities'

}
// table
function table(){
    // let number = document.getElementById('inputName').value
    let number = prompt('Enter number')
    // if (!number){
    //     alert('Please Enter a number');
    //     return
    // }
  let limit=+prompt('Give a ending Number')
  document.getElementById('output').innerHTML=''

  for (let index=1; index<=limit ; index++){
    document.getElementById('output').innerHTML += number + '*' + index + '=' + number * index  + '<br>';

  }


}

