const $arrowNext = document.querySelector(".arrow-next");
let $videos1 = document.querySelectorAll(".video1");
const $videos2 = document.querySelectorAll(".video2");
const $arrowBefore = document.querySelector(".arrow-before");

$arrowBefore.classList.add("notVisibleSearch");
$arrowNext.addEventListener("click", () => {
    $videos1.forEach($video1 => {
        $video1.classList.add("notVisibleSearch");
        $arrowNext.classList.add("notVisibleSearch");
        $arrowBefore.classList.remove("notVisibleSearch");

    })
})

$arrowBefore.addEventListener("click", () => {
    $videos1.forEach($video1 => {
        $video1.classList.remove("notVisibleSearch");
        $arrowNext.classList.remove("notVisibleSearch");
        $arrowBefore.classList.add("notVisibleSearch");
    })
})

// for big img -> to change the src
const $arrowsBtn = document.querySelectorAll('#large-img');
const $fullImg = document.querySelector(".display-full-img");
const $btnWatchImg = document.querySelector(".full-img-watchbtn");
const $btnTeaseImg = document.querySelector(".full-img-teasebtn");
const txtLargeImg = document.querySelector(".txt-search-large");
console.log($fullImg);
$arrowsBtn.forEach($arrowBtn => {
    $arrowBtn.addEventListener("click", () => {
        $fullImg.classList.toggle("visible");
        $btnWatchImg.classList.toggle("visible");
        $btnTeaseImg.classList.toggle("visible");
        txtLargeImg.classList.toggle("visible");
    })
})