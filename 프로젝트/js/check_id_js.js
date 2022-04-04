function checkIdValue(){
    document.getElementById("userId").value = opener.document.userInfo.id.value;
}

function checkId(){
    let databaseId = "임시Id";
    let id = document.getElementById("userId").value;
    if(id == ""){
        alert("아이디를 입력해주세요.");
        document.getElementById("use_btn").style.visibility="hidden";
    }else if(id == databaseId){
        alert("사용할 수 없는 아이디입니다.");
        document.getElementById("use_btn").style.visibility="hidden";
    }else{
        alert("사용할 수 있는 아이디입니다.");
        document.getElementById("use_btn").style.visibility="visible";
    }
}

function sendCheckValue(){
    opener.document.userInfo.id.value = document.getElementById("userId").value;
    window.close(self);
}