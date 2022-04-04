function find_id(){
    let databaseUserName = "홍길동";
    let databaseUserPhoneNumber = "01012345678";
    let databaseId = "임시id";
    let userName = document.getElementById("userName");
    let userPhoneNumber = document.getElementById("userPhoneNumber");

    if(userName.value == databaseUserName && userPhoneNumber.value == databaseUserPhoneNumber){
        alert(`고객님의 아이디는 "${databaseId}"입니다.`);
    }else if(userName.value == ""){
        alert("이름을 입력해주세요.");
    }else if(userPhoneNumber.value == ""){
        alert("휴대폰번호를 입력해주세요.");
    }else{
        alert("입력하신 정보와 일치하는 사용자가 없습니다.");
    }
}