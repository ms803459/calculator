

    let screen = document.querySelector('.screen');
    let buttons = document.querySelector('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
function button(e){
    buttons.addEventListener('click',function(e) {
        console.log(click)
        let value = e.targetdataset.num;
        screen.value += value;
    })

};

    buttons.forEach(button);

    equal.addEventListener('click',function(e){
        if(screen.value === ''){
            screen.value ="" ;
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }

    })
    clear.addEventListener('click',function(e){
        screen.value = "";

    })


