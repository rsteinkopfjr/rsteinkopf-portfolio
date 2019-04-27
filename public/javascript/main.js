$(".title-item").mouseenter(function(){
    // console.log("mouse enter", this);
    var letter = this.name;
    this.src = "alphabet/" + letter + "-outline.png";
}).mouseleave(function(){
    // console.log("mouse leave", this);
    var newletter = this.name;
    this.src = "alphabet/" + newletter + "-full.png";
});

$(".carousel").carousel({
    interval: 4500,
    pause: false
});