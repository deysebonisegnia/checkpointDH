function microondas(option,time){
    let second

    if(option === 'pipoca'){
        second =10
        console.log('você escolheu pipoca bom apetite')  
} 
else if(option ==='macarrão'){
    second = 8
    console.log('você escolheu macarrão bom apetite')  
}else if(option ==='carne'){
    second = 15
    console.log('você escolheu carne bom apetite')
}   else if(option ==='feijão'){
    second = 12
        console.log('você escolheu feijão bom apetite')   
}else if(option ==='brigadeiro'){
    second = 8
    console.log('você escolheu brigadeiro bom apetite') 
}else {
    console.log ('opcão invalida o prato não existe')
} 
/*checa time*/
if (time < second){
    return "Tempo insuficiente"
}
else if (time > (2* second) && time <= (3* second)){
return 'A comida queimou !'
}else if (time >(3* second)) {
    return 'kabum!Passou do tempo! '
}else if (time>=(second) && time <= (2* second)){
    return 'Prato pronto bom apetite'
}

}
console.log('------pipipi-----')
console.log(microondas('macarrão',10));