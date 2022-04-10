
function starIn(element,count)
{

    const displayStar=document.querySelector(element);

let clicked = 0
const icons = []

const numberDisplay=document.querySelector('.count');

function create(count)
{
    // div waste memory instead of div we used fragment <>
    const ele = document.createDocumentFragment();
    // console.dir(ele);
    for(let i=0;i<count;i++)
    {
        const star= document.createElement('i');
        star.className=`fa fa-5x fa-star-o`;
        star.setAttribute('data-no', `${i+1}`);
        icons.push(star);
        ele.append(star);

        //this will create display every time so we shifted it outside loop
        // displayStar.append(star);
        
    }
    displayStar.append(ele);
    
}

create(count);
// const icons = document.querySelectorAll(".fa");

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


displayStar.addEventListener('mouseover',function(e){
    renderStar(e.target.dataset.no);
});

displayStar.addEventListener('click',function(e){
    clicked = e.target.dataset.no;
    numberDisplay.innerHTML = clicked;
})




}

// icons.forEach(function (icon) {
    
//         icon.addEventListener('mouseover', function () {
//             renderStar(icon.dataset.no)
//         })

//         icon.addEventListener('click' ,function (){
//             clicked = icon.dataset.no;
//             numberDisplay.innerHTML = clicked;
            
//         })

// })



starIn('#display-star',5);
starIn('#display-star1',3);



    






// if(firstdataset.no === '1')
// {
// }
    
// else 
//     {
        
//     }

