//task i
function isRightAngel (a, b, c){
   if(sqr(a) + sqr(b) === sqr(c)){
        console.log("Right-angle triangle");
        return;
   }
   else{
    console.log("Not a right-angle triangle"); 
   }
}

function sqr(num){
    return multiplication(num, num);
}
 
function multiplication(x,y){
    return x*y;
}

// task iv 
console.log("first call");
setTimeout(()=>{console.log("second call");}, 2000);
console.log("third call");

// task v

function randomNum(){
    return (Math.floor(Math.random()*10)+1)
}
function Failuer(color){
    console.log("failed with color " + color);
}


function changeColor (time, color, callback, reject){
    setTimeout(()=>{
        if (randomNum() >9){
            reject();
        }
        else{
            callback();
            document.body.style.backgroundColor = color;
        };     
    }, time);  
}

changeColor(1000, "red", ()=>{
    changeColor(1000, "orange", ()=>{
        changeColor(1000, "yellow", ()=>{
            changeColor(1000, "green", ()=>{
                changeColor(1000, "black", ()=>{
                    changeColor(1000, "blue", ()=>{
                        changeColor(1000, "purple", ()=>{
                        },()=>{Failuer("purple")} )
                    },()=>{Failuer("blue")} )    
                },()=>{Failuer("black") })    
            },()=>{Failuer("green") }) 
        },()=>{Failuer("yellow") })
    },()=>{Failuer("orange") })               
} ,()=>{Failuer("red")} );


