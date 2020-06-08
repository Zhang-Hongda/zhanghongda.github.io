let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
myButton.onclick = function() {
    setUserName();
}
let myHeading = document.querySelector('h1');


myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/高木同学.png') {
        myImage.setAttribute('src', 'images/头像.png');
    } else {
        myImage.setAttribute('src', 'images/高木同学.png');
    }
}

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
    }
}