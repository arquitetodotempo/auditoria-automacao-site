/**
 * GTM Iframe Bridge - Arquiteto do Tempo
 * Envia eventos do iframe (Netlify) para o parent (Systeme.io)
 * Version: 1.0.0
 */

(function() {
    'use strict';

    // Verifica se está dentro de iframe
    const isInIframe = window.self !== window.top;

    if (!isInIframe) {
        console.log('GTM Bridge: Não está em iframe, bridge não necessário');
        return;
    }

    console.log('GTM Bridge: Iframe detectado, configurando ponte de eventos');

    // Função para enviar evento para o parent
    function sendToParent(eventData) {
        try {
            window.parent.postMessage({
                type: 'gtm_event',
                event: eventData
            }, '*');
            console.log('GTM Bridge: Evento enviado para parent:', eventData);
        } catch (e) {
            console.error('GTM Bridge: Erro ao enviar evento:', e);
        }
    }

    // Interceptar pushes do dataLayer
    const originalDataLayer = window.dataLayer || [];
    window.dataLayer = new Proxy(originalDataLayer, {
        get(target, prop) {
            if (prop === 'push') {
                return function(...args) {
                    // Push normal no dataLayer do iframe
                    const result = Array.prototype.push.apply(target, args);

                    // Enviar para parent também
                    args.forEach(data => {
                        if (data && typeof data === 'object') {
                            sendToParent(data);
                        }
                    });

                    return result;
                };
            }
            return target[prop];
        }
    });

    // Copiar eventos já existentes no dataLayer
    if (originalDataLayer.length > 0) {
        console.log(`GTM Bridge: Enviando ${originalDataLayer.length} eventos existentes para parent`);
        originalDataLayer.forEach(event => {
            if (event && typeof event === 'object') {
                sendToParent(event);
            }
        });
    }

    console.log('GTM Bridge: Configurado com sucesso');
})();
