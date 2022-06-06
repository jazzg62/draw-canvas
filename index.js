var canvasElement = document.getElementById('canvas');
var ctx = canvasElement.getContext('2d');
var clientX,clientY;
var isMouseMove = 0;
var isMouseClick = 0;
var hoverAt = [];

// 鼠标是否在canvas内
canvasElement.onmouseenter = function(d) {
    isMouseMove = 1;
}
canvasElement.onmouseleave = function(d) {    
    isMouseMove = 0;
}
canvasElement.onmousemove = function(d) {
    clientX = d.clientX;
    clientY = d.clientY;
}
// 鼠标单击/释放
canvasElement.onmousedown = function(d) {
    isMouseClick |= 1;
}
canvasElement.onmouseup = function(d) {
    isMouseClick = 0;
}

var objPool = [];

function draw(){
    for(var i in objPool){
        objPool[i].clear();
        var isHover = isPointAtArea(clientX, clientY, objPool[i]);
        if(isMouseClick & 2 && hoverAt.includes(i)){
            objPool[i].x1 = clientX-parseInt(objPool[i].width/2);
            objPool[i].y1 = clientY-parseInt(objPool[i].height/2);
            objPool[i].color = 'red';
            canvasElement.style.cursor = 'grabbing';
        }else if(isHover && isMouseClick & 1){
            objPool[i].x1 = clientX-parseInt(objPool[i].width/2);
            objPool[i].y1 = clientY-parseInt(objPool[i].height/2);
            objPool[i].color = 'red';
            canvasElement.style.cursor = 'grabbing';
            hoverAt = [];
            hoverAt.push(1);
            isMouseClick |= 2;
        }else{
            objPool[i].color = '#6E6E6E';
            canvasElement.style.cursor = 'default';
        }
        objPool[i].draw();
    }
    requestAnimationFrame(draw);
}
draw();

objPool.push(new rect(10, 10, 40, 40));
objPool.push(new rect(350, 350, 40, 40));

// TODO: multi-object

// TODO: resize

// TODO: redo/undo