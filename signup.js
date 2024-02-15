document.querySelector(".form").addEventListener("submit", function (event) {
    event.preventDefault(); // 기본 제출 동작 막기

    // 필드 값 가져오기
    var nameInput = document.querySelector('input[name="name"]');
    var emailInput = document.querySelector('input[name="email"]');
    var phonenumInput = document.querySelector('input[name="phonenum"]');
    var passwordInput = document.querySelector('input[name="pw"]');
    var confirmPasswordInput = document.querySelector('input[name="confirm_pw"]');

    // 오류 메시지 초기화
    var errorMessage = "";

    // 이름 필드 유효성 검사
    if (nameInput.value.trim() === "") {
        errorMessage += "이름을 입력하세요.\n\n";
        console.log(errorMessage);
    }

    // 이메일 필드 유효성 검사
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        errorMessage += "유효한 이메일을 입력하세요.\n\n";
    }
    // ^: 문자열의 시작, 이는 정규식이 문자열의 시작에서부터 일치해야 함
    // [^\s@]+: 이메일 주소에서는 @과 공백 문자가 없어야 하며, 최소한 한 문자는 있어야 함
    // @: 이메일 주소에서는 반드시 @ 문자가 포함
    // \.: 이메일 주소에서는 반드시 . 문자가 포함되어야 합니다. 이 때, \는 . 문자를 일반 문자로 해석하기 위해 이스케이프(escape) 처리된 것임
    // $: 문자열의 끝을 나타냅니다. 이는 정규식이 문자열의 끝까지 일치해야 함을 의미합니다.

    // 전화번호 필드 유효성 검사
    var phonenumPattern = /^\d{11}$/;
    // \d: 숫자
    // {11}: 11번 반복
    if (!phonenumPattern.test(phonenumInput.value.trim())) {
        errorMessage += "유효한 전화번호를 입력하세요.\n\n";
    }

    // 비밀번호 필드 유효성 검사 01
    if (passwordInput.value.trim() === "") {
        errorMessage += "비밀번호를 입력하세요.\n\n";
    }

    // 비밀번호 필드 유효성 검사 02
    if (passwordInput.value.length < 8) {
        errorMessage += "비밀번호는 8자 이상이여야 합니다.\n\n";
    }

    // 비밀번호 확인 필드 유효성 검사
    if (confirmPasswordInput.value.trim() === "") {
        errorMessage += "비밀번호 확인을 입력하세요.\n\n";
    }

    // 비밀번호 일치 여부 확인
    if (passwordInput.value.trim() !== confirmPasswordInput.value.trim()) {
        errorMessage += "비밀번호가 일치하지 않습니다.\n\n";
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
