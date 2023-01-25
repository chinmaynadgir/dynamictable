const div_table=document.getElementById("table-div");
let table=document.createElement("table");
div_table.appendChild(table);
for(let i=1;i<10;i++){
    if((i-1)%3===0 || i===1){
       row=table.insertRow(-1) ;
    }
    x=row.insertCell(-1);
    x.innerText=` Item No:${i} `;
    x.setAttribute('id',`${i}`)
    x.setAttribute('class','green');
    x.onclick=changeBehaviour;
}

function changeBehaviour(event){
    let source=event.srcElement;
    source.setAttribute('class','red')
    warn=setTimeout(() => {
        source.setAttribute('class','yellow')
    }, 4000);
    stop=setTimeout(() => {
        source.setAttribute('class','green')
    }, 5000);
}
