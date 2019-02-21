(function() {

const plus = document.querySelector(".plus"),
    restart = document.querySelector(".restart");
    
const right = [
    document.querySelector(".top"),
    document.querySelector(".bottom"),
    document.querySelector(".topLeft"),
    document.querySelector(".bottomLeft"),
    document.querySelector(".topRight"),
    document.querySelector(".bottomRight"),
    document.querySelector(".center"),
];   

const center = [
    document.querySelector(".top10"),
    document.querySelector(".bottom10"),
    document.querySelector(".topLeft10"),
    document.querySelector(".bottomLeft10"),
    document.querySelector(".topRight10"),
    document.querySelector(".bottomRight10"),
    document.querySelector(".center10"),
];

const left = [
    document.querySelector(".top100"),
    document.querySelector(".bottom100"),
    document.querySelector(".topLeft100"),
    document.querySelector(".bottomLeft100"),
    document.querySelector(".topRight100"),
    document.querySelector(".bottomRight100"),
    document.querySelector(".center100"),
];

let number;

let hundred,
    ten,
    one;

function math() {
    number = number + 1;

    hundred = number / 100;
    hundred = Math.floor(hundred);

    ten =  (number - hundred * 100) / 10;
    ten =  Math.floor(ten);

    one = number - (hundred * 100) - (ten * 10);
    one = Math.ceil(one);
}

function reset() {
    number = 0;
    hundred = 0;
    ten = 0;
    one = 0;
}

function cleanCounter(what) {

    for (let i=0; i<what.length; i++) {
        what[i].classList.remove('show');
    }

}

function showNumber(amount, what) {
    if(amount == 0) {
        what[0].classList.add('show');
        what[1].classList.add('show');
        what[2].classList.add('show');
        what[3].classList.add('show');
        what[4].classList.add('show');
        what[5].classList.add('show');
    } else if(amount == 1) {
        what[4].classList.add('show');
        what[5].classList.add('show');
    } else if(amount == 2) {
        what[0].classList.add('show');
        what[4].classList.add('show');
        what[6].classList.add('show');
        what[3].classList.add('show');
        what[1].classList.add('show');
    } else if(amount == 3) {
        what[0].classList.add('show');
        what[4].classList.add('show');
        what[6].classList.add('show');
        what[5].classList.add('show');
        what[1].classList.add('show');
    } else if(amount == 4) {
        what[4].classList.add('show');
        what[6].classList.add('show');
        what[2].classList.add('show');
        what[5].classList.add('show');
    } else if(amount == 5) {
        what[0].classList.add('show');
        what[2].classList.add('show');
        what[6].classList.add('show');
        what[5].classList.add('show');
        what[1].classList.add('show');
    } else if(amount == 6) {
        what[0].classList.add('show');
        what[2].classList.add('show');
        what[6].classList.add('show');
        what[3].classList.add('show');
        what[1].classList.add('show');
        what[5].classList.add('show');
    } else if(amount == 7) {
        what[0].classList.add('show');
        what[4].classList.add('show');
        what[5].classList.add('show');
    } else if(amount == 8) {
        what[0].classList.add('show');
        what[1].classList.add('show');
        what[2].classList.add('show');
        what[3].classList.add('show');
        what[4].classList.add('show');
        what[5].classList.add('show');
        what[6].classList.add('show');
    }  else if(amount == 9) {
        what[0].classList.add('show');
        what[1].classList.add('show');
        what[2].classList.add('show');
        what[4].classList.add('show');
        what[5].classList.add('show');
        what[6].classList.add('show');
    }
}

number = 0;
reset();
showNumber(one, right);

plus.addEventListener("click", function(e) {   
    cleanCounter(right);
    cleanCounter(center);
    cleanCounter(left);
    math();
    if (number > 999){
        reset();
    }
    showNumber(one, right);
    if( number > 9) {
        showNumber(ten, center);
    }
    if( number > 99) {
        showNumber(hundred, left);
    }
},false);

restart.addEventListener("click", function(e) {   
    cleanCounter(right);
    cleanCounter(center);
    cleanCounter(left);
    reset();
    showNumber(one, right);
},false);
    
// Iphone //
plus.addEventListener("touch", function(e) {   
    cleanCounter(right);
    cleanCounter(center);
    cleanCounter(left);
    math();
    if (number > 999){
        reset();
    }
    showNumber(one, right);
    if( number > 9) {
        showNumber(ten, center);
    }
    if( number > 99) {
        showNumber(hundred, left);
    }
},false);        

restart.addEventListener("touch", function(e) {   
    cleanCounter(right);
    cleanCounter(center);
    cleanCounter(left);
    reset();
    showNumber(one, right);
},false);
          
})();