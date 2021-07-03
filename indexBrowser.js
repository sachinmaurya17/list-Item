
// change the color of all list element 
var listItem = document.querySelectorAll("li");
console.log(listItem);

const colorChange = (item,index) =>{
    switch(index){
        case 0:
            item.style.color = "red";
            break;
        case 1 :
            item.style.color = "blue";
            break;
        case  2:
            item.style.color = "purple";
            break;

        default :
            item.styel.color = "yellow";
            break;    
                   
    }
}

listItem.forEach(colorChange);
