//document.write("환영합니다.");
//console.log("안녕하시요.");

// var box = 100;
// console.log(box);

// box = 30;
// console.log(box);

// box = "안녕";
// console.log(box);

// var a = 100;
// var b = "100";

// console.log(a);
// console.log(b);

// // 타입을 알 수 있는 코드 typeof
// console.log(typeof(a));
// console.log(typeof(b));

// var tag = "<h1>타이틀</h1>";
// console.log(tag);
// console.log(typeof(tag));
// document.write(tag);

// var s = "100";
// var t = 30;
// console.log(s);
// console.log(s + t);

//string 타입을 일시적으로 숫자 변경
// console.log(Number(s)+ t); //변환함수

// var s1 = true;
// var s2 = "true";
// var s3 = false;

// console.log(s1);
// console.log(s2);
// console.log(s3);

// console.log(typeof(s1));
// console.log(typeof(s2));

// 0은 false, 0이외는 참 - 0은 값이 없기 때문이다.
// 문자열도 없으면 false 값이 있으면 true로 인식 
//var s1 = 0;
//var s2 = 1;

// console.log(Boolean(s1));
// console.log(Boolean(s2));

// 공백은 참으로 처리한다.
// var s;
// var t = null;

// console.log(s);
// console.log(t);

// //함수 선언 
// function test(){
//     var myNum = 10;
//     console.log("hi");
//     console.log("함수 안: " +myNum);
// };

// console.log("밖1: "+ myNum);
// //함수 호출
// test();

// console.log("밖2: "+ myNum);

// var과 같지만 중복선언할 수 없음.(개발자 실수 방지)
//let score = 20;
//console.log(score);

// 한번만 바꾸려면 const
//const myName = "홍길동";
// 중복선언 안하려면 let
//let h_age = 28;
//let h_height = 180;

//console.log(myName);
//console.log(h_age);
//console.log(h_height);

//let num1 = 100;
//console.log(num1);

// 함수 안에서는 let을 중복선언할 순 있음.
//function test() {
//   let num1 = 50;
//    console.log(num1);
//}

//test();
//console.log(num1);

//let num1 = 15;
//let num2 = 2;
//let result = num1 + num2;
//console.log(result);

// - * % /

// let t1 = "학교";
// let t2 = 20;
// let t3 = 30;
// console.lot(t1 + t2 +t3);

//복합대입연산자
// let num1 = 0;
// let num2 = 3;
// console.log();

// result = num1;
// result = num1 + num2;
// console.log(result);

// num1 += 20;
// console.log(num1);
let myNum = 1;
const totalNum = 5;
const resetNum = 1;

function numberSetting(){
    document.getElementById("num").innerText = myNum;
}

numberSetting();

// 함수를 사용하면 최적화 가능
document.getElementById("btn_prev").onclick = function() {
    console.log("이전 버튼");
    if(myNum == 1) {
        myNum = totalNum;
    }

    else {
        myNum--;
    }
    
    numberSetting();
    document.getElementById("pic").style.border = "3px solid green";
    document.getElementById("pic").style.borderRadius = "50%";
    document.getElementById("pic").style.opacity = "50%";
    document.getElementById("text_h2").style.color = "green";
    document.getElementById("text_h2").style.marginLeft = "700px";
    document.getElementById("text_h2").style.fontSize = "45px";





};

document.getElementById("next_prev").onclick = function() {
    console.log("다음 버튼");

    if(myNum == totalNum) {
        myNum = 1;
    }

    else {
        myNum++;
    }
    
    numberSetting();
    document.getElementById("pic").style.border = "3px solid blue";
    document.getElementById("pic").style.left = "300px";
    document.getElementById("pic").style.borderRadius = "0%";
    document.getElementById("pic").style.opacity = "100%";
    document.getElementById("text_h2").style.color = "blue";
    document.getElementById("text_h2").style.marginLeft = "900px";
    document.getElementById("text_h2").style.fontSize = "15px";



};

document.getElementById("reset_prev").onclick = function() {
    console.log("다음 버튼");

    if(myNum == resetNum) {
        myNum = 1;
    }

    
    numberSetting();
    document.getElementById("pic").style.border = "3px solid blue";
    document.getElementById("pic").style.left = "0";
    document.getElementById("pic").style.borderRadius = "0%";
    document.getElementById("pic").style.opacity = "100%";
    document.getElementById("text_h2").style.color = "black";
    document.getElementById("text_h2").style.marginLeft = "0";
    document.getElementById("text_h2").style.fontSize = "35px";

    



    
};

/*text하고 이해한 거 훈련하기*/