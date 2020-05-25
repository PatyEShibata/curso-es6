const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idadeMap = usuarios.map(item=> item.idade);
console.log(idadeMap);

const usuarioFilter = usuarios.filter(function(item){
    if (item.empresa === 'Rocketseat' && item.idade >= 18){
        return item;
    }
})

console.log(usuarioFilter);

const usuarioGoogle = usuarios.find(function(item){
    return item.empresa === 'Google';
})

console.log(usuarioGoogle);

const usuario50 = usuarios.filter(function(item){   
    item.idade *= 2; 

    if (item.idade <= 50){
        return item;
    }
})

console.log(usuario50);

