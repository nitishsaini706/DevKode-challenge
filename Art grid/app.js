const gri = document.querySelector('.gri');
const board = document.querySelector('.board');
const grids=[];
const ele = document.createDocumentFragment();



for(let i=0;i<10;i++)
{
    const g = document.createElement('i');
    g.className =`grid`;
    // grids.push(ele);
    grids.push(g);
    ele.append(grids);
    
}

board.appendChild(ele);


// board.append(grids);

