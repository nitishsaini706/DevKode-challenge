
const displayStar=document.querySelector('#display-star');

let clicked = 0

let count=9;
const numberDisplay=document.querySelector('.count');

function create(count)
{
    for(let i=0;i<count;i++)
    {
        const star= document.createElement('i');
        star.className=`fa fa-5x fa-star-o`;
        star.setAttribute('data-no', `${i+1}`);
        
        displayStar.append(star);
    }
}

create(count);
const icons = document.querySelectorAll(".fa");

function renderStar(index)
{
    for(let start=0;start<icons.length;start++)
    {
       if(start<index)
       {
        icons[start].classList.remove("fa-star-o");
        icons[start].classList.add("fa-star");
       }
       else{
        icons[start].classList.add("fa-star-o");
        icons[start].classList.remove("fa-star");
       }
    }
}

displayStar.addEventListener('mouseleave',function()
{
    renderStar(clicked);
})



icons.forEach(function (icon) {
    
        icon.addEventListener('mouseover', function () {
            renderStar(icon.dataset.no)
        })

        icon.addEventListener('click' ,function (){
            clicked = icon.dataset.no;
            numberDisplay.innerHTML = clicked;
            
        })

})





    






// if(firstdataset.no === '1')
// {
// }
    
// else 
//     {
        
//     }

