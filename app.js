var choose = '';
var backupvalue;
var backupitem;
var valuechoose = false;
var a = new Array(8);
var k= 0;
var l=1;
var deletebackup;
for(var i=0;i<8;i++){
  a[i] = new Array();
let block = document.createElement('tr');
block.setAttribute("id", `tr${i}`)
let head = document.getElementById('tbody');
head.appendChild(block);
  for(var j=0;j<8; j++){
    var chessicons = '';
    if(i==0 && (j === 0 || j ===7)){    //(j==(1||2))
        chessicons='&#9814;';
    }
    if(i == 0 && (j === 1 || j ===6)){
        chessicons='&#9816;';
    }
    if(i == 0 && (j === 2 || j ===5)){
        chessicons='&#9815;';
    }
    if(i == 0 && j === 3){
        chessicons='&#9813;';
    }
    if(i == 0 && j === 4){
        chessicons='&#9812;';
    }
    if(i == 1){
        chessicons='&#9817;';
    }
    if(i==7 && (j === 0 || j ===7)){
        chessicons='&#9820;';
    }
    if(i == 7 && (j === 1 || j ===6)){
        chessicons='&#9822;';
    }
    if(i == 7 && (j === 2 || j ===5)){
        chessicons='&#9821;';
    }
    if(i == 7 && j === 3){
        chessicons='&#9819;';
    }
    if(i == 7 && j === 4){
        chessicons='&#9818;';
    }
    if(i == 6){
        chessicons='&#9823;';
    }
 var markup=`${chessicons}`;
let block = document.createElement('td');
block.setAttribute("id", `td${i}${j}`)
block.setAttribute("value", `${chessicons}`);
if(i%2 == 0){
    if(j%2 == 0){
        block.setAttribute("style", "background-color: white")
    }else{
        block.setAttribute("style", "background-color: lightgrey")
    }
}else{
    if(j%2 == 0){
        block.setAttribute("style", "background-color: lightgrey")
    }else{
        block.setAttribute("style", "background-color: white")
    }
}
block.innerHTML = markup;
let head = document.getElementById(`tr${i}`);
head.appendChild(block);
  }
}

