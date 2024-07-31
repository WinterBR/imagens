$('header button').click(function() {
    $('form').slideDown();
})

$('#cancel').click(function() {
    $('form').slideUp();
})

$('form').on('submit', function(e) {
    e.preventDefault();
    const endereçoIMG = $('#endereço').val();
    const novoItem = $('<li style="display: none"></li>');
    $(`<img src="${endereçoIMG}" />`).appendTo(novoItem);
    $(`
        <div class="overlay">
            <a href="${endereçoIMG}" target="_blank" title="ver imagem em tamanho real">
                ver imagem em tamanho real
            </a>
        </div>
    `).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn();
    $('#endereço').val('');
})