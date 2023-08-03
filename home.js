//how to connect the next and prev btn with the product container//
// select all product containers using query selector all method//

const stuffproducts = [...document.querySelectorAll('.stuff-product')];
const nxtbtn = [...document.querySelectorAll('.next-btn')];
const prev = [...document.querySelectorAll('.prev-btn')];


//now loop through each card using forEach method//


stuffproducts.forEach((items, i) => {
    //store the card dimension thru items//
    //store the stuff width to the stuff dimension//
    let stuffDimension = items.getBoundingClientRect();
    let stuffWidth = stuffDimension.width;
    
    //now add click event to next button of the current index
    //ncrease item scroll left value to stuff width
    nxtbtn[i].addEventListener('click', () =>{
        items.scrollLeft += stuffWidth;
    })
    //now do same thing with prev but decrement the item scroll left variable
    //to the stuff width//
    prev[i].addEventListener('click', () =>{
        items.scrollLeft -= stuffWidth;
    })
})