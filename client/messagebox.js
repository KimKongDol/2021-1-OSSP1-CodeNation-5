function save(e){
    chrome.tabs.executeScript(null, //크롬 내에서 쓸 수 있게
        {code:"' document.querySelector('')"} ); //크롬 탭 
   
}

document.addEventListener('DOMContentLoaded',function(){ //특정상황에서 특정함수 호출
    var btn01 = document.querySelector('#btnYes'); //btn01이라는 변수에 아이디값이 btnYes 버튼 할당, btn01변수가 저장버튼
    btn01.addEventListener("click", save) //btn01이 클릭되면 함수save실행
})