$(document).ready(function() {
    $('form').submit(function(e) {    
    e.preventDefault();
    
    var tarefa = $('input').val();    
    var novaTarefa = $('<li><p>' + tarefa + '</p></li>');

    $('ul').append(novaTarefa);    
    $('input').val('');
})


    $('ul').on('click', 'li', function() {    
    var p = $(this).find('p');
    
    if (p.hasClass('risco')) {
    p.removeClass('risco');
    p.css('text-decoration', 'none');
    } else { 
    p.addClass('risco');
    p.css('text-decoration', ' line-through');
    }
})
})
