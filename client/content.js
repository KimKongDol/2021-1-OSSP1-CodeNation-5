
window.extention_save=(e) =>{
    console.log(e.currentTarget.src);
    alert(e.currentTarget.src);
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