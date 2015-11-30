var obj = document.createElement("audio");
        obj.src="click.oga";
        obj.volume=0.10;
        obj.autoPlay=false;
        obj.preLoad=true;       

$(".bingo-cell").click(function(event){
	$(this).toggleClass("bingo-cell-active");
	obj.play();
});
