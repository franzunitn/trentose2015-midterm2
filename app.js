/* your code should go in this file */

/* 
 * The data is available in the array *data*
 * Each element of the array has the following structure:
 *  {
 *    word_en : "Apple",  // word in english
 *    word_de : "Apfel"   // word in german
 *  }
 */ 

var tmpl = ' <li id="ID">' +
           '  <h3>WORD</h3>' +
           '  <h3 class="solution">SOLUTION</h3>'+
           ' </li> ';

$(document).ready(function(){
    
    for (var i=0;i<data.length;i++){
        var x= tmpl.replace("ID",i);
        x=x.replace("WORD",data[i].word_en);
        x=x.replace("SOLUTION",data[i].word_de);
        console.log(x);
        $(".cards").append(x);
    }
    
    
    var x= $(".cards").find("#0").addClass("current");
    x.find(".solution").hide();
    var current=2;
    var count=0;
    $(".btn opt-incorrect").click(function(){
        console.log("premuto");
       $(".cards").find("#0").find(".solution").show();

        
        
    
    
    
    });
    

});







