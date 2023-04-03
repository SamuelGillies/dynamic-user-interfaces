let slides = [  'https://source.unsplash.com/8H72wMWxj90', 
                'https://source.unsplash.com/So6YckShOVA', 
                'https://source.unsplash.com/m1WZS5ye404',
                'https://source.unsplash.com/hzgs56Ze49s',
                'https://source.unsplash.com/Sj_FOinWBPI'
            ];

let slidesLength = slides.length - 1; 

function createDOM(input, nav) {
    let carousel = document.getElementById('carousel'); 

    let btnPrev = document.createElement('button');
    btnPrev.setAttribute('class', 'carousel-btn prev');
    btnPrev.setAttribute('id', 'prev');
    btnPrev.innerHTML = '<'; 
    let btnNext = document.createElement('button'); 
    btnNext.setAttribute('class', 'carousel-btn next');
    btnNext.setAttribute('id', 'next');
    btnNext.innerHTML = '>'; 

    let slideDeck = document.createElement('div');
    slideDeck.setAttribute('class', 'slideDeck');

    let slideNav = document.createElement('div');
    slideNav.setAttribute('class', 'slideNav');
    slideNav.setAttribute('id', 'slideNav');



    for (i = 0; i < input.length; i++) {
        let imageItem = document.createElement('div');
        imageItem.setAttribute('class', 'slide');
        imageItem.setAttribute('id', `slide${i}`);

        let slideImage = document.createElement('img');
        slideImage.setAttribute('src', input[i]);
        slideImage.setAttribute('id', `image${i}`);

        imageItem.append(slideImage); 
        slideDeck.append(imageItem); 

        let slideNavImage = document.createElement('button');
        slideNavImage.setAttribute('id', `navbutton${i}`);
        slideNavImage.setAttribute('class', `navBtn`);

        slideNav.append(slideNavImage)
    }

    carousel.append(btnPrev,btnNext,slideDeck,slideNav);
}

function eventListeners(i) {
    let btnPrev = document.getElementById('prev'); 
    let btnNext = document.getElementById('next'); 
    let slideNav = document.getElementById('slideNav');

    let index = i; 

    let getSlide = document.getElementById(`slide${index}`);
    getSlide.classList.add('display'); 

    btnPrev.addEventListener('click', (e) => {
        getSlide = document.getElementById(`slide${index}`);
        getSlide.classList.remove('display'); 

        if (index == 0) {
            index = slidesLength; 
        } else {
            index--; 
        };

        let getSlideNew = document.getElementById(`slide${index}`);
        getSlideNew.classList.add('display'); 
    });

    btnNext.addEventListener('click', (e) => {
        getSlide = document.getElementById(`slide${index}`);
        getSlide.classList.remove('display'); 

        if (index == slidesLength) {
            index = 0; 
        } else {
            index++; 
        };

        let getSlideNew = document.getElementById(`slide${index}`);
        getSlideNew.classList.add('display'); 
    });

    slideNav.addEventListener('click', (e) => {

        getNavBtn = document.getElementById(`navbutton${index}`);
        getNavBtn.classList.remove('navBtnSelected'); 

        for (i = 0; i < slides.length; i++) {
            if (e.target.id === `navbutton${i}`) {
                getSlide = document.getElementById(`slide${index}`);
                getSlide.classList.remove('display'); 
                index = i; 
                let getSlideNew = document.getElementById(`slide${index}`);
                getSlideNew.classList.add('display'); 

                e.target.classList.add('navBtnSelected');
            }
        }
    }); 


}

createDOM(slides); 
eventListeners(0);
