let navBlock = document.getElementById('main-menu'); 
let navMobile = document.getElementById('main-menu--mobile'); 

let item1Submenu, item2Submenu, item3Submenu;
let item1SubmenuMobile, item2SubmenuMobile, item3SubmenuMobile;


function menuItemGeneration(items) {
    for (i = 0; i < items.length; i++) {                                //desktop material generation
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

        let menuItemContainerMobile = document.createElement('div');          //mobile material generation
        menuItemContainerMobile.setAttribute('class', 'menuItemContainerMobile');
        menuItemContainerMobile.setAttribute('id', `menuItemContainerMobile${i}`); 

        let menuItemMobile = document.createElement('div');
        menuItemMobile.setAttribute('class', 'menuBlockMobile');
        menuItemMobile.setAttribute('id', `menuItemMobile${i}`); 
        menuItemMobile.innerHTML = items[i][0].charAt(0);

        let submenuBlockMobile = document.createElement('div');
        submenuBlockMobile.setAttribute('class', `submenuBlockMobile`);
        submenuBlockMobile.setAttribute('id', `${items[i][0]}SubmenuMobile`);

            for (j = 0; j < items[i][1].length; j++) {
                let submenuItemMobile = document.createElement('div');
                submenuItemMobile.setAttribute('class', 'submenuItemMobile'); 
                submenuItemMobile.setAttribute('id', `submenuItemMobile${j}`); 
                submenuItemMobile.innerHTML = items[i][1][j];
                submenuBlockMobile.append(submenuItemMobile);
            };

        menuItemContainerMobile.append(menuItemMobile);
        navMobile.append(menuItemContainerMobile);
        navMobile.insertAdjacentElement("afterend", submenuBlockMobile);

        if (i == 0) {
            item1Submenu = submenuBlock;
            item1SubmenuMobile = submenuBlockMobile;
        } else if (i == 1) {
            item2Submenu = submenuBlock;
            item2SubmenuMobile = submenuBlockMobile;
        } else if (i == 2) {
            item3Submenu = submenuBlock;
            item3SubmenuMobile = submenuBlockMobile;
        }
    };
};

(function createMenu() {
    
    let menuItems = [['about', ['Biography', 'CV', 'Press Clippings']], ['research', ['Project #1', 'Project #2', 'Project #3', 'Project #4']], ['contact', ['Agent Details', 'Email', 'Social Media']]];
    menuItemGeneration(menuItems);

    //desktop event listeners

    navBlock.addEventListener('click', (e) => {
        if (e.target.id === `menuItem0`) {
            item2Submenu.classList.remove('show'); 
            item3Submenu.classList.remove('show'); 
            item1Submenu.classList.toggle('show');
        }  
    }); 

    navBlock.addEventListener('click', (e) => {
        if (e.target.id === `menuItem1`) {
            item1Submenu.classList.remove('show'); 
            item3Submenu.classList.remove('show'); 
            item2Submenu.classList.toggle('show');
        };
    }); 

    navBlock.addEventListener('click', (e) => {
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
            item1SubmenuMobile.classList.remove('show'); 
            item2SubmenuMobile.classList.remove('show'); 
            item3SubmenuMobile.classList.remove('show'); 
        }
    });

    //mobile event listenrs

    navMobile.addEventListener('click', (e) => {
        if (e.target.id === `menuItemMobile0`) {
            console.log('a');
            item2SubmenuMobile.classList.remove('show--mobile'); 
            item3SubmenuMobile.classList.remove('show--mobile'); 
            item1SubmenuMobile.classList.toggle('show--mobile');      
        };
    }); 

    navMobile.addEventListener('click', (e) => {
        if (e.target.id === `menuItemMobile1`) {
            item1SubmenuMobile.classList.remove('show--mobile'); 
            item3SubmenuMobile.classList.remove('show--mobile'); 
            item2SubmenuMobile.classList.toggle('show--mobile');        
        };
    }); 

    navMobile.addEventListener('click', (e) => {
        if (e.target.id === `menuItemMobile2`) {
            item1SubmenuMobile.classList.remove('show--mobile');             
            item2SubmenuMobile.classList.remove('show--mobile'); 
            item3SubmenuMobile.classList.toggle('show--mobile');        
        };
    }); 

})(); 