const buttons = document.getElementsByTagName('td');
    const buttonsCount = buttons.length;
   for (let i = 0; i < buttonsCount; i += 1) {
   buttons[i].addEventListener('click', function() {
    id1=this.id;
    console.log(id1)
        if(!valuechoose){
            choose = document.getElementById(`${id1}`).getAttribute("value");
            if(choose !== ''){
            if(backupvalue && (coinstype(backupvalue) >= 18 )){
                if(coinstype(choose) > 18){
                    alert('this choose is for white');
                return;
                }
            }
            if(backupvalue && (coinstype(backupvalue) < 18 )){
                if(coinstype(choose) < 18){
                    alert('this choose is for black');
                return;
                    }
            }
            backupitem= id1;
            backupvalue= '';
            console.log("before")
         console.log("main choose a",choose)  
         document.getElementById(`${backupitem}`).style.border="2px solid lightgreen"
            valuechoose = true;
         }else{
            alert("please choose right one");
         } 
        }else{
            
            document.getElementById('back').style.display='block';
            console.log("after")
        if(choose !== ''){
            console.log("after inside")
             var dem3=document.getElementById(`${id1}`).getAttribute("value");
             console.log("dem3",dem3)
             console.log("choose",choose)
             console.log("aaaaaaaaaaaaaaaaaaaaaaaa",backupitem)
             if(/^\s*(w).*/gmi.test(backupitem)){
                 if(coinstype(id1) > 17){
                     alert('please place in correct');
                     return;
                 }
             }
             if(/^\s*(b).*/gmi.test(backupitem)){
                if(!(coinstype(id1) >= 60)){
                    alert('please place in correct');
                    return;
                }
            }
            if((coinstype(choose) == 23) || (coinstype(choose) == 17) ){

                if(coinstypeidlast(backupitem)[0] !==coinstypeidlast(id1)[0]){
                    if(dem3 != '' ){                        
                    if((coinstypeidlast(backupitem)[0] - coinstypeidlast(id1)[0]) !== 1 && (coinstypeidlast(backupitem)[0] - coinstypeidlast(id1)[0]) !== -1){                   
                        alert("it is not correct postion");
                        return;
                    }
                    }else{
                        alert("it is not correct postion");
                        return;
                    }
                }else{
                    if(dem3 != ''){ 
                        if(coinstypeidlast(backupitem)[0] === coinstypeidlast(id1)[0]){
                            alert("it is not correct postion");
                            return;
                        }
                    }
                }
            }
            if((coinstype(choose) == 14) || (coinstype(choose) == 20) ){
                if(checkBeforeMove()){
                alert("its not a correct position");
                return; 
                }
                if((coinstypeidlast(backupitem)[0] !== coinstypeidlast(id1)[0] ) && (coinstypeidfirst(backupitem)[0] !== coinstypeidfirst(id1)[0])){
                        alert("it is not correct postion");
                        return;
                }else{
                    if(dem3 != '' ){ 
                        if((coinstypeidlast(backupitem)[0] !== coinstypeidlast(id1)[0] ) && (coinstype1dfirst(backupitem)[0] !== coinstypeidfirst(id1)[0])){
                            alert("it is not correct postion");
                            return;
                        }
                    }
                }
            }

            if((coinstype(choose) == 15) || (coinstype(choose) == 21) ){
                if(checkBeforeMove()){
                    alert("its not a correct position");
                    return; 
                    }
                if(Math.abs(coinstypeidlast(backupitem)[0] - coinstypeidlast(id1)[0] ) !== Math.abs(coinstypeidfirst(backupitem)[0] - coinstypeidfirst(id1)[0])){
                        alert("it is not correct postion");
                        return;
                }else{
                    if(dem3 != '' ){ 
                        if(Math.abs(coinstypeidlast(backupitem)[0] - coinstypeidlast(id1)[0] ) !== Math.abs(coinstypeidfirst(backupitem)[0] - coinstypeidfirst(id1)[0])){
                            alert("it is not correct postion");
                            return;
                        }
                    }
                }
            }

            if((coinstype(choose) == 16) || (coinstype(choose) == 22) ){
                if((Math.abs(coinstypeidlast(backupitem)[0] - coinstypeidlast(id1)[0] ) !== 1 || (Math.abs(coinstypeidfirst(backupitem)[0] - coinstypeidfirst(id1)[0] ) !== 2 )) && (Math.abs(coinstypeidlast(backupitem)[0] - coinstypeidlast(id1)[0] ) !== 2 || (Math.abs(coinstypeidfirst(backupitem)[0] - coinstypeidfirst(id1)[0] ) !== 1 ))){
                        alert("it is not correct postion");
                        return;
                }else{
                    if(dem3 != '' ){ 
                        if((Math.abs(coinstypeidlast(backupitem)[0] - coinstypeidlast(id1)[0] ) !== 1 || (Math.abs(coinstypeidfirst(backupitem)[0] - coinstypeidfirst(id1)[0] ) !== 2 )) && (Math.abs(coinstypeidlast(backupitem)[0] - coinstypeidlast(id1)[0] ) !== 2 || (Math.abs(coinstypeidfirst(backupitem)[0] - coinstypeidfirst(id1)[0] ) !== 1 ))){
                            alert("it is not correct postion");
                            return;
                    }
                    }
                }
            }

            if((coinstype(choose) == 12) || (coinstype(choose) == 18) ){
                if((Math.abs(coinstypeidlast(backupitem)[0] - coinstypeidlast(id1)[0] ) !== 0 || (Math.abs(coinstypeidfirst(backupitem)[0] - coinstypeidfirst(id1)[0] ) !== 1 )) && (Math.abs(coinstypeidlast(backupitem)[0] - coinstypeidlast(id1)[0] ) !== 1 || (Math.abs(coinstypeidfirst(backupitem)[0] - coinstypeidfirst(id1)[0] ) !== 0 ))){
                        alert("it is not correct postion");
                        return;
                }else{
                    if(dem3 != '' ){ 
                        if((Math.abs(coinstypeidlast(backupitem)[0] - coinstypeidlast(id1)[0] ) !== 0 || (Math.abs(coinstypeidfirst(backupitem)[0] - coinstypeidfirst(id1)[0] ) !== 1 )) && (Math.abs(coinstypeidlast(backupitem)[0] - coinstypeidlast(id1)[0] ) !== 1 || (Math.abs(coinstypeidfirst(backupitem)[0] - coinstypeidfirst(id1)[0] ) !== 0 ))){
                            alert("it is not correct postion");
                            return;
                    }
                    }
                }
            }

            if((coinstype(choose) == 13) || (coinstype(choose) == 19) ){
                if(!(/^\s*(w|b).*/gmi.test(backupitem))&&((Math.abs(coinstypeidlast(backupitem)[0] - coinstypeidlast(id1)[0] ) == 1 && (Math.abs(coinstypeidfirst(backupitem)[0] - coinstypeidfirst(id1)[0] ) == 2 )) || (Math.abs(coinstypeidlast(backupitem)[0] - coinstypeidlast(id1)[0] ) == 2 && (Math.abs(coinstypeidfirst(backupitem)[0] - coinstypeidfirst(id1)[0] ) == 1 )))){
                    alert("it is not correct postion");
                    return;
            }else{
                if(dem3 != '' ){ 
                    if((Math.abs(coinstypeidlast(backupitem)[0] - coinstypeidlast(id1)[0] ) == 1 && (Math.abs(coinstypeidfirst(backupitem)[0] - coinstypeidfirst(id1)[0] ) == 2 )) || (Math.abs(coinstypeidlast(backupitem)[0] - coinstypeidlast(id1)[0] ) == 2 && (Math.abs(coinstypeidfirst(backupitem)[0] - coinstypeidfirst(id1)[0] ) == 1 ))){
                        alert("it is not correct postion");
                        return;
                }
                }
            }
            }

               if(dem3 == '' || ((coinstype(dem3) <=18) && (coinstype(choose)>=18))||((coinstype(dem3) >= 18) && (coinstype(choose) <= 18))){
                deletebackup= '';
                if(dem3 != '' && choose != ''){
                    var newhead;
                    let markup= `${dem3}`;
                    for(i=1;i<=17;i++){
                    if(coinstype(dem3) < 18){
                          console.log("white WWWWWWWWWWWWWWW")
                          
                          newhead = document.getElementById(`wtr${i}`);
                          if(newhead.innerHTML == ''){
                            deletebackup = `wtr${i}`;
                          console.log("white",newhead.innerHTML)
                          newhead.innerHTML = markup;
                          newhead.setAttribute('value',`${dem3}`);
                          break;
                          }
                    }
                    else
                    {
                            console.log("bhite BBBBBBBBBBBBBBBB")
                            newhead = document.getElementById(`btr${i}`);
                           if(newhead.innerHTML == ''){
                            deletebackup = `btr${i}`;
                           newhead.innerHTML = markup;
                           newhead.setAttribute('value',`${dem3}`);
                           break;
                           }   
                    }
                }
            }
                console.log("dem3 inside",dem3)
                document.getElementById(`${backupitem}`).innerHTML= ``;
               document.getElementById(`${backupitem}`).setAttribute("value", "")
               document.getElementById(`${backupitem}`).style.border="";
                 document.getElementById(`${id1}`).innerHTML= choose;
                 document.getElementById(`${id1}`).setAttribute("value", `${choose}`);
                 backupvalue=choose;
                 console.log("backupbackupbackupbackupbackupbackup",backupvalue)
                 choose="";
                 valuechoose = false;
                    }else{
                        console.log("dem3 outside",dem3)
                        alert("please choose right one");
                    }
                }  
        }
   })
}

