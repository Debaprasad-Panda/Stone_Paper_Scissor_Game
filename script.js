let userscore=0;
let compscore=0;
const userscore_span=document.getElementById("score_user");
const compscore_span=document.getElementById("score_computer");
const scorebord=document.querySelector("#result1");
const scorebord1=document.querySelector("#result");
const rock_event_div=document.getElementById("Rock");
const paper_event_div=document.getElementById("Paper");
const seasor_event_div=document.getElementById("Scissor");

function compchoice(){
	const choice=['r','p','s'];
	const rchose=Math.floor(Math.random()*3);
	return choice[rchose];
}
/*console.log(compchoice());*/
function convert(x){
	if (x=="r") return "Rock";
	if(x=="p") return "Paper";
	return "Scissor";
}

function game(uc){
	cc=compchoice();
	switch(uc+cc){
		case "rs":
		case "sp":
		case "pr":
			win(uc,cc);
			break;
		case "rp":
		case "sr":
		case "ps":
			loss(uc,cc);
			break;
		case "rr":
		case "ss":
		case "pp":
			draw(uc,cc);
			break;
		
	}
}
function win(us,cs){
	userscore++;
	userscore_span.innerHTML=userscore;
	scorebord.innerHTML="Your "+convert(us)+" beats "+convert(cs)+".";
	document.getElementById(convert(us)).classList.add("green_glow");
	setTimeout(function(){document.getElementById(convert(us)).classList.remove("green_glow")},300);
}
function loss(us,cs){
	compscore++;
	compscore_span.innerHTML=compscore;
	scorebord.innerHTML=convert(cs)+" Beats Your "+convert(us)+"." ;
	scorebord1.innerHTML=" !!! YOU LUSE !!!";
	document.getElementById(convert(us)).classList.add("red_glow");
	setTimeout(function(){document.getElementById(convert(us)).classList.remove("red_glow")},300);
}
function draw(us,cs){
	scorebord.innerHTML="Your "+convert(us)+" Equal With "+convert(cs)+".";
	scorebord1.innerHTML=" !!! DRAW !!!";
	document.getElementById(convert(us)).classList.add("yellow_glow");
	setTimeout(function(){document.getElementById(convert(us)).classList.remove("yellow_glow")},300);
}
function main(){
	rock_event_div.addEventListener('click',function(){
		game("r");
	})
	paper_event_div.addEventListener('click',function(){
		game("p");
	})
	seasor_event_div.addEventListener('click',function(){
		game("s");
	})
}
main();