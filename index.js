$("#display").keypress(function(event){
  const key = event.key;
const allowedCharacters = /[0-9+\-*/]/;
if (!allowedCharacters.test(key)) {
  event.preventDefault();
}
if(event.key==="="){
  let k = $("#display").val();
  let m = eval(k);
  $("#display").val(m);
}

})
let expression="" 
   function appendNumber(Number) {
 expression+=Number;   
   $("#display").val(expression);
  } 
 function appendOperator(operator){ 
     expression+=operator; 
     $("#display").val(expression);
    }
      function clearDisplay(){ 
         expression =' ';  
         $("#display").val(expression);
        }
        function calculate(){
            let result;
               try { 
                   result = eval(expression); 
                    } catch (error) {
            
                result = 'Error';
    } 
    $("#display").val(result);
 } 
