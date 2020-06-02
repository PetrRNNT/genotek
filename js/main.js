let coll = document.getElementsByClassName('intro__desc');
let inputName = document.getElementById('input__change-name')
let inputPass = document.getElementById('input__change-pass')
let inputNameIco = document.querySelector('.login-form-name-ico')
let inputPassIco = document.querySelector('.login-form-pass-ico')

for (let i = 0; i < coll.length; i++) {
coll[i].addEventListener('click', function() {
    this.classList.toggle('active')
    let arrowDesc = this.lastElementChild;
    arrowDesc.classList.toggle('rotate')
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = '100%'
    }
})
}

// Open Ico field name
const showName = () => {
    inputNameIco.style.display = "block";
}
inputName.addEventListener('keyup', (e) => {
    if(e.target.value){
        showName()
    }
})

// Open Ico field pass
const showPass = () => {
    inputPassIco.style.display = "block";
}
inputPass.addEventListener('keyup', (e) => {
    if(e.target.value){
        showPass()
    }
})

// Handler Event click
inputNameIco.addEventListener('click', ()=>{
    inputName.value = '';
    inputNameIco.style.display = "none";
})

inputPassIco.addEventListener('click', ()=>{
    inputPass.value = '';
    inputPassIco.style.display = "none";
})

// Close Ico field name
const showNameClear = () => {
    inputNameIco.style.display = "none";
}
inputName.addEventListener('blur', (e) => {
    if(e.target.value === ''){
        showNameClear()
    }
})

// Close Ico field pass
const showPassClear = () => {
    inputPassIco.style.display = "none";
}
inputPass.addEventListener('blur', (e) => {
    if(e.target.value === ''){
        showPassClear()
    }
})