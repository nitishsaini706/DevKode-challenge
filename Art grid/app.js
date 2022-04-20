const board = document.querySelector('.board');
const grids=[];
const ele = document.createDocumentFragment();



for(let i=0;i<100;i++)
{
    const g = document.createElement('div');
    g.classList.add(`grid`);
    g.setAttribute('data-id',`${i}`);
    // grids.push(ele);
    grids.push(g);
    ele.append(g);
    
}

board.appendChild(ele);

const grid = document.querySelectorAll('.grid');

grid.forEach(function(g)
{

    if(g.dataset.id > 89)
    {
        g.style.color = `#454545`
    }
    g.addEventListener('mouseover',function()
    {
        console.log(g.style.color);
    })
})

// grids.forEach(function(g)
// {
//     console.log(g.classList.dataset);
// })



// board.append(grids);

