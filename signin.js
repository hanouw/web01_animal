document.querySelector(".form").addEventListener("submit", function (event) {
    event.preventDefault(); // 기본 제출 동작 막기

    // 필드 값 가져오기
    var nameInput = document.querySelector('input[name="name"]');
    var emailInput = document.querySelector('input[name="email"]');
    var passwordInput = document.querySelector('input[name="pw"]');
    var confirmPasswordInput = document.querySelector('input[name="confirm_pw"]');

    // 오류 메시지 초기화
    var errorMessage = "";

    // 이름 필드 유효성 검사
    if (nameInput.value.trim() === "") {
        errorMessage += "이름을 입력하세요.\n\n";
    }

    // 비밀번호 필드 유효성 검사 01
    if (passwordInput.value.trim() === "") {
        errorMessage += "비밀번호를 입력하세요.\n\n";
    }

    // 비밀번호 필드 유효성 검사 02
    if (passwordInput.value.length < 8) {
        errorMessage += "비밀번호는 8자 이상이여야 합니다.\n\n";
    }

    // 오류가 발생하면 오류 메시지를 콘솔에 출력하고 제출을 막음
    if (errorMessage !== "") {
        console.log(errorMessage);
        alert(errorMessage);
        return false;
    }

    // 유효성 검사 통과 시 회원가입 폼 제출
    event.target.submit();
});
