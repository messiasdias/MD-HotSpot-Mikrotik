

function linkmove(){
 
 $("#link-move").css("letter-spacing", "1px");
    sleep(1000);
  $("#link-move").css("letter-spacing", "-1px");
    linkmove();        
}


linkmove();
