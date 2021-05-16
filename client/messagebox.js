//google.py파일이랑 연동할 예정!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var clickedNum = 0;

document.addEventListener('DOMContentLoaded',function(){ //특정상황에서 특정함수 호출
    var btn_bot = document.querySelector('#btn_bot'); //btn_bot이라는 변수에 아이디값이 btn_bot 버튼 할당, 봇버튼 누를때 이벤트
    var btn_search =  document.querySelector('#btn_bot'); //서치버튼 누를 떄 이벤트

    btn_bot.addEventListener("click", SaveclickedNum); //버튼 클릭할 때 마다 클릭횟수 세이브
    btn_bot.addEventListener("click", getKeywords(clickedNum)); //btn01이 클릭되면 함수save실행

    btn_search.addEventListener("click", clearClickedNum)

})

function SaveclickedNum(){
    clickedNum += 1; //버튼 누를 때 마다 클릭 수 세이브
}

function clearClickedNum(){
    clickedNum = 0; //확인버튼 누르면 클릭 수 리셋
}

function getKeywords(A){
    //파이썬 파일에서 저장한 키워드 함수 불러오기
    var Show_keyword1 = keyword+ (A*1); //키워드는 파이썬에서 데려올 변수명
    var Show_keyword2 = keyword+ (A*2);
    var Show_keyword3 = keyword+ (A*3);
    var Show_keyword4 = keyword+ (A*4);

    document.getElementById('Show_keyword1_btn').innerHTML = Show_keyword1; //스크립트 변수를 html 내에서 쓰기위함
    document.getElementById('Show_keyword2_btn').innerHTML = Show_keyword2;
    document.getElementById('Show_keyword3_btn').innerHTML = Show_keyword3;
    document.getElementById('Show_keyword4_btn').innerHTML = Show_keyword4;
    }

