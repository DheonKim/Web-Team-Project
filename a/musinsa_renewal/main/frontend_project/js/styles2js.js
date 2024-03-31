// timer 자바 스크립트 //

// 목표 날짜 설정
const countDownDate = new Date("Apr 7, 2024 00:00:00").getTime();

// 1초마다 카운트다운 업데이트
const countdownfunction = setInterval(function() {

    // 현재 날짜와 시간 가져오기
    let now = new Date().getTime();

    // 목표 날짜까지 남은 시간 계산
    let distance = countDownDate - now;

    // 시간, 분, 초 계산
    let days = Math.floor(distance / (1000 * 60 * 60 * 24)); 
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // 결과를 "section2Header_timer" 요소에 출력
    document.getElementById("section2Header_timer").innerHTML =
    '<div>' + days  + "<span>D</span></div>" + 
    '<div>' + hours + "<span>h :</span></div>" +     
    '<div>' + minutes + "<span>m :</span></div>" + 
    '<div>' + seconds + "<span>s</span></div>";

    // 카운트다운이 끝나면 메시지 출력
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("section2Header_timer").innerHTML = "D-Day";
    }
}, 1000);