function checkId(){
    window.open("checkId.html", "아이디 중복확인", "width=300, height=250");
}

let databaseId = "임시Id";
let databaseNickname = "임시닉네임";
let userId = document.getElementById("userId");
let userPassword = document.getElementById("userPassword");
let passwordCheck = document.getElementById("userPasswordCheck");
let userName = document.getElementById("userName");
let userNickname = document.getElementById("userNickname");
let userPhoneNumber = document.getElementById("userPhoneNumber");
let genderSelector = document.getElementById("userGender");


function checkNickname(){
    if(userNickname.value == ""){
        alert("닉네임을 입력해주세요.");
    }else if(userNickname.value == databaseNickname){
        alert("사용할 수 없는 닉네임입니다.");
    }else{
        alert("사용할 수 있는 닉네임입니다.");
    }
}

function sign_in(){
    if(userId.value == ""){
        alert("아이디를 입력해주세요.");
    }else if(userPassword.value == ""){
        alert("비밀번호를 입력해주세요.");
    }else if(userPassword.value !== passwordCheck.value){
        alert("비밀번호를 확인해주세요.");
    }else if(userName.value == ""){
        alert("이름을 입력해주세요.");
    }else if(userNickname.value == ""){
        alert("닉네임을 입력해주세요.");
    }else if(genderSelector.options[genderSelector.selectedIndex].value == "none"){
        alert("성별을 선택해주세요.");
    }else if(userPhoneNumber.value == ""){
        alert("휴대폰 번호를 입력해주세요.");
    }else{
        alert("회원가입을 환영합니다!");
    }
}