let navBlock = document.getElementById('main-menu'); 
let item1Submenu, item2Submenu, item3Submenu;

function menuItemGeneration(items) {
    for (i = 0; i < items.length; i++) {
        let menuItemContainer = document.createElement('div');
        menuItemContainer.setAttribute('class', 'menuItemContainer');
        menuItemContainer.setAttribute('id', `menuItemContainer${i}`); 
        let menuItem = document.createElement('div');
        menuItem.setAttribute('class', 'menuBlock');
        menuItem.setAttribute('id', `menuItem${i}`); 
        menuItem.innerHTML = items[i][0];

        let submenuBlock = document.createElement('div');
        submenuBlock.setAttribute('class', `submenuBlock`);
        submenuBlock.setAttribute('id', `${items[i][0]}Submenu`);

            for (j = 0; j < items[i][1].length; j++) {
                let submenuItem = document.createElement('div');
                submenuItem.setAttribute('class', 'submenuItem'); 
                submenuItem.setAttribute('id', `submenuItem${j}`); 
                submenuItem.innerHTML = items[i][1][j];
                submenuBlock.append(submenuItem);
            };
        menuItemContainer.append(menuItem,submenuBlock);
        navBlock.append(menuItemContainer);

        if (i == 0) {
            item1Submenu = submenuBlock
        } else if (i == 1) {
            item2Submenu = submenuBlock
        } else if (i == 2) {
            item3Submenu = submenuBlock
        }
    };
};

(function createMenu() {
    
    let menuItems = [['about', ['Biography', 'CV', 'Press Clippings']], ['research', ['Project #1', 'Project #2', 'Project #3', 'Project #4']], ['contact', ['Agent Details', 'Email', 'Social Media']]];
    menuItemGeneration(menuItems);

    navBlock.addEventListener('click', (e) => {
        let item1Submenu = document.getElementById(`aboutSubmenu`); 
        if (e.target.id === `menuItem0`) {
            item2Submenu.classList.remove('show'); 
            item3Submenu.classList.remove('show'); 
            item1Submenu.classList.toggle('show');
        }  
    }); 

    navBlock.addEventListener('click', (e) => {
        let item2Submenu = document.getElementById(`researchSubmenu`); 
        if (e.target.id === `menuItem1`) {
            item1Submenu.classList.remove('show'); 
            item3Submenu.classList.remove('show'); 
            item2Submenu.classList.toggle('show');
        };
    }); 

    navBlock.addEventListener('click', (e) => {
        let item3Submenu = document.getElementById(`contactSubmenu`); 
        if (e.target.id === `menuItem2`) {
            item1Submenu.classList.remove('show');             
            item2Submenu.classList.remove('show'); 
            item3Submenu.classList.toggle('show');
        };
    }); 

    window.addEventListener('click', (e) => {
        if (!e.target.matches('#menuItem0, #menuItem1, #menuItem2')) {
            item1Submenu.classList.remove('show'); 
            item2Submenu.classList.remove('show'); 
            item3Submenu.classList.remove('show'); 
        }
    });

})(); 