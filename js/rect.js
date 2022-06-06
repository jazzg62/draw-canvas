function rect(x=0, y=0, width=10, height=10){
    this.x1 = x;
    this.y1 = y;
    this.width = width;
    this.height = height;
    this.color = '#6E6E6E'; 
}

rect.prototype.draw =function(){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x1, this.y1, this.width, this.height);
}
rect.prototype.clear =function(){
    ctx.clearRect(this.x1, this.y1, this.width, this.height);
}
