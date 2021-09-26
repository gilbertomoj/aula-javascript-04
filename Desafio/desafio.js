const mensagemSecreta = ['Aprender', 'não', 'é', 'sobre', 'o', 'que', 'você', 'consegue','facilmente', 'na', 'primeira', 'vez', 'mas', 'sobre', 'o', 'que', 'você', 'pode', 'descobrir', '< - 2015','Chris', 'Pine', 'Aprenda', 'JavaScript']
//Use um método de Array para remover o último valor do Array mensagemSecreta.
mensagemSecreta.pop();
console.log(mensagemSecreta)

//Adicione no final do Array mensagemSecreta as palavras a e programar (não esqueça de conferir se as palavras foram adicionadas corretamente ) 
mensagemSecreta.push('a')
mensagemSecreta.push('programar')
console.log(mensagemSecreta)

// Altere a palavra facilmente para a palavra certo
mensagemSecreta[8] = 'certo'
console.log(mensagemSecreta)

//Use um método de Array para remover o primeiro valor do Array.
mensagemSecreta.shift()
console.log(mensagemSecreta)

//Use um método de Array para adicionar a palavra Programação no início do Array.
mensagemSecreta.unshift("Programação") 
console.log(mensagemSecreta)

//Use um método de Array para remover os valores: 'consegue', 'certo', 'na', 'primeira', 'vez,' , e substituí-los pela palavra sabe.
// 7 8 9 10 11 
mensagemSecreta.splice(7,5, "sabe")
console.log(mensagemSecreta)

// Transforme todo o valor do Array em uma única string. Use o método join().
console.log(mensagemSecreta.join(' '))

