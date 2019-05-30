let inputs = document.querySelectorAll('.text-value');
let inserirTexto = document.querySelector('.form-valida');
let help = document.querySelectorAll('.ajuda');

function validar(){    
    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].value === '') {
            inserirTexto.style.display = 'block';
            inputs[i].style.border = '1px solid red';
            return false
        }
    }
}

$('input[type="submit"]').on('click', function (e) {
    e.preventDefault();
    if ($('.check-semana:checked').length && $('.check-horario:checked').length && $('.check-cartoes:checked').length > 0) {
        $(this).parents('form').submit();
        return;
    }
    $(inserirTexto).css('display', 'block');
    return false;
});

document.addEventListener('click', toggleDocs, true);
function toggleDocs(event) {
    if (event.target && event.target.className == 'ajuda') {
        var next = event.target.nextElementSibling;
        if (next.style.display == "block") {
            next.style.display = "none";
        } else {
            next.style.display = "block";
        }
    }
}