function coinstype(data){
    data=data.replace(/\;/,'');
    // console.log("data",data)
    data = data.match(/\d{2}$/gmi)
    // console.log("after da",data)
    return data;
  }
  function coinstypeidlast(data){
    data=data.replace(/\;/,'');
    // console.log("data",data)
    data = data.match(/\d{1}$/gmi)
    // console.log("after da",data)
    return data;
  }
  function coinstypeidfirst(data){
    data=data.replace(/\;/,'');
    // console.log("data first",data)
    data = data.match(/\d{1}/gmi)
    // console.log("after da first",data)
    return data;
  }
function back(){
    console.log("back",backupitem)
    console.log("back",backupvalue)
    if(valuechoose){
        document.getElementById(`${backupitem}`).style.border="";
        valuechoose=!valuechoose;
        return;
    }
    if(deletebackup != ''){
        var newchoose = document.getElementById(`${deletebackup}`).getAttribute("value");
        document.getElementById(`${id1}`).innerHTML= newchoose;
        document.getElementById(`${id1}`).setAttribute("value", `${newchoose}`);
        document.getElementById(`${deletebackup}`).innerHTML= '';
        document.getElementById(`${deletebackup}`).setAttribute("value", '');
    }else{
        document.getElementById(`${id1}`).innerHTML= '';
        document.getElementById(`${id1}`).setAttribute("value", '');
    }
    document.getElementById(`${backupitem}`).innerHTML= backupvalue;
    document.getElementById(`${backupitem}`).setAttribute("value", `${backupvalue}`);
    backupvalue = "";
    choose='';
}

