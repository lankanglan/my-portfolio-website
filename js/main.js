//....................homepage
//share
$('.icons img').hover(function(){
	var hoverClassName='active-'+$(this).attr('class');
	$(this).attr('src','img/'+hoverClassName+'.png');
},function(){
	var className=$(this).attr('class');
	$(this).attr('src','img/'+className+'.png');
})

//balls
					window.onload=function(){
						var canvas=document.getElementById("ball");
						var cxt=canvas.getContext("2d");
						var r=50;
						var maxNum=3;
						var ballArray=new Array();
						var maxX=canvas.width;
						var maxY=canvas.height;
                        ball.style.left="500px";
                        ball.style.top = "100px";
                        ball.style.position="absolute";
						for(var n=0;n<maxNum;n++){
						var x={
							x:getRandomNumber(r, maxX-r),
							y:getRandomNumber(r, maxY-r),
							r:r,
							vX:getRandomNumber(0.5, 1),
						 vY:getRandomNumber(0.5, 1),
							color:"#2f78cf",
					
						}
						ballArray.push(x);
						}
						
						draw();		
						function draw(){

							cxt.fillStyle="#0a68bb";
                            cxt.style="z-index:-3"
			     	  			cxt.fillRect(0,0,canvas.width,canvas.height);
							for (i in ballArray){
								var x=i;
								
								ballArray[i].x+=ballArray[i].vX;
								ballArray[i].y+=ballArray[i].vY;
										
								if(ballArray[i].x>=maxX-r){
											ballArray[i].x=maxX-r;
											ballArray[i].vX=-ballArray[i].vX;
								}
								if(ballArray[i].x<=r){
											ballArray[i].x=r;
											ballArray[i].vX=-ballArray[i].vX;
								}			
								if(ballArray[i].y>=maxY-r){
											ballArray[i].y=maxY-r;
											ballArray[i].vY=-ballArray[i].vY;
								}
								if(ballArray[i].y<=r){
											ballArray[i].y=r;
											ballArray[i].vY=-	ballArray[i].vY;
								}

								for(var j=0;j<maxNum;j++)
										if(j!==x){
										if(Math.round(Math.pow(ballArray[x].x-ballArray[j].x,2)+
																	Math.pow(ballArray[x].y-ballArray[j].y,2)) <= 
											 Math.round(Math.pow(r+r,2)))	                         	                    
										{
											
											var tempX=ballArray[x].vX;
											var tempY=ballArray[x].vY;
											 ballArray[x].vX=ballArray[j].vX;
											 ballArray[j].vX=tempX;
											ballArray[x].vY=ballArray[j].vY;
											ballArray[j].vY=tempY;
										}
									}
								cxt.beginPath();
								
								cxt.fillStyle=ballArray[i].color;
								cxt.arc(ballArray[i].x,ballArray[i].y,ballArray[i].r,0,Math.PI*2,true);
								cxt.closePath();
								cxt.fill();
							}
							setTimeout(function(){draw();},1);
						}
						
						function getRandomNumber(min, max) {
            return (min + Math.floor(Math.random() * (max - min + 1)))
        }
					}
// Back to top
 function goTop() {
        var obj = document.getElementById("goTopBtn");
        function getScrollTop() {
            return document.documentElement.scrollTop || document.body.scrollTop;
        }
        function setScrollTop(value) {
            if(document.documentElement.scrollTop)
            {
                document.documentElement.scrollTop=value;
            }
            else
            {
                document.body.scrollTop=value;
            }
        }
        window.onscroll = function () { getScrollTop() > 0 ? obj.style.display = "block" : obj.style.display = "none"; }
        obj.onclick = function () {
            var goTop = setInterval(scrollMove, 10);
            function scrollMove() {
                setScrollTop(getScrollTop() / 1.1);
                if (getScrollTop() < 1) clearInterval(goTop);
            }
        }
    }
    goTop();