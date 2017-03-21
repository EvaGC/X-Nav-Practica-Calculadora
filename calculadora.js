$("button").click(function(){
    vlr = $(this).val();
    actual = $("#resultado").text();

    if(vlr=="C"){
        $("#resultado").text("");
    }else if (vlr=="CE"){
         var borrado=$("#resultado").text().slice(0,-1);
        $("#resultado").text(borrado);
    }else{
        if(vlr=="="){
            $("#resultado").text(eval(actual));
        }else{
            $("#resultado").text(actual + vlr);
        }
    }
})


$(document).ready(function() {
    $('#cambio1').click(function(){
        $('#sandbox').css('color', 'black');
        $('body').css('background-color', 'white');
        $('.calculadora ').css('background-color', '#A4548E');
          
    });                       
}); 

$(document).ready(function() {
    $('#cambio2').click(function(){
        $('body').css('background-color', 'black');
        $('#sandbox').css('color', 'white');
        $('.calculadora ').css('background-color', "rgba(51, 162, 255, 0.7)");
    });                       
}); 

function num(number){
    var final;
    var actual;
    var f;
    actual = $("#resultado").text();
    final=actual+number;
    f = $("#resultado").text(final);
    if(f=="="){
        $("#resultado").text(eval(number));
    }else{
        $("#resultado").text(actual + number);
    }
}


$(document).keypress(function(e){
    var number=e.which;
    if(number<=57 && number>=48){
      var number2= number-48;
      num(number2)
    }else if(number == 13 || number == 61){
        num("=")
    }else if(number == 46){
        num(".")
    }else if(number == 43){
        num("+")
    }else if(number == 42){
        num("*")
    }else if(number == 45){
        num("-")
    }else if(number == 47){
        num("/")
    }
});