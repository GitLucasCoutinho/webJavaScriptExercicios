const gulp = require('gulp')
const { series, parallel } = require('gulp')


const antes1 = cb => {
    console.log('Tarefa antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa antes 2!')
    return cb()
}

function copiar(cb) {
    gulp.src(['pastA/**/*.txt'])
    .pipe(gulp.dest('pastaB'))
    //.pipe(imagePelaMetade())
    //.pipe(imageEmPretoEBranco())
    // console.log('tarefa de copiar')
    .pipe(gulp.dest('pastaB'))
    return cb()
}

const fim = cb => {
    console.log('Tarefa fim!')           
    return cb()
}



module. fim = cb => series(
    parallel(antes1, antes2),
    copiar,
    fim,
    
    )
    

module.exports.default = series(copiar)