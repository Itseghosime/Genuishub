// Mrs. Whyte's Dynamics
var cardWhyte = document.querySelector('.card__body--isimeme');
var modalWhyte = document.querySelector('.modal__wrapper--whyte');
var docBody = document.querySelector('body');

cardWhyte.addEventListener('click', handlePopUpWhyte)

function handlePopUpWhyte(e) {
    e.preventDefault();
    modalWhyte.classList.add('show__modal');
    docBody.style.overflowY = "hidden";
}

const removeModalWhyte = () => {
    window.addEventListener('click', (e) => {
        if(e.target === modalWhyte) {
            modalWhyte.classList.remove('show__modal');
            docBody.style.overflowY = "scroll";
        }
    })
}
removeModalWhyte();
// Mrs. Whyte dynamics ends here

// Mrs. Obechi dynamics starts here
var cardObechi = document.querySelector('.card__body--obechi');
var modalObechi = document.querySelector('.modal__wrapper--obechi');


cardObechi.addEventListener('click', (e) => {
    e.preventDefault();
    modalObechi.classList.add('show__modal');
    docBody.style.overflowY = "hidden";
})

const removeModalObechi = () => {
    window.addEventListener('click', (e) => {
        if(e.target === modalObechi) {
            modalObechi.classList.remove('show__modal');
            docBody.style.overflowY = "scroll";
        }
    })
}
removeModalObechi();
// Mrs Obechi dynamics ends here

// Mr. Salem dynamics starts here
var cardOSalem = document.querySelector('.card__body--salem');
var modalSalem = document.querySelector('.modal__wrapper--salem');


cardOSalem.addEventListener('click', (e) => {
    e.preventDefault();
    modalSalem.classList.add('show__modal');
    docBody.style.overflowY = "hidden";
})

const removeModalSalem = () => {
    window.addEventListener('click', (e) => {
        if(e.target === modalSalem) {
            modalSalem.classList.remove('show__modal');
            docBody.style.overflowY = "scroll";
        }
    })
}
removeModalSalem();
// Mr. Salem dunamics starts here

// Mr. Kaleb
var cardKaleb = document.querySelector('.card__body--kaleb');
var modalKaleb = document.querySelector('.modal__wrapper--kaleb');


cardKaleb.addEventListener('click', (e) => {
    e.preventDefault();
    modalKaleb.classList.add('show__modal');
    docBody.style.overflowY = "hidden";
});

const removeModalKaleb = () => {
    window.addEventListener('click', (e) => {
        if(e.target === modalKaleb) {
            modalKaleb.classList.remove('show__modal');
            docBody.style.overflowY = "scroll";
        }
    })
}
removeModalKaleb();
// Mr. Kaleb

// Benjamin 
var cardBen = document.querySelector('.card__body--ben');
var modalBen = document.querySelector('.modal__wrapper--ben');

cardBen.addEventListener('click', (e) => {
    e.preventDefault();
    modalBen.classList.add('show__modal');
    docBody.style.overflowY = 'hidden';
});

const removeModalBen = () => {
    window.addEventListener('click', (e) => {
        if(e.target === modalBen) {
            modalBen.classList.remove('show__modal');
            docBody.style.overflowY = 'scroll';
        }
    })
}
removeModalBen();
// Ben code ends here

// Mrs. Ade code starts here
var cardAde = document.querySelector('.card__body--ade');
var modalAde = document.querySelector('.modal__wrapper--ade');

cardAde.addEventListener('click', (e) => {
    e.preventDefault();
    modalAde.classList.add('show__modal');
    docBody.style.overflowY = 'hidden';
});

const removeModalAde = () => {
    window.addEventListener('click', (e) => {
        if(e.target === modalAde) {
            modalAde.classList.remove('show__modal');
            docBody.style.overflowY = 'scroll';
        }
    })
}
removeModalAde();