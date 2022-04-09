var colors = ['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 
'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 
'lightseagreen', 'deepskyblue', 'firebrick', 'crimson'];

$('#addball').click(function(){
    div = document.createElement('div');
    $(div).addClass("ball");
    $("#basket").append(div);
    $(div).css("background", colors[Math.floor((Math.random()*colors.length))]);
});