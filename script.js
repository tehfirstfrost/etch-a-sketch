
const content = document.querySelector('#pad');
let btnCount = 0;

    
const btnGrid = document.querySelector('#grid');
    let input = btnGrid.addEventListener('click', () => {
    input = parseInt(prompt('Please enter a number from 1 to 99:'));
        while(input >= 100){
        input = parseInt(prompt('Please enter a lower number:'));
     }
     
    if(btnCount > 0){
        while(content.firstChild){
            content.removeChild(content.firstChild);
        }
     }

    btnCount +=1 ;

     for(let i = 0; i< input; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        content.appendChild(row);
        console.log(input);
        for(let j = 0; j< input; j++){
            let column = document.createElement('div');
            column.classList.add('square');
            row.appendChild(column);
            console.log(input);
        }
    }  
    const hover = document.querySelectorAll('.square');
    hover.forEach(item => item.addEventListener('mouseover', () => {
    item.style.cssText = "background-color:  rgb(0, 19, 24);";
    }));
    
});

const btnReset = document.querySelector('#reset');
    btnReset.addEventListener('click', () => {
        const reset = document.querySelectorAll('.square');
        reset.forEach(item =>  item.style.cssText = "background-color: rgba(76, 79, 80, 0.233);");

});

