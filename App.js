function show(){
  let containerInfo= document.querySelector(".container-info");
  let info= document.querySelectorAll(".info");
  for(i=0; i<info.length; i++){
    if(info[i].classList.toggle("show")){
      containerInfo.style.borderBottom=0;
  containerInfo.style.borderRadius="5px 5px 0px 0px";
    }
    else{
     containerInfo.style.borderBottom="1px solid black";
  containerInfo.style.borderRadius="5px";

    }
  }
 
}



let setDisplay= setInterval(function(){
  document.querySelector(".notification").style.display="block"
}, 2000)

cancle=()=>{
  document.querySelector(".notification").style.display="none";
  clearInterval(setDisplay);
}


function show(){
 document.querySelector(".sub-nav").style.display="block";
 document.querySelector(".notification").style.display="none";
 clearInterval(setDisplay);
 }
 function hide(){
   document.querySelector(".sub-nav").style.display="none";
 }



function myFunction(){
var animated= document.querySelectorAll(".animate");
    for(var i=0; i<animated.length; i++){
    var animateScroll = animated[i];
    if(document.documentElement.scrollTop>=animateScroll.scrollTop-20){//Adjust
      animateScroll.classList.add("animatedbyScroll");
      animated[i].style.opacity=1
}
}

document.querySelector(".ncourse").onkeyup=()=>{ 
 let numberOfCourses= document.querySelector(".ncourse").value;
 let RealNumber=+numberOfCourses+1;
   let coursesparent= document.querySelector(".first-parent");
   for (var i=1; i<RealNumber; i++){
       let div= document.createElement("div");
     div.className="parent-div";
  let p= document.createElement("p");
  let Unit= document.createElement("input");
  let grade=document.createElement("input");
  grade.className="grade";
  Unit.className="unit"
  p.innerHTML="Course"+ " " +i;
  grade.placeholder="Enter" +" " +p.innerHTML + " "+"grade";
  Unit.placeholder="Enter" +" " +p.innerHTML + " "+"Unit";
  
  let button= document.createElement("button");
  div.appendChild(p);
  div.appendChild(grade);
  div.appendChild(Unit);
  coursesparent.appendChild(div);
document.querySelector(".ncourse").onkeydown=()=>{
  let divParent=document.querySelectorAll(".parent-div");
  divParent.forEach(item=>{
  item.remove();
  });
}
      }
   }
 document.getElementById("btn").style.display="block";
}

calculate=()=>{
 /*grader= document.querySelectorAll(".grade");
 grader.forEach(item =>{
   alert(item.value);
 });
 unitvalue= document.querySelectorAll(".unit");
 unitvalue.forEach(item =>{
   alert(item.value);
 });
 let point=grader.value *unitvalue;
 */
 
 let totalGrade=[];
let totalUnit=[];
pointEarned=[];
let UNITS=0;
gradeUnit= document.querySelectorAll(".grade");
gradeUnit.forEach(item=>{
 let GRADE;
 if (item.value ==="A") {
    GRADE=5;
  } else if (item.value === "B") {
    GRADE=4;
  } else if (item.value ==="C") {
    GRADE=3;
  } else if (item.value === "D") {
    GRADE=2;
  } else if (item.value ==="E") {
    GRADE=1;
  } else if (item.value === "F") {
    GRADE=0;
  }
 totalGrade.push(GRADE);
})


function calcGrade(Grade, Unit){
return Grade*Unit;  
}
console.log(totalGrade);
unitvalue= document.querySelectorAll(".unit");
unitvalue.forEach(item=>{
  const UNIT=parseInt(item.value);
  UNITS+=UNIT;
  totalUnit.push(UNIT);
  
})
console.log(totalUnit);
console.log(UNITS);
let earnedPoint=0
for (let i = 0; i < gradeUnit.length; i++) {
    earnedPoint+=calcGrade(totalUnit[i],totalGrade[i]);
  }
  
console.log(earnedPoint);
let CGPA=(earnedPoint/UNITS);
console.log("your CGPA is"+ CGPA);
document.getElementById("result").innerHTML=`Your CGPA is ${CGPA}`;
}
 // let point=gradeUnitValue * UnitValues;
  //TotalPoint=point
 // alert(TotalPoint);
  /*
 const list = [1,2,3,4,5];

// arrow function to sum array element
const result2 = () => {
  var i = list.length;
  var sum = 0;
  while (i--) {
    sum += list[i]
  }
  console.log(sum)
}
result2()
*/
showGuide=()=>{
  document.querySelector(".big-container").style.display="none"
  document.querySelector(".usage-guide").style.display="block"
  document.querySelector(".sub-nav").style.visibility="hidden"
}
GoBack=()=>{
  document.querySelector(".big-container").style.display="block";
  document.querySelector(".usage-guide").style.display="none";
  document.querySelector(".sub-nav").style.visibility="visible"
}
changeMode=()=>{
  if(document.body.classList.toggle("dark")){
    document.querySelector(".mode").innerHTML="Light Mode &#9790 &#9788";
  }
  else{
    document.querySelector(".mode").innerHTML="  Dark Mode &#9788; &#9789;";
  };
}
function AnotherFunction(){
   
 } 