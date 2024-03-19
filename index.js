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