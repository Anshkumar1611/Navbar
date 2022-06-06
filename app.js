// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


const navToggle=document.querySelector(".nav-toggle");
const links=document.querySelector(".links");


navToggle.addEventListener("click",function(){
    links.classList.toggle("show-links");  
})


    // alternatives of toggle class

  // console.log(links.classList);---gives the class links have
  // console.log(links.classList.contains("random"));---check whether contains the asked class or not
  // console.log(links.classList.contains("links"));
 
//  same whi kr rha h jo toggle ek line m kr raha h neeche wala if and else loop-----
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }