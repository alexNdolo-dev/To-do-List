let listEL =document.getElementById('list')
let inputValue = document.getElementById('inputValue')
let btnEl = document.getElementById('btn')


btnEl.addEventListener('click', function(){
   if(inputValue.value === ''){
    alert('Please enter a task')
    return
   } 
    let liEl = document.createElement('li')
    liEl.innerHTML = inputValue.value + " "
    listEL.appendChild(liEl)
    inputValue.value = ''

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'DELETE'
    deleteBtn.addEventListener('click', function(e){
        e.stopPropagation()
        liEl.remove()
    })
    liEl.appendChild(deleteBtn)

    liEl.addEventListener('click', function(){
        liEl.classList.toggle('done')
    })

})
 