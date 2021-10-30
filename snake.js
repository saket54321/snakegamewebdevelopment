let direction={x:0,y:0};

lastPaintTime=0;
let snakeArr=[
    {x:13,y:15}
];
let food={x:6,y:7};
let speed = 3;
score = 0;
scoreBox=document.querySelector('.scoreBox');
hiscoreBox=document.querySelector('.hiscoreBox');

console.log("hello world")
function main(ctime){
    window.requestAnimationFrame(main);
    //console.log(ctime)
    if((ctime-lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();

}
function collide(snake){
    for(let i=1; i<snakeArr.length; i++){
        if(snake[i].x === snake[0] && snake[i].y === snake[0].y){
            return true;
        }
    }
    if(snake[0.].x >=18 || snake[0].x <=0 || snake[0.].y >=18 || snake[0].y <=0){
        return true;
    }
    return false;
}
function gameEngine(){
    if(collide(snakeArr)){
        direction =  {x: 0, y: 0}; 
        alert("Game Over. Press any key to play again!");
        snakeArr = [{x: 13, y: 15}];
        score=0;
    }
    if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){
        score +=1;
        if(score>hiscoreval){
            hiscoreval = score;
            localStorage.setItem("hiscore",JSON.stringify(hiscoreval));
            hiscoreBox.innerHTML = "hiscore:"+ hiscoreval;
        }
        scoreBox.innerHTML='score;'+score;
        snakeArr.unshift({x: snakeArr[0].x + direction.x, y: snakeArr[0].y + direction.y});
        
        


        let a=2;
        let b=16;
        food={x:Math.round(a +(b-a)*Math.random()),y:Math.round(a +(b-a)*Math.random())}

    }
    for (let i=snakeArr.length-2;i>=0;i--){
        snakeArr[i+1] = {...snakeArr[i]};
    }
    snakeArr[0].x += direction.x;
    snakeArr[0].y += direction.y;
    board = document.querySelector(".board");
    board.innerHTML="";
    snakeArr.forEach((e,index)=>{
        snakeelement = document.createElement('div');
        snakeelement.style.gridRowStart = e.y;
        snakeelement.style.gridColumnStart = e.x;
        
        if (index === 0){
            snakeelement.classList.add('head');

        }
        else{
            snakeelement.classList.add('tail');

        }
        board.appendChild(snakeelement);
        
        


        
    });
    foodelement = document.createElement('div');
    foodelement.style.gridRowStart = food.y;
    foodelement.style.gridColumnStart = food.x;
    foodelement.classList.add('food');
    board.appendChild(foodelement);


}
let hiscore = localStorage.getItem("hiscore");
if(hiscore === null){
    hiscoreval = 0;
    localStorage.setItem("hiscore:", JSON.stringify(hiscoreval))
}
else{
    hiscoreval = JSON.parse(hiscore);
    hiscoreBox.innerHTML = "hiscore:" + hiscore;
}
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
    direction={x:0,y:1};
    switch (e.key){
        case "ArrowUp":
            console.log("arrowup");
            direction.x=0;
            direction.y=-1;
            break;
        case "ArrowDown":
            console.log("arrowDown");
            direction.x=0;
            direction.y=1;
            break;
        case "ArrowLeft":
            console.log("arrowleft");
            direction.x=-1;
            direction.y=0;
            break;
        case "ArrowRight":
            console.log("arrowright");
            direction.x=1;
            direction.y=0;
            break;
        default:
            break;
    }
});





