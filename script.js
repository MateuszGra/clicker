(function() {

const plus = document.querySelector(".plus"),
    restart = document.querySelector(".restart"),
    
    top = document.querySelector(".top"),
    bottom = document.querySelector(".bottom"),
    topLeft = document.querySelector(".topLeft"),
    bottomLeft = document.querySelector(".bottomLeft"),
    topRight = document.querySelector(".topRight"),
    bottomRight = document.querySelector(".bottomRight"),
    center = document.querySelector(".center"),
    top10 = document.querySelector(".top10"),
    bottom10 = document.querySelector(".bottom10"),
    topLeft10 = document.querySelector(".topLeft10"),
    bottomLeft10 = document.querySelector(".bottomLeft10"),
    topRight10 = document.querySelector(".topRight10"),
    bottomRight10 = document.querySelector(".bottomRight10"),
    center10 = document.querySelector(".center10"),
    top100 = document.querySelector(".top100"),
    bottom100 = document.querySelector(".bottom100"),
    topLeft100 = document.querySelector(".topLeft100"),
    bottomLeft100 = document.querySelector(".bottomLeft100"),
    topRight100 = document.querySelector(".topRight100"),
    bottomRight100 = document.querySelector(".bottomRight100"),
    center100 = document.querySelector(".center100");

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

function CleanCounter() {
    top.classList.remove('show');
    bottom.classList.remove('show');
    topLeft.classList.remove('show');
    bottomLeft.classList.remove('show');
    topRight.classList.remove('show');
    bottomRight.classList.remove('show');
    center.classList.remove('show');
    
    top10.classList.remove('show');
    bottom10.classList.remove('show');
    topLeft10.classList.remove('show');
    bottomLeft10.classList.remove('show');
    topRight10.classList.remove('show');
    bottomRight10.classList.remove('show');
    center10.classList.remove('show');

    top100.classList.remove('show');
    bottom100.classList.remove('show');
    topLeft100.classList.remove('show');
    bottomLeft100.classList.remove('show');
    topRight100.classList.remove('show');
    bottomRight100.classList.remove('show');
    center100.classList.remove('show');
}

function showNumberOne() {
    if(one == 0) {
        top.classList.add('show');
        bottom.classList.add('show');
        topLeft.classList.add('show');
        bottomLeft.classList.add('show');
        topRight.classList.add('show');
        bottomRight.classList.add('show');
    } else if(one == 1) {
        topRight.classList.add('show');
        bottomRight.classList.add('show');
    } else if(one == 2) {
        top.classList.add('show');
        topRight.classList.add('show');
        center.classList.add('show');
        bottomLeft.classList.add('show');
        bottom.classList.add('show');
    } else if(one == 3) {
        top.classList.add('show');
        topRight.classList.add('show');
        center.classList.add('show');
        bottomRight.classList.add('show');
        bottom.classList.add('show');
    } else if(one == 4) {
        topRight.classList.add('show');
        center.classList.add('show');
        topLeft.classList.add('show');
        bottomRight.classList.add('show');
    } else if(one == 5) {
        top.classList.add('show');
        topLeft.classList.add('show');
        center.classList.add('show');
        bottomRight.classList.add('show');
        bottom.classList.add('show');
    } else if(one == 6) {
        top.classList.add('show');
        topLeft.classList.add('show');
        center.classList.add('show');
        bottomRight.classList.add('show');
        bottom.classList.add('show');
        bottomLeft.classList.add('show')
    } else if(one == 7) {
        top.classList.add('show');
        topRight.classList.add('show');
        bottomRight.classList.add('show');
    } else if(one == 8) {
        top.classList.add('show');
        bottom.classList.add('show');
        topLeft.classList.add('show');
        bottomLeft.classList.add('show');
        topRight.classList.add('show');
        bottomRight.classList.add('show');
        center.classList.add('show');
    }  else if(one == 9) {
        top.classList.add('show');
        bottom.classList.add('show');
        topLeft.classList.add('show');
        topRight.classList.add('show');
        bottomRight.classList.add('show');
        center.classList.add('show');
    }
}

function showNumberTen() {
    if(ten == 0) {
        top10.classList.add('show');
        bottom10.classList.add('show');
        topLeft10.classList.add('show');
        bottomLeft10.classList.add('show');
        topRight10.classList.add('show');
        bottomRight10.classList.add('show');
    } else if(ten == 1) {
        topRight10.classList.add('show');
        bottomRight10.classList.add('show');
    } else if(ten == 2) {
        top10.classList.add('show');
        topRight10.classList.add('show');
        center10.classList.add('show');
        bottomLeft10.classList.add('show');
        bottom10.classList.add('show');
    } else if(ten == 3) {
        top10.classList.add('show');
        topRight10.classList.add('show');
        center10.classList.add('show');
        bottomRight10.classList.add('show');
        bottom10.classList.add('show');
    } else if(ten == 4) {
        topRight10.classList.add('show');
        center10.classList.add('show');
        topLeft10.classList.add('show');
        bottomRight10.classList.add('show');
    } else if(ten == 5) {
        top10.classList.add('show');
        topLeft10.classList.add('show');
        center10.classList.add('show');
        bottomRight10.classList.add('show');
        bottom10.classList.add('show');
    } else if(ten == 6) {
        top10.classList.add('show');
        topLeft10.classList.add('show');
        center10.classList.add('show');
        bottomRight10.classList.add('show');
        bottom10.classList.add('show');
        bottomLeft10.classList.add('show')
    } else if(ten == 7) {
        top10.classList.add('show');
        topRight10.classList.add('show');
        bottomRight10.classList.add('show');
    } else if(ten == 8) {
        top10.classList.add('show');
        bottom10.classList.add('show');
        topLeft10.classList.add('show');
        bottomLeft10.classList.add('show');
        topRight10.classList.add('show');
        bottomRight10.classList.add('show');
        center10.classList.add('show');
    }  else if(ten == 9) {
        top10.classList.add('show');
        bottom10.classList.add('show');
        topLeft10.classList.add('show');
        topRight10.classList.add('show');
        bottomRight10.classList.add('show');
        center10.classList.add('show');
    }
}

function showNumberHundred() {
    if(hundred == 0) {
        top100.classList.add('show');
        bottom100.classList.add('show');
        topLeft100.classList.add('show');
        bottomLeft100.classList.add('show');
        topRight100.classList.add('show');
        bottomRight100.classList.add('show');
    } else if(hundred == 1) {
        topRight100.classList.add('show');
        bottomRight100.classList.add('show');
    } else if(hundred == 2) {
        top100.classList.add('show');
        topRight100.classList.add('show');
        center100.classList.add('show');
        bottomLeft100.classList.add('show');
        bottom100.classList.add('show');
    } else if(hundred == 3) {
        top100.classList.add('show');
        topRight100.classList.add('show');
        center100.classList.add('show');
        bottomRight100.classList.add('show');
        bottom100.classList.add('show');
    } else if(hundred == 4) {
        topRight100.classList.add('show');
        center100.classList.add('show');
        topLeft100.classList.add('show');
        bottomRight100.classList.add('show');
    } else if(hundred == 5) {
        top100.classList.add('show');
        topLeft100.classList.add('show');
        center100.classList.add('show');
        bottomRight100.classList.add('show');
        bottom100.classList.add('show');
    } else if(hundred == 6) {
        top100.classList.add('show');
        topLeft100.classList.add('show');
        center100.classList.add('show');
        bottomRight100.classList.add('show');
        bottom100.classList.add('show');
        bottomLeft100.classList.add('show')
    } else if(hundred == 7) {
        top100.classList.add('show');
        topRight100.classList.add('show');
        bottomRight100.classList.add('show');
    } else if(hundred == 8) {
        top100.classList.add('show');
        bottom100.classList.add('show');
        topLeft100.classList.add('show');
        bottomLeft100.classList.add('show');
        topRight100.classList.add('show');
        bottomRight100.classList.add('show');
        center100.classList.add('show');
    }  else if(hundred == 9) {
        top100.classList.add('show');
        bottom100.classList.add('show');
        topLeft100.classList.add('show');
        topRight100.classList.add('show');
        bottomRight100.classList.add('show');
        center100.classList.add('show');
    }
}

number = 0;
reset();
showNumberOne();

plus.addEventListener("click", function(e) {   
    CleanCounter();
    math();
    if (number > 999){
        reset();
    }
    showNumberOne();
    if( number > 9) {
    showNumberTen();
    }
    if( number > 99) {
    showNumberHundred();
    }
},false);

restart.addEventListener("click", function(e) {   
    CleanCounter();
    reset();
    showNumberOne();
},false);
    
// Iphone //
plus.addEventListener("touch", function(e) {   
    CleanCounter();
    math();
    if (number > 999){
        reset();
    }
    showNumberOne();
    if( number > 9) {
    showNumberTen();
    }
    if( number > 99) {
    showNumberHundred();
    }
},false);        

restart.addEventListener("touch", function(e) {   
    CleanCounter();
    reset();
    showNumberOne();
},false);
          
})();