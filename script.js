let item1 = document.getElementById('item1');

function submenuItemGeneration(items) {
    let submenu = document.createElement('div');
    submenu.setAttribute('class', 'submenuContainer');
    submenu.setAttribute('id', 'submenuContainer');

    for (i = 0; i < items.length; i++) {
        let submenuItem = document.createElement('div');
        submenuItem.setAttribute('class', 'submenuBlock');
        submenuItem.innerHTML = items[i];
        submenuItem.setAttribute('class', 'submenuItem'); 
        submenuItem.setAttribute('id', `submenuItem${i}`); 
        submenu.append(submenuItem);
    }

    item1.append(submenu); 
}

submenuItemGeneration(['item1', 'item2', 'item3']); 

let submenu = document.getElementById('submenuContainer')

item1.addEventListener('click', (e) => {
    submenu.classList.toggle('show'); 
}); 

window.addEventListener('click', (e) => {
    if (!e.target.matches('#item1')) {
        submenu.classList.remove('show'); 
    }
});
