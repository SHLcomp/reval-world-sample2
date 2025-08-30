const bar = document.getElementById('menuBar');
const dropdownMenu = document.getElementsByClassName('dropdown');

bar.addEventListener('click', ()=>{
    dropdownMenu.style.display = 'flex';
    console.log("heyy")
})