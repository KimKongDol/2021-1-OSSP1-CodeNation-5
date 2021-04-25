//아이디 선택자
const search = document.querySelector("#search"),
    searchButton = document.querySelector("#searchButton");

//검색 버튼 클릭하면 실행되는 함수
search.click(function() {
    searchButton.submit();
})