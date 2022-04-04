function login(){
    let databaseId = "임시Id";
    let databasePw = 1234;
    let id = document.getElementById("id");
    let pw = document.getElementById("pw");

    if(id.value == databaseId && pw.value == databasePw){
        location.href = `main.html?${id}`;
    }else if(id.value == ""){
        alert("아이디를 입력해주세요.");
    }else if(pw.value == ""){
        alert("비밀번호를 입력해주세요.");
    }else{
        alert("입력하신 정보가 일치하지 않습니다.");
    }
}