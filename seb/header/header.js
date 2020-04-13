const $linksHead = document.querySelectorAll(".nav-first");
const $logoHeader = document.querySelector(".header-logo");

const ActivelinkHead = () => {
    const onLinkHead = document.querySelector(".active-link-head");
    if (onLinkHead) {
        onLinkHead.classList.remove("active-link-head");
    }
}

$linksHead.forEach($linkHead => {
    $linkHead.addEventListener("click", () => {
        ActivelinkHead();
        $linkHead.classList.add("active-link-head");
    })
})

$logoHeader.addEventListener("click", ()=> {
    ActivelinkHead();
    $linksHead[0].classList.add("active-link-head");
})