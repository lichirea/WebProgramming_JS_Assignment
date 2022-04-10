let emptycell = "9";

function loadPuzzle(){
    pics = new Array(10);
    for(i=1; i<9; i++){
        found = true;
        while (found==true){
            x = 1 + Math.floor(Math.random() * 1000) % 8;
            found = false;
            for (j=1; j<i; j++)
                if (pics[j] == x) found = true;
        }
        pics[i] = x;
        if (x == 9) emptycell = i;
    }

    let cell;
    for(i=1; i<10; i++){
        cell = document.getElementById(i);
        if (cell){
            img = document.createElement("img");
            if(i!=emptycell)
                img.setAttribute("src", "dog" + pics[i] + ".jpg");
            else
                img.setAttribute("src", "empty.jpg");
            cell.appendChild(img);
        }
    }
}

function move(cellID, cell){
    console.log("this=", this, " cell=", cell);
    if(cellID == emptycell) return;
    remainder = cellID % 3;
    topPos = (cellID > 3) ? cellID-3 : -1;
    bottomPos = (cellID < 7) ? cellID+3 : -1;
    leftPos = (remainder != 1) ? cellID-1: -1;
    rightPos = (remainder > 0) ? cellID+1: -1;

    if(emptycell != topPos && emptycell !=bottomPos 
        && emptycell != leftPos && emptycell != rightPos)
        return;
    
    cell1 = document.getElementById(emptycell);
    img1 = cell1.firstChild;
    img = cell.firstChild;

    cell.removeChild(cell.firstChild);
    cell1.removeChild(cell1.firstChild);

    cell.appendChild(img1);
    cell1.appendChild(img);
    emptycell = cellID;

    let re = null;
    let x = null;
    let ok = 0;
    for(i=1; i<10; i++){
        imgName = document.getElementById(i).firstChild.src;
        switch(i) {
            case 1:
                x = [];
                re = /1.jpg$/;
                x = re.exec(imgName);
                if(x.length != 0)
                    ok++;
                break;
            case 2:
                x = [];
                re = /2.jpg$/;
                x = re.exec(imgName);
                if(x.length != 0)
                    ok++;
                break;
            case 3:
                x = [];
                re = /3.jpg$/;
                x = re.exec(imgName);
                if(x.length != 0)
                    ok++;
                break;
            case 4:
                x = [];
                re = /4.jpg$/;
                x = re.exec(imgName);
                if(x.length != 0)
                    ok++;
                break;    
            case 5:
                x = [];
                re = /5.jpg$/;
                x = re.exec(imgName);
                if(x.length != 0)
                    ok++;
                break;
            case 6:
                x = [];
                re = /6.jpg$/;
                x = re.exec(imgName);
                if(x.length != 0)
                    ok++;
                break;
            case 7:
                x = [];
                re = /7.jpg$/;
                x = re.exec(imgName);
                if(x.length != 0)
                    ok++;
                break;
            case 8:
                x = [];
                re = /8.jpg$/;
                x = re.exec(imgName);
                if(x.length != 0)
                    ok++;
                break;
          }
        
    }
    if(ok == 8){
        alert("You solved the puzzle! Good job!");
    }
}