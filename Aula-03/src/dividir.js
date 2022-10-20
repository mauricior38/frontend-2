function Dividir(a, b){
    
    if(a === 0 || b ===0){
        return 'A divisão não pode ser feita por zero'
    }else{
        return `O resultado da divisão é ${a / b}.`;
    }
}

export default Dividir;