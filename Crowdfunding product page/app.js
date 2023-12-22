const bookmarkEl = document.getElementById("content-first-content-btn-div-second-btn");

// bookmark active
let a = true;
bookmarkEl.addEventListener("click", () => {
    if (a) {
        bookmarkEl.style.color = "white";
        bookmarkEl.style.backgroundColor = "rgb(65, 170, 104)";
        a = false;
    }
    else {
        bookmarkEl.style.color = "gray";
        bookmarkEl.style.backgroundColor = "rgb(239, 238, 233)"
        a = true;
    }
});

// popup 
const selectRevardOne = document.getElementById("select-reward-one");
const selectRevardTwo = document.getElementById("select-reward-two");
const headerEl = document.getElementById("header");
const containerEl = document.getElementById("container");
const popupAll = document.getElementById("p-all");
const closeModal = document.getElementById("close-modal");
selectRevardOne.addEventListener("click", () => {
    popupAll.style.display = "flex";
    popupAll.style.position = "absolute";
    popup_Loc = window.scrollY
    popupAll.style.top = `${900
        }px`;
    popupAll.style.right = "2%";
    popupAll.style.left = "2%";
    headerEl.style.opacity = "20 % ";
    containerEl.style.opacity = "20%";
    closeModal.addEventListener("click", () => {
        popupAll.style.display = "none";
        headerEl.style.opacity = "100 % ";
        containerEl.style.opacity = "100%";
    })
});
selectRevardTwo.addEventListener("click", () => {
    popupAll.style.display = "flex";
    popupAll.style.position = "absolute";
    popup_Loc = window.scrollY
    popupAll.style.top = `${900
        }px`;
    popupAll.style.right = "2%";
    popupAll.style.left = "2%";
    headerEl.style.opacity = "20 % ";
    containerEl.style.opacity = "20%";
    closeModal.addEventListener("click", () => {
        popupAll.style.display = "none";
        headerEl.style.opacity = "100 % ";
        containerEl.style.opacity = "100%";
    })
});
let popup_Loc;
document.addEventListener("scroll", (e) => {
    popup_Loc = window.scrollY;
    popupAll.style.top = `${900
        }px`;
});

// cash click

const popupSecond = document.getElementById("p-s-f");
const popupThree = document.getElementById("p-three-f");
const popupFour = document.getElementById("p-four-f");


const cashScreenOne = document.getElementById("cash-screen-one");
const cashScreenTwo = document.getElementById("cash-screen-two");
const cashScreenThree = document.getElementById("cash-screen-three");

let fe = true;
let fa = true;
let fu = true;
let fi = true;
const checkOne = document.getElementById("p-s-f-check");
const checkTwo = document.getElementById("p-three-check");
const checkThree = document.getElementById("p-four-check");


popupSecond.addEventListener("click", () => {
    if (!fe) {
        checkOne.style.background = "white"
        cashScreenOne.style.display = "none";
        fe = true;


    }
    else if (fe) {
        checkOne.style.background = "rgb(58, 179, 139)"
        cashScreenOne.style.display = "flex";
        fe = false;
    }
    cashScreenThree.style.display = "none";
    checkThree.style.background = "white";
    cashScreenTwo.style.display = "none";
    checkTwo.style.background = "white"
    fa = true;
    fu = true;
})
popupThree.addEventListener("click", () => {
    if (!fa) {
        checkTwo.style.background = "white"
        cashScreenTwo.style.display = "none";
        fa = true;

    }
    else if (fa) {
        checkTwo.style.background = "rgb(58, 179, 139)"
        cashScreenTwo.style.display = "flex";
        fa = false;

    }
    cashScreenThree.style.display = "none";
    checkThree.style.background = "white";
    cashScreenOne.style.display = "none";
    checkOne.style.background = "white"
    fe = true;
    fu = true;
})
popupFour.addEventListener("click", () => {
    if (!fu) {
        checkThree.style.background = "white"
        cashScreenThree.style.display = "none";
        fu = true;

    }
    else if (fu) {
        checkThree.style.background = "rgb(58, 179, 139)"
        cashScreenThree.style.display = "flex";
        fu = false;
    }
    cashScreenTwo.style.display = "none";
    checkTwo.style.background = "white";
    cashScreenOne.style.display = "none";
    checkOne.style.background = "white"
    fa = true;
    fe = true;
})


const cashInputOne = document.getElementById("cash-input-one");
const cashInputTwo = document.getElementById("cash-input-two");
const cashInputThree = document.getElementById("cash-input-three");

const continueBtnOne = document.getElementById("continue-btn-one");
const continueBtnTwo = document.getElementById("continue-btn-two");
const continueBtnThree = document.getElementById("continue-btn-three");

let inputAr = [cashInputOne, cashInputTwo, cashInputThree];
let btnAr = [continueBtnOne, continueBtnTwo, continueBtnThree];
const warnOne = document.getElementById("uyari-one");
const warnTwo = document.getElementById("uyari-two");
const warnThree = document.getElementById("uyari-three");

const finishDiv = document.getElementById("succes")
const finishBtn = document.getElementById("succes-btn");
let cashScreenAr = [cashScreenOne, cashScreenTwo, cashScreenThree];
let checkAr = [checkOne, checkTwo, checkThree];
let warnAr = [warnOne, warnTwo, warnThree];

let cash_final = 0;

const line = document.getElementById("line");

for (let i = 0; i < 3; i++) {
    btnAr[i].addEventListener("click", () => {
        if (inputAr[i].value == "") {
            warnAr[i].style.display = "block";

        }
        else {

            let cash = inputAr[i].value;
            let cash_two = cash * 100 / 100000;
            cash_final += cash_two
            console.log(cash_final)
            warnAr[i].style.display = "none"
            finishDiv.style.display = "flex";
            popupAll.style.display = "none";
            finishBtn.addEventListener("click", () => {
                headerEl.style.opacity = "100 % ";
                containerEl.style.opacity = "100%";
                finishDiv.style.display = "none";
                inputAr[i].value = "";
                cashScreenAr[i].style.display = "none";
                checkAr[i].style.background = "white";
                line.style.width = `${cash_final}%`
            });
        }
    })
}