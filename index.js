let mainBox = document.createElement('div');
let fP = "X";
mainBox.style.height = "600px";
mainBox.style.width = "600px";
mainBox.style.display = "flex";
mainBox.style.flexDirection = "row";
mainBox.style.flexWrap = "wrap";



for(i=1;i<=9;i++){
    let box = document.createElement('div');
    box.setAttribute("Id",i);
    box.style.width = "32%";
    box.style.height = "32%";
    box.style.border = "2px solid";
    box.style.fontSize = "50px";
    box.style.color = "white";
    box.style.textAlign = "center";
  
    box.style.backgroundColor = "#7373da";
    box.style.cursor = "pointer";
    box.addEventListener("click",function(){
        if(this.innerText.length == 0){
            if(fP == "X"){
                this.innerText = `\n${fP}`;
               fP = "O";
            }
            else{
                this.innerText = `\n${fP}`;
                fP = "X";
            }
        }
    })
    mainBox.appendChild(box);
}
document.body.appendChild(mainBox);