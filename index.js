let body = document.getElementById('body')
let mainContainer = document.createElement('div')
mainContainer.setAttribute('class','mains')
text = "hello"
// mainContainer.textContent=text
body.appendChild(mainContainer)


//create rows and columns
for (let i=0;i<16;i++){
    for(let j=0;j<16;j++){
        let column = document.createElement('div')
        mainContainer.append(column)
        column.setAttribute('class','divs')
        hovers(column)
        
    }
}

//function that hovers
function hovers(hoverNode){
    hoverNode.addEventListener('mouseover', ()=>{
        hoverNode.style.backgroundColor='red'
    })
}