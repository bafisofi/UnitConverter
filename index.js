/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


let checkMode = document.getElementById("mode")
let number =document.getElementById("number")
let actionBtn = document.getElementById("action-btn")


checkMode.addEventListener("click", changeMode);

number.addEventListener("mousewheel", event=>{ 
                    event.target.blur();
                });
                

function changeMode(){
    const result = document.getElementById("result");
    const length = document.getElementById("length");
    const volume = document.getElementById("volume");
    const mass = document.getElementById("mass");
    if (checkMode.checked === true){
        result.classList.replace('light-result','dark-result');
        length.classList.replace('light-conversion','dark-conversion');
        volume.classList.replace('light-conversion','dark-conversion');
        mass.classList.replace('light-conversion','dark-conversion');   
        }
    else{
       result.classList.replace('dark-result','light-result');
       length.classList.replace('dark-conversion','light-conversion');
       volume.classList.replace('dark-conversion','light-conversion');
       mass.classList.replace('dark-conversion','light-conversion');    
    }    
}

actionBtn.addEventListener('click',() => { 
    if(number.value.trim()!==""){
        conversionLength(number.value);
        conversionVolume(number.value);
        conversionMass(number.value);
    }
});


function conversionLength(input) {
    const toMeter= (input/3.281).toFixed(3);
    const toFeet = (input*3.281).toFixed(3);
    const resultLength = document.getElementById("result-length")
    resultLength.textContent=`${input} meters = ${toFeet} feet | ${input} feet = ${toMeter} meters`
}


function conversionVolume(input) {
    const toLiter = (input/0.264).toFixed(3);
    const toGallon= (input*0.264).toFixed(3);
    const resultVolume = document.getElementById("result-volume")
    resultVolume.textContent=`${input} liters = ${toGallon} gallons | ${input} gallons = ${toLiter} liters`
}


function conversionMass(input) {
    const toKilogram = (input/2.204).toFixed(3);
    const toPounds= (input*2.204).toFixed(3);
    const resultMass = document.getElementById("result-mass")
    resultMass.textContent=`${input} kilos = ${toPounds} pounds | ${input} pounds = ${toKilogram} kilos`
}
