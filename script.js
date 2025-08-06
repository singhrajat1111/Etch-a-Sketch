let container = document.querySelector('.container')
let i=0,j=0,colNum=16,rowNum=16 
let hoverColor = "red"


function main() {
    gridCreate()
    console.log(rowNum,colNum);
    changeGrid()
    hoverChange()
    Reset()
}



main()
function gridCreate() {
    for ( i = 0; i < colNum; i++) {
        let col = document.createElement('div')
        col.classList.add('col')
        for ( j = 0; j < rowNum; j++) {
            let ro = document.createElement('div')
            ro.classList.add('ro')
            ro.classList.add('hover')
            ro.style.width = "20%"
            col.appendChild(ro)
        }
        container.appendChild(col)
    }

    hoverEffect()

}

function hoverEffect() {
    let divColorChange = document.querySelectorAll('.hover')

    divColorChange.forEach((e)=> {
        e.addEventListener('mouseover', (element)=> {
            element.target.style.backgroundColor = hoverColor
        })
    })
}

function changeGrid() {
    document.querySelector('.changeGrid').addEventListener('click' , ()=>{
        let gridValue = prompt("enter grid size vale (upto 64)")
        colNum = gridValue
        rowNum=gridValue
        console.log(rowNum,colNum);

        // removing classes
        let col = document.querySelectorAll('.col')
        let ro = document.querySelectorAll('.ro')
        col.forEach((e)=> e.remove())
        ro.forEach((e)=> e.remove())
        gridCreate()

        // making bgcolor change when hovering
        hoverEffect()

    })
}

function hoverChange() {
    let btnColor = document.querySelector('.changeColor')
    let value = document.querySelector('#favcolor')
    btnColor.addEventListener('click',()=> {
        hoverColor = value.value
    })
}


function Reset() {
    document.querySelector('.reset').addEventListener('click', ()=> {
        let hover = document.querySelectorAll('.hover')
        hover.forEach((e)=> e.style.backgroundColor = "white")
        let col = document.querySelectorAll('.col')
        let ro = document.querySelectorAll('.ro')
        col.forEach((e)=> e.remove())
        ro.forEach((e)=> e.remove())
        colNum = 16
        rowNum = 16
        hoverColor = "red"
        let value = document.querySelector('#favcolor')
        value.value = hoverColor
        gridCreate()
    })
}