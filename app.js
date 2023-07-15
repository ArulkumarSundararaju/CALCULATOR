let op=document.getElementById("op");

 function display(num){
       op.value += num;
  }    

 function clr(){
        op.value="";
  }

  function calculate(){
     try{
      op.value=eval(op.value);
     }
     catch(err){
      alert("Invalid input 💀")
     }
  }

  function del(){

    op.value=op.value.slice(0,-1)
  }