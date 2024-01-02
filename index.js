let intro = document.querySelector(".intro");
let logoHeader = document.querySelector(".logo-header");
let logos = document.querySelectorAll(".logo");
let taskbar = document.querySelector(".flex-container");

//intersection observer
//fires function when element visibility changes
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            //target is the 
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    })
}) 
const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));

const portfolio = ()=>{
    window.location.href = "./assets/files/portfolio.html";
}

/*
var lines = $(".line");
var middleLine = $(".first-line");
var center = $(".center-new");

var clicked = false;

center.on("click", ()=>{
    if(clicked === false){
        lines.addClass("fadeUp");
        middleLine.addClass("dissappear");
        setTimeout(()=>{
            middleLine.css("display", "none");
            lines.addClass("cross");
        }, 400);
        clicked = true;
    }else{
        lines.addClass("crossBack");
        setTimeout(()=>{
            middleLine.css("display", "block");
            middleLine.addClass("reappear");
            lines.addClass("fadeBack");
        }, 320);

        setTimeout(()=>{
            lines.removeClass("fadeUp fadeBack cross crossBack dissappear reappear");
        }, 700);

        clicked = false;
    }    
});
*/

const handleLoad = () =>{
        setTimeout(()=>{
            logos.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.add("active");
                }, (idx + 1) * 400)
            });
    
            setTimeout(()=>{
                logos.forEach((span, idx)=>{
                    setTimeout(()=>{
                        span.classList.remove("active");
                        span.classList.add("fade");
                    }, (idx + 1) * 400)
                    
                });
            }, 2000);
    
            setTimeout(()=>{
                intro.style.top = "-100vh";
            }, 2300)
        });
}

window.onload = () =>{
    handleLoad();
    /*
    if(localStorage.getItem("hasCodeRunBefore") == null){
        

        setTimeout(()=>{
            localStorage.setItem("hasCodeRunBefore", true);
        },4300);
        
        
    } else{
        intro.style.display = "none";
    }*/
};