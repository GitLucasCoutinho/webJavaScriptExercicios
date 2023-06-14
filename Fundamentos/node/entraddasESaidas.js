const anonimo = process.argv.indexOf('-a') !== -1

//console.log(anonimo)

if(anonimo){
    process.stdout.write('fala Anonimo!\r\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\r\n', '')

        process.stdout.write(`Fala ${nome}!!\r\n`)
        process.exit()
    })
}

/*
PS C:\Users\windev\Documents\GitHub\webJavaScriptExercicios\Fundamentos\node> node .\entraddasESaidas.js -a

fala Anonimo!
PS C:\Users\windev\Documents\GitHub\webJavaScriptExercicios\Fundamentos\node> node .\entraddasESaidas.js - 
Informe o seu nome: lucas
Fala lucas!!

*/