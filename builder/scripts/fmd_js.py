js = """
document.addEventListener("DOMContentLoaded", () => {

    console.log("Project BioGuard FMD Wizard Loaded");

    const steps = document.querySelectorAll(".form-step");

    const nextBtn = document.getElementById("nextBtn");

    const prevBtn = document.getElementById("prevBtn");

    const submitBtn = document.getElementById("submitBtn");

    let current = 0;

    function showStep(index){

        steps.forEach((step,i)=>{

            step.style.display =
                i===index ? "block" : "none";

        });

        prevBtn.style.display =
            index===0 ? "none":"inline-block";

        nextBtn.style.display =
            index===steps.length-1 ? "none":"inline-block";

        submitBtn.style.display =
            index===steps.length-1 ? "inline-block":"none";

    }

    nextBtn.addEventListener("click",()=>{

        if(current<steps.length-1){

            current++;

            showStep(current);

        }

    });

    prevBtn.addEventListener("click",()=>{

        if(current>0){

            current--;

            showStep(current);

        }

    });

    showStep(current);

});
"""
