function find_password(){
    let databaseUserName = "홍길동";
    let databaseUserPhoneNumber = "01012345678";
    let databaseId = "임시Id";
    let databasePw = "1234"
    let userName = document.getElementById("userName");
    let userId = document.getElementById("userId");
    let userPhoneNumber = document.getElementById("userPhoneNumber");

    if(userName.value == databaseUserName && userPhoneNumber.value == databaseUserPhoneNumber && userId.value == databaseId){
        alert(`고객님의 비밀번호는 "${databasePw}"입니다.`);
    }else if(userName.value == ""){
        alert("이름을 입력해주세요.");
    }else if(userId.value == ""){
        alert("아이디를 입력해주세요.");
    }else if(userPhoneNumber.value == ""){
        alert("휴대폰번호를 입력해주세요.");
    }else{
        alert("입력하신 정보와 일치하는 사용자가 없습니다.");
    }
}