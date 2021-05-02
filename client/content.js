//console.log("SeongMin's Part");

function urlSelected(e) {
    console.log('url select');
    var selectedText = window.getSelection().toString(); //선택된 url을 String으로 바꿀 것
    console.log(selectedText);
}

window.addEventListener('mouseup',urlSelected); //마우스 클릭시 urlSelect함수 실행