function restart(){
  location.reload();  
}


function checkBeforeMove(){
    var backfirst = Math.abs(coinstypeidfirst(backupitem)[0]) 
    var backlast = Math.abs(coinstypeidlast(backupitem)[0]) 
    var idfirst = Math.abs(coinstypeidfirst(id1)[0])
    var idlast = Math.abs(coinstypeidlast(id1)[0])
    if(backfirst == idfirst && backlast == idlast){
        return false;
    }
   
    if((coinstype(choose) == 14) || (coinstype(choose) == 20) ){
        if(idfirst < backfirst){
            if(idfirst > 0)
            idfirst = idfirst + 1;
        }
        if(idfirst > backfirst){
            if(backfirst > 0)
            backfirst = backfirst + 1;
        }
        var backfirst1 = Math.min(backfirst,idfirst);
        var idfirst1 = Math.max(backfirst,idfirst);
         console.log("main",idfirst);
        var backlast1 = Math.min(backlast,idlast);
        var idlast1 = Math.max(backlast,idlast);
        
         console.log("back",backfirst1,backlast1);
        console.log("last",idfirst1,idlast1);
    for(var i=backfirst1 ; i<=idfirst1 ; i++){
        for(var j= backlast1; j<=idlast1; j++){
            var data= document.getElementById(`td${i}${j}`).getAttribute("value");
            console.log("in side",i,j,data)
            if(data != ""){
              console.log("in side",i,j,data)
               return true;
            }
      }
      }
    }
    if((coinstype(choose) == 15) || (coinstype(choose) == 21) ){
        var backfirst1 = Math.min(backfirst,idfirst);
        var idfirst1 = Math.max(backfirst,idfirst);
         console.log("main",idfirst);
        var backlast1 = Math.min(backlast,idlast);
        var idlast1 = Math.max(backlast,idlast);
        console.log("back",backfirst1,backlast1);
        console.log("last",idfirst1,idlast1);
        var k= backlast1;
        for(var i=backfirst1 ; i<=idfirst1 ; i++){
            for(var j= backlast1; j<=idlast1; j++){
                if((Math.abs(coinstypeidfirst(backupitem)[0]) != i && Math.abs(coinstypeidlast(backupitem)[0]) != j)&&(backfirst1 != i && backlast1 !=j)){ 
                    console.log("main out side",i,j)
                if(j == k){
                    console.log("main in side",i,j)
                    var data= document.getElementById(`td${i}${j}`).getAttribute("value");
                    if(data != ""){
                        console.log("in side",i,j,data)
                         return true;
                      }
                }
            }              
          }
          k++;
          }
    }

      return false
}

///////////////////////////////////////////////////////////
// var a = new Array(8);
// var k= 0;
// for(var i=0;i<8;i++){
//   a[i] = new Array();
// let block = document.createElement('tr');
// block.setAttribute("id", `tr${i}`)
// let head = document.getElementById('tbody');
// head.appendChild(block);
//   for(var j=0;j<8; j++){
//  var markup=`${k++}`;
// let block = document.createElement('td');
// block.setAttribute("id", `td${i}${j}`)
// if(i%2 == 0){
//     if(j%2 == 0){
//         block.setAttribute("style", "background-color: white")
//     }else{
//         block.setAttribute("style", "background-color: black")
//     }
// }else{
//     if(j%2 == 0){
//         block.setAttribute("style", "background-color: black")
//     }else{
//         block.setAttribute("style", "background-color: white")
//     }
// }
// block.innerHTML = markup;
// let head = document.getElementById(`tr${i}`);
// head.appendChild(block);
//   }
// }


