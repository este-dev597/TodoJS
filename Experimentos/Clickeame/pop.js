var btnAbrir = document.getElementById('abrete'),
    aparece = document.getElementById('aparece'),
    pum = document.getElementById('pum'),
    btnCerrar = document.getElementById('cerrar');

btnAbrir.addEventListener('click', function(){
    aparece.classList.add('active');
    pum.classList.add('active');
});

btnCerrar.addEventListener('click', function(){
    aparece.classList.remove('active');
    pum.classList.remove('active');
})