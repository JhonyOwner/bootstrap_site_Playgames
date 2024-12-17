$(document).ready(function() {
    'use strict'; // Ativa o modo estrito para melhorar a segurança do código

    // Validação do formulário
    $('.needs-validation').each(function() {
        $(this).on('submit', function(event) {
            // Verifica se o formulário é inválido
            if (!this.checkValidity()) {
                event.preventDefault(); // Impede o envio do formulário
                event.stopPropagation(); // Impede a propagação do evento
            }
            // Adiciona a classe `was-validated` para exibir estilos de validação
            $(this).addClass('was-validated');
        });
    });

    // Exibição do Toast
    var toastElement = $('.toast');
    if (toastElement.length) {
        var toast = new bootstrap.Toast(toastElement[0]);
        toast.show(); // Exibe o toast automaticamente ao carregar a página
    }

    // Prevenção do envio no botão "Buscar"
    $('#buscarBotao').on('click', function(event) {
        event.preventDefault(); // Impede o envio ao clicar no botão de busca
    });
});
