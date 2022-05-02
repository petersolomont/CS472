const storageInput = document.querySelector('.tasks')
const text= document.querySelector('.task');
const button = document.querySelector('.btn1');
storageInput.addEventListener('input',letter=>{
    text.textContent = letter.target.value
})
const saveToLocal= ()=>{
    localStorage.setItem(textinput)
}