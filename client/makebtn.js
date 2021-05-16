/** 
$("#Show_keyword1_btn").click(function(){});

 function add() { //버튼 동적 생성할 함수
    var element = document.createElement("input");
    element.type = 'button';
    element.value = "a"+i;
    element.name = "a"+i;
    element.id = "a"+i++;
    var foo = document.getElementById("new_input");
    foo.appendChild(element);
} */

$(document).on('click', '.dynamicDiv', function() {
    console.log("동적 추가된 div태그 '"+$(this).attr("id")+"'이 클릭되었습니다.");
  });
   
  var index = 0; 
  var addDiv = function() {
    $("body").append("<div class='dynamicDiv' id='"+index+"'>동적추가 div " +index+ "</div>");
    index++;
  };