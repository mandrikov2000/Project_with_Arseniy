let a=[50, 4, 12, 10, 8, 9, 1];

for(let i=0; i<a.length; i++){  // сортировка пузырьком
    for(let j=i;j<a.length; j++){
        if(a[i]>a[j]){
            let temp =a [i];
            a[i]=a[j];
            a[j]=temp;
        }
        console.log(a);
    }
}


// let nav=document.querySelector('#nav');
// console.log(nav);
// replacedNode=nav.replaceChild(nav.children[1],nav.children[0]);
// console.log(replacedNode)
// nav.appendChild(replacedNode)

document.querySelector('#sort-asc').onclick=mySort;

document.querySelector('#sort-desc').onclick=mySortDesc;

function mySort(){
    let nav = document.querySelector('#nav')
    for(let i=0; i<nav.children.length; i++){  // сортировка пузырьком
        for(let j=i;j<nav.children.length; j++){
            if (+nav.children[i].getAttribute('data-sort')>+nav.children[j].getAttribute('data-sort')){
                replacedNode=nav.replaceChild(nav.children[j],nav.children[i]);
                insertAfter(replacedNode,nav.children[i])
            }
        }
    }
}


function mySortDesc(){
    let nav = document.querySelector('#nav')
    for(let i=0; i<nav.children.length; i++){  // сортировка пузырьком
        for(let j=i;j<nav.children.length; j++){
            if (+nav.children[i].getAttribute('data-sort') < +nav.children[j].getAttribute('data-sort')){
                replacedNode=nav.replaceChild(nav.children[j],nav.children[i]);
                insertAfter(replacedNode,nav.children[i])
            }
        }
    }
}

function insertAfter (elem,refElem){
    return refElem.parentNode.insertBefore(elem,refElem.nextSibling)
}

