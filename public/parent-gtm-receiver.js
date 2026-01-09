/**
 * GTM Parent Receiver - Arquiteto do Tempo
 * Recebe eventos do iframe e adiciona ao dataLayer do parent (Systeme.io)
 * Version: 1.0.0
 */

(function() {
    'use strict';

    console.log('GTM Receiver: Configurando receptor de eventos do iframe');

    // Inicializar dataLayer se não existir
    window.dataLayer = window.dataLayer || [];

    // Escutar mensagens do iframe
    window.addEventListener('message', function(event) {
        // Verificar se é mensagem do nosso iframe
        if (!event.data || event.data.type !== 'gtm_event') {
            return;
        }

        const eventData = event.data.event;

        // Validar que tem estrutura válida
        if (!eventData || typeof eventData !== 'object') {
            return;
        }

        console.log('GTM Receiver: Evento recebido do iframe:', eventData);

        // Push para dataLayer do parent
        window.dataLayer.push(eventData);

        console.log('GTM Receiver: Evento adicionado ao dataLayer do parent');
    }, false);

    console.log('GTM Receiver: Configurado com sucesso');
})();
