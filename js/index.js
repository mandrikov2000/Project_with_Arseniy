


var goods={
    '289292':{
        'name':'Nike',
        'cost':1200,
        'img':'https://cdn2.iconfinder.com/data/icons/thesquid-ink-40-free-flat-icon-pack/64/nike-dunk-256.png',
        'sklad':'нет в наличие'
    },
    '289293':{
        'name':'Adidas',
        'cost':2000,
        'img':'https://cdn2.iconfinder.com/data/icons/clothes-shoes-vol-1/64/adidas-top_ten-256.png',
        'sklad':'есть в наличие'
    },
    '289294':{
        'name':'New Balance',
        'cost':1500,
        'img':'https://cdn2.iconfinder.com/data/icons/shoes-8/128/bw-13-256.png',
        'sklad':'есть в наличие'
    },
    '289295':{
        'name':'New Balance',
        'cost':1500,
        'img':'https://cdn2.iconfinder.com/data/icons/shoes-8/128/bw-13-256.png',
        'sklad':'есть в наличие'
    }
};

console.log(goods);
var out='';
for(var key in goods){
    out+='Название:'+goods[key].name+'<br>';
    out+='Цена:'+goods[key].cost+'<br>';
    out+='Наличие:'+goods[key].sklad+'<br>';
    // <img src="">
    out+='<img src="'+goods[key].img+'">';
    out+='<hr>';
}

document.getElementById('out').innerHTML=out;