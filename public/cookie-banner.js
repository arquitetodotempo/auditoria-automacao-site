/**
 * Cookie Consent Banner - Arquiteto do Tempo
 * RGPD Compliant Cookie Manager
 * Version: 1.0.0
 * Date: 09 Janeiro 2026
 */

(function() {
    'use strict';

    // Configuration
    const CONFIG = {
        cookieName: 'arquiteto_tempo_cookie_consent',
        cookieExpiry: 365, // days
        categories: {
            essential: { required: true, enabled: true },
            analytics: { required: false, enabled: false },
            marketing: { required: false, enabled: false }
        }
    };

    // Cookie Consent Manager
    const CookieConsent = {

        init: function() {
            this.loadPreferences();

            if (!this.hasConsent()) {
                this.showBanner();
            } else {
                this.loadScripts();
            }

            this.attachEventListeners();
        },

        hasConsent: function() {
            return this.getCookie(CONFIG.cookieName) !== null;
        },

        loadPreferences: function() {
            const saved = this.getCookie(CONFIG.cookieName);
            if (saved) {
                try {
                    const prefs = JSON.parse(saved);
                    CONFIG.categories.analytics.enabled = prefs.analytics || false;
                    CONFIG.categories.marketing.enabled = prefs.marketing || false;
                } catch (e) {
                    console.error('Error loading cookie preferences:', e);
                }
            }
        },

        savePreferences: function(analytics, marketing) {
            const prefs = {
                essential: true,
                analytics: analytics,
                marketing: marketing,
                timestamp: new Date().toISOString()
            };

            this.setCookie(CONFIG.cookieName, JSON.stringify(prefs), CONFIG.cookieExpiry);
            CONFIG.categories.analytics.enabled = analytics;
            CONFIG.categories.marketing.enabled = marketing;

            this.loadScripts();
        },

        showBanner: function() {
            const banner = this.createBanner();
            document.body.appendChild(banner);

            // Fade in animation
            setTimeout(() => {
                banner.classList.add('show');
            }, 100);
        },

        hideBanner: function() {
            const banner = document.getElementById('cookie-consent-banner');
            if (banner) {
                banner.classList.remove('show');
                setTimeout(() => banner.remove(), 300);
            }
        },

        createBanner: function() {
            const banner = document.createElement('div');
            banner.id = 'cookie-consent-banner';
            banner.innerHTML = `
                <div class="cookie-banner-content">
                    <div class="cookie-banner-icon">🍪</div>
                    <div class="cookie-banner-text">
                        <h3>A Sua Privacidade Importa</h3>
                        <p>Utilizamos cookies para melhorar a sua experiência. Pode gerir as suas preferências clicando em "Personalizar".</p>
                    </div>
                    <div class="cookie-banner-actions">
                        <button id="cookie-accept-all" class="btn-primary">Aceitar Todos</button>
                        <button id="cookie-reject-all" class="btn-secondary">Rejeitar Não-Essenciais</button>
                        <button id="cookie-customize" class="btn-link">Personalizar</button>
                    </div>
                </div>
            `;
            return banner;
        },

        showCustomizeModal: function() {
            const modal = this.createCustomizeModal();
            document.body.appendChild(modal);

            setTimeout(() => {
                modal.classList.add('show');
            }, 100);
        },

        hideCustomizeModal: function() {
            const modal = document.getElementById('cookie-customize-modal');
            if (modal) {
                modal.classList.remove('show');
                setTimeout(() => modal.remove(), 300);
            }
        },

        createCustomizeModal: function() {
            const modal = document.createElement('div');
            modal.id = 'cookie-customize-modal';
            modal.innerHTML = `
                <div class="cookie-modal-overlay"></div>
                <div class="cookie-modal-content">
                    <div class="cookie-modal-header">
                        <h2>Preferências de Cookies</h2>
                        <button id="cookie-modal-close" class="btn-close" aria-label="Fechar">&times;</button>
                    </div>
                    <div class="cookie-modal-body">

                        <div class="cookie-category">
                            <div class="cookie-category-header">
                                <div>
                                    <h3>🔒 Cookies Essenciais</h3>
                                    <p>Necessários para o funcionamento básico do website</p>
                                </div>
                                <label class="cookie-toggle">
                                    <input type="checkbox" checked disabled>
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                            <div class="cookie-category-description">
                                <small>Estes cookies são estritamente necessários e não podem ser desativados. Incluem gestão de sessões, segurança e preferências de idioma.</small>
                            </div>
                        </div>

                        <div class="cookie-category">
                            <div class="cookie-category-header">
                                <div>
                                    <h3>📊 Cookies de Análise</h3>
                                    <p>Ajudam-nos a melhorar o website através de estatísticas</p>
                                </div>
                                <label class="cookie-toggle">
                                    <input type="checkbox" id="cookie-analytics" ${CONFIG.categories.analytics.enabled ? 'checked' : ''}>
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                            <div class="cookie-category-description">
                                <small>Google Analytics: Análise de tráfego, comportamento de utilizadores, métricas de desempenho (IPs anonimizados).</small>
                            </div>
                        </div>

                        <div class="cookie-category">
                            <div class="cookie-category-header">
                                <div>
                                    <h3>🎯 Cookies de Marketing</h3>
                                    <p>Permitem anúncios personalizados e remarketing</p>
                                </div>
                                <label class="cookie-toggle">
                                    <input type="checkbox" id="cookie-marketing" ${CONFIG.categories.marketing.enabled ? 'checked' : ''}>
                                    <span class="toggle-slider"></span>
                                </label>
                            </div>
                            <div class="cookie-category-description">
                                <small>Facebook Pixel, LinkedIn Insight Tag: Medição de conversões, anúncios direcionados, remarketing.</small>
                            </div>
                        </div>

                        <div class="cookie-policy-link">
                            <p><a href="/legal/politica-cookies.html" target="_blank">📄 Ler Política de Cookies Completa</a></p>
                        </div>

                    </div>
                    <div class="cookie-modal-footer">
                        <button id="cookie-save-preferences" class="btn-primary">Guardar Preferências</button>
                        <button id="cookie-modal-cancel" class="btn-secondary">Cancelar</button>
                    </div>
                </div>
            `;
            return modal;
        },

        attachEventListeners: function() {
            // Delegated event listening for dynamic elements
            document.addEventListener('click', (e) => {

                // Accept All
                if (e.target.id === 'cookie-accept-all') {
                    this.savePreferences(true, true);
                    this.hideBanner();
                }

                // Reject Non-Essential
                if (e.target.id === 'cookie-reject-all') {
                    this.savePreferences(false, false);
                    this.hideBanner();
                }

                // Customize
                if (e.target.id === 'cookie-customize') {
                    this.showCustomizeModal();
                }

                // Modal Close
                if (e.target.id === 'cookie-modal-close' || e.target.id === 'cookie-modal-cancel') {
                    this.hideCustomizeModal();
                }

                // Save Preferences
                if (e.target.id === 'cookie-save-preferences') {
                    const analytics = document.getElementById('cookie-analytics').checked;
                    const marketing = document.getElementById('cookie-marketing').checked;
                    this.savePreferences(analytics, marketing);
                    this.hideCustomizeModal();
                    this.hideBanner();
                }

                // Overlay Click
                if (e.target.classList.contains('cookie-modal-overlay')) {
                    this.hideCustomizeModal();
                }
            });
        },

        loadScripts: function() {
            // Load Google Analytics if consent given
            if (CONFIG.categories.analytics.enabled) {
                this.loadGoogleAnalytics();
            }

            // Load Marketing scripts if consent given
            if (CONFIG.categories.marketing.enabled) {
                this.loadMarketingScripts();
            }
        },

        loadGoogleAnalytics: function() {
            // Check if already loaded
            if (window.dataLayer && window.dataLayer.find(item => item.event === 'gtm.js')) return;

            // Google Tag Manager ID
            const GTM_ID = 'GTM-TKXL3B54';

            // Initialize dataLayer
            window.dataLayer = window.dataLayer || [];

            // Load GTM script
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer',GTM_ID);

            // Push consent event to GTM
            window.dataLayer.push({
                'event': 'cookie_consent_analytics',
                'analytics_consent': true
            });

            console.log('Google Tag Manager loaded with Analytics consent');
        },

        loadMarketingScripts: function() {
            // Facebook Pixel
            if (!window.fbq) {
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');

                // Replace with your Facebook Pixel ID
                // fbq('init', 'YOUR_PIXEL_ID');
                // fbq('track', 'PageView');

                console.log('Facebook Pixel loaded with consent');
            }

            // LinkedIn Insight Tag
            // Add LinkedIn Insight Tag code here if needed
        },

        // Cookie utilities
        setCookie: function(name, value, days) {
            const expires = new Date();
            expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
            document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
        },

        getCookie: function(name) {
            const nameEQ = name + "=";
            const ca = document.cookie.split(';');
            for(let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        },

        deleteCookie: function(name) {
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
        },

        // Public API for manual control
        resetConsent: function() {
            this.deleteCookie(CONFIG.cookieName);
            CONFIG.categories.analytics.enabled = false;
            CONFIG.categories.marketing.enabled = false;
            location.reload();
        },

        getConsent: function() {
            return {
                essential: true,
                analytics: CONFIG.categories.analytics.enabled,
                marketing: CONFIG.categories.marketing.enabled
            };
        }
    };

    // CSS Styles (injected)
    const styles = `
        /* Cookie Banner */
        #cookie-consent-banner {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(180deg, #111111 0%, #1a1a1a 100%);
            border-top: 2px solid #F4B223;
            box-shadow: 0 -4px 20px rgba(244, 178, 35, 0.2);
            padding: 24px;
            z-index: 9999;
            opacity: 0;
            transform: translateY(100%);
            transition: all 0.3s ease;
        }

        #cookie-consent-banner.show {
            opacity: 1;
            transform: translateY(0);
        }

        .cookie-banner-content {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            gap: 20px;
            flex-wrap: wrap;
        }

        .cookie-banner-icon {
            font-size: 40px;
            flex-shrink: 0;
        }

        .cookie-banner-text {
            flex: 1;
            min-width: 250px;
        }

        .cookie-banner-text h3 {
            color: #F4B223;
            font-size: 20px;
            font-weight: 700;
            margin: 0 0 8px 0;
        }

        .cookie-banner-text p {
            color: #CCCCCC;
            font-size: 14px;
            margin: 0;
            line-height: 1.5;
        }

        .cookie-banner-actions {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
        }

        /* Buttons */
        .btn-primary {
            background: linear-gradient(135deg, #FFB800 0%, #F4B223 100%);
            color: #0a0a0a;
            font-size: 14px;
            font-weight: 700;
            padding: 12px 24px;
            border-radius: 8px;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(244, 178, 35, 0.4);
        }

        .btn-secondary {
            background: transparent;
            color: #F4B223;
            font-size: 14px;
            font-weight: 600;
            padding: 12px 24px;
            border-radius: 8px;
            border: 2px solid #F4B223;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .btn-secondary:hover {
            background: rgba(244, 178, 35, 0.1);
            color: #FFB800;
            border-color: #FFB800;
        }

        .btn-link {
            background: transparent;
            color: #CCCCCC;
            font-size: 14px;
            font-weight: 400;
            padding: 12px 16px;
            border: none;
            cursor: pointer;
            text-decoration: underline;
            transition: color 0.3s ease;
        }

        .btn-link:hover {
            color: #F4B223;
        }

        .btn-close {
            background: transparent;
            border: none;
            color: #CCCCCC;
            font-size: 32px;
            line-height: 1;
            cursor: pointer;
            transition: color 0.3s ease;
            padding: 0;
            width: 32px;
            height: 32px;
        }

        .btn-close:hover {
            color: #F4B223;
        }

        /* Modal */
        #cookie-customize-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        #cookie-customize-modal.show {
            opacity: 1;
        }

        .cookie-modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(4px);
        }

        .cookie-modal-content {
            position: relative;
            background: #111111;
            border: 1px solid #222222;
            border-radius: 12px;
            max-width: 600px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 8px 32px rgba(244, 178, 35, 0.3);
        }

        .cookie-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 24px;
            border-bottom: 1px solid #222222;
        }

        .cookie-modal-header h2 {
            color: #F4B223;
            font-size: 24px;
            font-weight: 700;
            margin: 0;
        }

        .cookie-modal-body {
            padding: 24px;
        }

        .cookie-category {
            background: #1a1a1a;
            border: 1px solid #222222;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 16px;
        }

        .cookie-category-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 16px;
            margin-bottom: 12px;
        }

        .cookie-category-header h3 {
            color: #FFFFFF;
            font-size: 18px;
            font-weight: 600;
            margin: 0 0 4px 0;
        }

        .cookie-category-header p {
            color: #AAAAAA;
            font-size: 14px;
            margin: 0;
        }

        .cookie-category-description {
            color: #888888;
            font-size: 13px;
            line-height: 1.5;
        }

        .cookie-category-description small {
            display: block;
        }

        /* Toggle Switch */
        .cookie-toggle {
            position: relative;
            display: inline-block;
            width: 50px;
            height: 26px;
            flex-shrink: 0;
        }

        .cookie-toggle input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .toggle-slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #222222;
            transition: 0.3s;
            border-radius: 26px;
        }

        .toggle-slider:before {
            position: absolute;
            content: "";
            height: 18px;
            width: 18px;
            left: 4px;
            bottom: 4px;
            background-color: #888888;
            transition: 0.3s;
            border-radius: 50%;
        }

        input:checked + .toggle-slider {
            background-color: #F4B223;
        }

        input:checked + .toggle-slider:before {
            transform: translateX(24px);
            background-color: #0a0a0a;
        }

        input:disabled + .toggle-slider {
            background-color: #10b981;
            cursor: not-allowed;
        }

        input:disabled + .toggle-slider:before {
            background-color: #FFFFFF;
        }

        .cookie-policy-link {
            text-align: center;
            margin-top: 24px;
            padding-top: 20px;
            border-top: 1px solid #222222;
        }

        .cookie-policy-link a {
            color: #F4B223;
            text-decoration: none;
            font-size: 14px;
            transition: color 0.3s ease;
        }

        .cookie-policy-link a:hover {
            color: #FFB800;
            text-decoration: underline;
        }

        .cookie-modal-footer {
            display: flex;
            gap: 12px;
            padding: 20px 24px;
            border-top: 1px solid #222222;
            justify-content: flex-end;
        }

        /* Responsive */
        @media (max-width: 640px) {
            .cookie-banner-content {
                flex-direction: column;
                align-items: flex-start;
            }

            .cookie-banner-actions {
                width: 100%;
            }

            .cookie-banner-actions button {
                flex: 1;
                min-width: 0;
            }

            .cookie-category-header {
                flex-direction: column;
            }

            .cookie-modal-footer {
                flex-direction: column;
            }

            .cookie-modal-footer button {
                width: 100%;
            }
        }
    `;

    // Inject styles
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => CookieConsent.init());
    } else {
        CookieConsent.init();
    }

    // Expose API globally
    window.CookieConsent = {
        reset: () => CookieConsent.resetConsent(),
        getConsent: () => CookieConsent.getConsent(),
        showPreferences: () => CookieConsent.showCustomizeModal()
    };

})();
