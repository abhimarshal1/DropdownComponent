let dropdownElements = document.querySelectorAll('[dropdown]');

dropdownElements.forEach(dropdown => {
    dropdown.querySelector('button').addEventListener('click', (e)=>{
        e.stopPropagation();
        dropdown.classList.toggle('open');
    });
    dropdown.querySelectorAll('li').forEach(li => {
        li.addEventListener('click',(e) => {
            dropdown.querySelector('button').innerText = e.target.innerText;
        })
    })
});

window.addEventListener('click', ()=>{
    document.querySelectorAll('[dropdown].open').forEach(elem => elem.classList.remove('open'));
});