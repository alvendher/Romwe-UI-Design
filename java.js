const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})


const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }
    
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

// Gallery Item Filter

const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".gallery-portfolio").children;

for (let i=0; i < filterButtons.length; i++){
    filterButtons[i].addEventListener("click", function () {
        for(let j = 0; j < filterButtons.length; j++){
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target")

        for(let k = 0; k < items.length; k++){
            items[k].style.display = "none";
            if(target == items[k].getAttribute("data-id")){
                items[k].style.display = "block";         
            
            }
            if(target == "All"){
                items[k].style.display = "block";
            }
        }
    })
}