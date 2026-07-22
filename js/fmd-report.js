
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
// =========================
// Load Nigerian States
// =========================

const state = document.getElementById("state");

const nigeriaStates =
referenceData.locations.states;


if(state){

    nigeriaStates.forEach(s => {

        const option = document.createElement("option");

        option.value = s;

        option.textContent = s;

        state.appendChild(option);

    });

}
// =========================
// Populate LGAs
// =========================

const lga =
document.getElementById("lga");

if(state && lga){

    state.addEventListener("change",()=>{

        lga.innerHTML =
        '<option value="">Select LGA</option>';

        const selectedState =
        state.value;

        if(!selectedState){

            return;

        }

        const lgas =
        referenceData.locations.lgas[selectedState] || [];

        lgas.forEach(name=>{

            const option =
            document.createElement("option");

            option.value = name;

            option.textContent = name;

            lga.appendChild(option);

        });

    });

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

    // Step 2 Validation - Farm Information
    if(current === 1){

        const farmName = document.getElementById("farmName");
        const farmOwner = document.getElementById("farmOwner");
        const state = document.getElementById("state");
        const lga = document.getElementById("lga");
        const community = document.getElementById("community");

        if(!farmName.value.trim()){

            alert("Please enter the Farm Name.");

            return;

        }

        if(!farmOwner.value.trim()){

            alert("Please enter the Farm Owner / Manager.");

            return;

        }

        if(!state.value){

            alert("Please select the State.");

            return;

        }

        if(!lga.value){

            alert("Please select the LGA.");

            return;

        }

        if(!community.value.trim()){

            alert("Please enter the Community / Village.");

            return;

        }

    }

    // Step 3 Validation - Animal Information
    if(current === 2){

        const species = document.getElementById("species");

        if(!species.value){

            alert("Please select the animal species.");

            return;

        }
const breed = document.getElementById("breed");

if(!breed.value){

    alert("Please select the breed.");

    return;

}

    const ageGroup = document.getElementById("ageGroup");

    if(!ageGroup.value){

        alert("Please select the age group.");

        return;

    }
    const animalsAtRisk = document.getElementById("animalsAtRisk");

    if(animalsAtRisk.value === ""){

        alert("Please enter the number of Animals At Risk.");

        return;

    }

    if(Number(animalsAtRisk.value) < 0){

        alert("Animals At Risk cannot be negative.");

        return;

    }
    const animalsSick = document.getElementById("animalsSick");

    if(animalsSick.value === ""){

        alert("Please enter the number of Animals Sick.");

        return;

    }

    if(Number(animalsSick.value) < 0){

        alert("Animals Sick cannot be negative.");

        return;

    }
    const animalsDead = document.getElementById("animalsDead");

    if(animalsDead.value === ""){

        alert("Please enter the number of Animals Dead.");

        return;

    }

if(Number(animalsDead.value) < 0){

    alert("Animals Dead cannot be negative.");

    return;

}
// Data Integrity Check 1
if(Number(animalsSick.value) > Number(animalsAtRisk.value)){

    alert("Animals Sick cannot exceed Animals At Risk.");

    return;

}
// Data Integrity Check 2
if(Number(animalsDead.value) > Number(animalsSick.value)){

    alert("Animals Dead cannot exceed Animals Sick.");

    return;

}
// Data Integrity Check 3
if(Number(animalsDead.value) > Number(animalsAtRisk.value)){

    alert("Animals Dead cannot exceed Animals At Risk.");

    return;

}
  }

// Step 4 Validation - Clinical Signs
if(current === 3){

    const signs = [

        document.getElementById("fever"),
        document.getElementById("salivation"),
        document.getElementById("mouthLesions"),
        document.getElementById("footLesions"),
        document.getElementById("teatLesions"),
        document.getElementById("lameness"),
        document.getElementById("lossAppetite"),
        document.getElementById("reducedMilk")

    ];

    const hasClinicalSign = signs.some(sign => sign.checked);

    if(!hasClinicalSign){

        alert("Please select at least one clinical sign.");

        return;

    }
    const mouthSeverity =
        document.getElementById("mouthSeverity");

    if(
        document.getElementById("mouthLesions").checked &&
        !mouthSeverity.value
    ){

        alert("Please select the Mouth Lesion Severity.");

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
