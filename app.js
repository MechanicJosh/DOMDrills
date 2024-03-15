// Is it standard that every time I want to referance the list element it now has to be done inside the createListItem function on line 39

document.addEventListener('DOMContentLoaded', function(){
   
    let div = document.createElement('div');
    div.className = 'header-container';
    document.body.appendChild(div);

    function makeHeader(){
        for (let num = 1; num <= 6; num++) {
            let header = document.createElement('h'+ num);
            let headerTextNode = document.createTextNode('This is a h' + num);
            header.className = 'h'+ num;
            header.appendChild(headerTextNode);
            div.appendChild(header);
            header.addEventListener('dblclick', function(){
            changeColor(this);
            });
        }
    }

    makeHeader();

    let myArray = ["red","blue","green","orange","purple","brown","yellow","pink"];

    function changeColor(element){
        const randomColor = myArray[Math.floor(Math.random() * myArray.length)];
        element.style.color = randomColor;
    }

    let button = document.createElement('button');
    let buttonTN = document.createTextNode('Click to add new list item'); 
    button.className = 'button';
    button.appendChild(buttonTN);
    div.appendChild(button);

    let count = 0;

    function createListItem(){
        count++;
        let list = document.createElement('li');
        let listTextNode = document.createTextNode("This is list item " + count);
        list.appendChild(listTextNode); 
        div.appendChild(list);
        list.addEventListener('click', function(){
            changeColor(this);
        });
        list.addEventListener('dblclick', function(){
            list.remove();
        });
    };

    button.addEventListener('click', function(){
        createListItem();
    });

    

});