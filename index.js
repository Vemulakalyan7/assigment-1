//12. Write program to call the getUsers then print users using callback, promise.
 //call back
function getUser(fun){
    console.log("getting user data")
    fun()
    setTimeout(function(){
        
        user={
            name:"kalyan",
            age:23
        }
        fun(user)
        
 },1000)


    }
   function printuser(user){
        console.log("printing user data",user)
    }

 getUser(printuser)  
  //promise
  function getUser(){

    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(user={
                id:121,
                name:"kalyan"
            })
        })

    })
  }     
 
function printuser(user){
    console.log("printing user data",user)
} 
getUser().then(function(data){
    console.log("resolved",data)
    printuser(data)
}).catch(function(){
    console.log("server down")
})

//13. What is call apply bind explain this with the help of example.
 // call--call() method,you write a method that can be used in different object,arrugument taken as seperatly
 // apply--apply()method,it is similary as call method but arrugumets takes as array formate
 // bind--bind()method,an object can borrow a method from another object
 //example-
  
 
 var user={
    name:"kalyan",
    age:23,

   show:function(address,course){
        console.log(this.name,this.age,address,course)
    }

  }

  user1={
    name:"ram",
    age:24
  }
  user.show.call(user1,"hyd","java") //call method
  user.show.apply(user1,["hyd","java"]) //apply method
  let borrow=user.show.bind(user1,"hyd","java")
  borrow()

  // 14.Explain Hoisting with example.
  //  
  // hoisting is defalut behaviour of moving declartion to top
  //example
  hoisting()
 
  function hoisting(){
    console.log("hoisting")
  }

 // 17. write a progroam to delete employee whose age is 18 
//  var employe=[
//     {
//         id:1,
//         age:40
//     },
//     {
//         id:2,
//         age:50
//     },
//     {
//         id:3,
//         age:40
//     },
//     {
//         id:4,
//         age:18
//     }
// ]


// 19 . Write a program to remove duplicate from array 
    let arr=[30,45,60,20,30,55]
    let newarry=[...new Set(arr)]
    console.log(newarry)

//19 . Write a program to remove duplicate from array 
    
var number=555
number=parseInt(number);
var temp=number;
var rem=0,rev=0;
while(temp>0){
    rem=temp%10;
    rev=rev*10+rem;
    temp=Math.floor(temp/10);
}
if(rev===number){
    console.log("Palindrome");
}
else{
    console.log("Not a Palindrome");
}