
document.addEventListener("DOMContentLoaded", () => {
// =========================
// =========================
// Auto-fill Date & Time
// =========================

const reportDate = document.getElementById("reportDate");
const reportTime = document.getElementById("reportTime");

const now = new Date();

if(reportDate){
    reportDate.value = now.toISOString().split("T")[0];
}

if(reportTime){
    reportTime.value = now.toTimeString().slice(0,5);
}
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

    // Step 1 Validation - Vet ID
    if(current === 0){

        const vetId = document.getElementById("vetId");

        const vetPattern = /^VET-[0-9]{3}$/;

        if(!vetPattern.test(vetId.value.trim())){

            alert("Invalid Vet ID. Use format: VET-001");
  return;

        }

    }


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
