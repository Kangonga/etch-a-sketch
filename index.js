let body = document.getElementById('body')
let mainContainer = document.createElement('div')
body.appendChild(mainContainer)
mainContainer.setAttribute('class','mains')


let reset = document.getElementById('reset')
reset.addEventListener('click',()=>mainContainer.textContent="")

let play = document.getElementById('play')
play.addEventListener('click',()=>{
    mainContainer.textContent = " "
    let sides=prompt("how many sides do you want the grid to have? \nmaximum of 100")
    createGrid(sides)
})



//create rows and columns
function createGrid(side){
for (let i=0;i<side;i++){
    for(let j=0;j<side;j++){
        let column = document.createElement('div')
        mainContainer.append(column)
        column.style.width = (Math.floor(100/side))+'%'
        column.setAttribute('class','divs')
        hovers(column)
        
    }
}
}
//function that hovers
function hovers(hoverNode){
    colors = ['red','orange','yellow','green','blue','indigo','violet']
    let random = Math.floor(Math.random()*colors.length)
    let colorMap = '123456789ABCDEF'
    let color = '#';
    for(let i=0;i<6;i++){
        color+=colorMap[(Math.floor(Math.random()*colorMap.length))]
    }
    hoverNode.addEventListener('mouseover', ()=>{
        hoverNode.style.backgroundColor=color

    })
}