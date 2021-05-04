window.extention_save=(e) =>{
    console.log(e.currentTarget.src);
    var img = e.currentTarget.src;
    var upload = confirm("사진을 저장하시겠습니까?");
    if (upload){
        alert("저장 완료!");
    } else {
        console.log("저장하지 않음");
    }
    e.preventDefault();
}

function active(){
    const img = document.getElementsByTagName("img");
    for (let i=0; i< img.length; i++){
        img[i].addEventListener("click",window.extention_save);
    }
}

function deActive(){
    const img = document.getElementsByTagName("img");
    for (let i=0; i<img.length; i++){
        img[i].removeEventListener("click",window.extension_save)
    }
}

active();