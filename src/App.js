
import './App.css';

function App() {
  return (
    <>
    
        <header >
            <div class="wp-block-group top-header has-background is-layout-constrained"
                style={{"background-color":"#f1f1f1"}}>
                <div class="wp-block-group alignwide is-layout-flow"
                    style={{"padding-top":"var(--wp--preset--spacing--20)","padding-right":"0","padding-bottom":"var(--wp--preset--spacing--20)","padding-left":"0"}}>
                    <div class="wp-block-columns alignwide is-layout-flex wp-container-7">
                        <div
                            class="wp-block-column is-vertically-aligned-center fr-mobile-hide fr-tablet-hide is-layout-flow">
                            <div class="wp-block-group is-nowrap is-layout-flex wp-container-2">
                                
                                <ul class="wp-block-social-links has-icon-color is-style-logos-only is-layout-flex">
                                    <li style={{"color": "#435175"}}
                                        class="wp-social-link wp-social-link-facebook wp-block-social-link"><a
                                            href="https://www.facebook.com"
                                            class="wp-block-social-link-anchor"><svg width="24" height="24"
                                                viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true" focusable="false">
                                                <path
                                                    d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z">
                                                </path>
                                            </svg><span
                                                class="wp-block-social-link-label screen-reader-text">Facebook</span></a>
                                    </li>
                                    <li style={{"color": "#435175"}}
                                        class="wp-social-link wp-social-link-linkedin wp-block-social-link"><a
                                            href="https://www.linkedin.com"
                                            class="wp-block-social-link-anchor"><svg width="24" height="24"
                                                viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true" focusable="false">
                                                <path
                                                    d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z">
                                                </path>
                                            </svg><span
                                                class="wp-block-social-link-label screen-reader-text">LinkedIn</span></a>
                                    </li>
                                    <li style={{"color": "#435175"}}
                                        class="wp-social-link wp-social-link-twitter wp-block-social-link"><a
                                            href="https://twitter.com"
                                            class="wp-block-social-link-anchor"><svg width="24" height="24"
                                                viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true" focusable="false">
                                                <path
                                                    d="M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c-0.793,0.47-1.671,0.812-2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z">
                                                </path>
                                            </svg><span
                                                class="wp-block-social-link-label screen-reader-text">Twitter</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                     
                        <div class="wp-block-column is-layout-flow">
                            <div
                                class="wp-block-group is-content-justification-space-between is-nowrap is-layout-flex wp-container-5">
                                <div
                                    class="wp-block-group is-content-justification-space-between is-layout-flex wp-container-4">
                                    <p
                                        class="cr-email fr-mobile-hide fr-tablet-hide is-style-nounderline has-secondary-color has-text-color has-link-color has-small-font-size wp-elements-3d2fb1429f54fc47b722ae8ab96059b8">
                                        <a href="mailto:sales@sheeranalyticsandinsights.com" class="cr-email"><span
                                                class="support-info-icon"> <svg class="svg-icon cr-svg"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 13">
                                                    <path
                                                        d="M2.59.875h8.295c-.167.383-.26.806-.26 1.25 0 .42.083.821.233 1.187l-2.19 1.914a1.777 1.777 0 01-2.337 0l-3.04-2.657a.492.492 0 10-.648.737l3.04 2.662a2.775 2.775 0 003.634 0L11.38 4.16a3.118 3.118 0 002.995 1.026v5.117a1.964 1.964 0 01-1.964 1.964H2.589a1.964 1.964 0 01-1.964-1.964V2.839c0-1.084.88-1.964 1.964-1.964zm11.16 2.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z">
                                                    </path>
                                                </svg> </span>sales@sheeranalyticsandinsights</a></p>
                                    
                                    <p
                                        class="is-style-nounderline has-secondary-color has-text-color has-link-color has-small-font-size wp-elements-7074238fb01730c48ddf30e98cdc32ea">
                                        <a class="cr-phone" href="tel:+919836913164"><span class="support-info-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 16"
                                                    class="svg-icon cr-svg">
                                                    <path
                                                        d="M8.312.375c1.209 0 2.188.978 2.188 2.186v11.255C10.5 15.024 9.52 16 8.313 16H2.687A2.184 2.184 0 01.5 13.816V2.561C.5 1.353 1.48.375 2.688.375h5.624zM1.617 11.962c0 .434.361.785.807.785h6.175a.796.796 0 00.807-.785V4.356a.796.796 0 00-.807-.785H2.424a.796.796 0 00-.807.785v7.606zm2.63-9.724h2.537a.243.243 0 100-.485H4.248a.243.243 0 100 .485zM5.5 15a.75.75 0 100-1.5.75.75 0 000 1.5z">
                                                    </path>
                                                </svg> </span>+91 9836913164</a></p>
                                   
                                </div>
                                <p
                                    class="is-style-nounderline cr-myaccount has-secondary-color has-text-color has-link-color has-small-font-size wp-elements-f2d8b57147a0ff3245d915e2807bda53">
                                    <a href="https://www.sheeranalyticsandinsights.com//my-account/" class="cr-myaccount"
                                        data-type="page" data-id="437"><span class="support-info-icon"> <svg
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"
                                                class="svg-icon cr-svg">
                                                <path fill="#7F8494"
                                                    d="M7.605 0C3.387-.055-.056 3.388 0 7.606.057 11.65 3.35 14.944 7.396 15c4.218.058 7.661-3.386 7.603-7.603C14.944 3.35 11.65.057 7.605 0Zm4.558 11.8a.143.143 0 0 1-.174.03.144.144 0 0 1-.047-.041 4.48 4.48 0 0 0-1.167-1.067c-.918-.59-2.08-.914-3.275-.914-1.193 0-2.357.324-3.275.914a4.48 4.48 0 0 0-1.166 1.066.144.144 0 0 1-.221.012 6.322 6.322 0 0 1-1.684-4.191c-.058-3.51 2.82-6.446 6.33-6.455A6.35 6.35 0 0 1 13.847 7.5a6.321 6.321 0 0 1-1.683 4.3Z">
                                                </path>
                                                <path fill="#7F8494"
                                                    d="M7.501 3.462c-.71 0-1.354.267-1.81.751-.457.484-.686 1.154-.634 1.872.105 1.416 1.201 2.57 2.444 2.57 1.243 0 2.338-1.154 2.444-2.57.054-.71-.173-1.374-.637-1.868-.459-.486-1.1-.755-1.807-.755Z">
                                                </path>
                                            </svg> </span>My Account</a></p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <header class="site-header wp-block-template-part">
            <div class="wp-block-group alignfull cr-header is-style-no-margin has-text-color has-background fr-position-sticky fr-sticky-header is-layout-constrained"
                style={{"color":"var(--wp--custom--color--black)","background-color":"var(--wp--custom--color--white)","margin-top":"0px","margin-bottom":"0px","padding-top":"15px","padding-bottom":"10px"}}>
                <div class="wp-block-group alignwide is-style-no-margin is-content-justification-space-between is-layout-flex wp-container-15"
                    style={{"margin-top":"0px","margin-bottom":"0px","padding-top":"0px","padding-right":"0px","padding-bottom":"0px","padding-left":"0px"}}>
                    <figure class="wp-block-image size-medium"><a href="https://www.sheeranalyticsandinsights.com//"><img
                                decoding="async" width="300" height="45"
                                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20300%2045'%3E%3C/svg%3E"
                                alt="sheer Research" class="wp-image-14941"
                                data-lazy-srcset="https://www.sheeranalyticsandinsights.com//wp-content/uploads/2023/03/sheer-Research-Logo-423x64-1-300x45.webp 300w, https://www.sheeranalyticsandinsights.com//wp-content/uploads/2023/03/sheer-Research-Logo-423x64-1.webp 423w"
                                data-lazy-sizes="(max-width: 300px) 100vw, 300px"
                                data-lazy-src="https://www.sheeranalyticsandinsights.com//wp-content/uploads/2023/03/sheer-Research-Logo-423x64-1-300x45.webp" /><noscript><img
                                    decoding="async" width="300" height="45"
                                    src="https://www.sheeranalyticsandinsights.com//wp-content/uploads/2023/03/sheer-Research-Logo-423x64-1-300x45.webp"
                                    alt="sheer Research" class="wp-image-14941"
                                    srcset="https://www.sheeranalyticsandinsights.com//wp-content/uploads/2023/03/sheer-Research-Logo-423x64-1-300x45.webp 300w, https://www.sheeranalyticsandinsights.com//wp-content/uploads/2023/03/sheer-Research-Logo-423x64-1.webp 423w"
                                    sizes="(max-width: 300px) 100vw, 300px" /></noscript></a></figure>
                    <nav class="has-xsmall-font-size is-responsive wp-block-navigation has-xsmall-font-size is-horizontal is-layout-flex"
                        aria-label="Header navigation">
                        
                        <div class="wp-block-navigation__responsive-container  " style={{}} id="modal-10">
                            <div class="wp-block-navigation__responsive-close" tabindex="-1" data-micromodal-close>
                                <div class="wp-block-navigation__responsive-dialog" aria-label="Menu">
                                    <button aria-label="Close menu" data-micromodal-close
                                        class="wp-block-navigation__responsive-container-close"><svg
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                                            height="24" aria-hidden="true" focusable="false">
                                            <path
                                                d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z">
                                            </path>
                                        </svg></button>
                                    <div class="wp-block-navigation__responsive-container-content"
                                        id="modal-10-content">
                                          <a><img alt="Sheer" src="https://www.sheeranalyticsandinsights.com/static/sai_logo-8bdcb86c43808dfb831384efccd61b52.png" width="229" height="50" style={{"margin-left": "-403px"}}  class="img-responsive lazyload" />
</a>
                                        <ul class="wp-block-navigation__container">
                                            <li
                                                class="has-xsmall-font-size wp-block-navigation-item current-menu-item wp-block-navigation-link">
                                                <a class="wp-block-navigation-item__content"
                                                    href="https://www.sheeranalyticsandinsights.com//" aria-current="page"><span
                                                        class="wp-block-navigation-item__label">Home</span></a></li>
                                            <li
                                                class="has-xsmall-font-size wp-block-navigation-item has-child open-on-hover-click wp-block-navigation-submenu">
                                                <a class="wp-block-navigation-item__content"
                                                    href="https://www.sheeranalyticsandinsights.com//market-research-reports">Market
                                                    Research Reports</a><button
                                                    aria-label="Market Research Reports submenu"
                                                    class="wp-block-navigation__submenu-icon wp-block-navigation-submenu__toggle"
                                                    aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg"
                                                        width="12" height="12" viewBox="0 0 12 12" fill="none"
                                                        aria-hidden="true" focusable="false">
                                                        <path d="M1.50002 4L6.00002 8L10.5 4" stroke-width="1.5"></path>
                                                    </svg></button>
                                                <ul
                                                    class="wp-block-navigation__submenu-container wp-block-navigation-submenu">
                                                    <li
                                                        class="has-xsmall-font-size wp-block-navigation-item wp-block-navigation-link">
                                                        <a class="wp-block-navigation-item__content"
                                                            href="https://www.sheeranalyticsandinsights.com//industry/advanced-materials-market"><span
                                                                class="wp-block-navigation-item__label">Advanced
                                                                Materials</span></a></li>
                                                    <li
                                                        class="has-xsmall-font-size wp-block-navigation-item wp-block-navigation-link">
                                                        <a class="wp-block-navigation-item__content"
                                                            href="https://www.sheeranalyticsandinsights.com//industry/aerospace-defense-market"><span
                                                                class="wp-block-navigation-item__label">Aerospace &amp;
                                                                Defense</span></a></li>
                                                    <li
                                                        class="has-xsmall-font-size wp-block-navigation-item wp-block-navigation-link">
                                                        <a class="wp-block-navigation-item__content"
                                                            href="https://www.sheeranalyticsandinsights.com//industry/biotechnology-market"><span
                                                                class="wp-block-navigation-item__label">Biotechnology</span></a>
                                                    </li>
                                                    <li
                                                        class="has-xsmall-font-size wp-block-navigation-item wp-block-navigation-link">
                                                        <a class="wp-block-navigation-item__content"
                                                            href="https://www.sheeranalyticsandinsights.com//industry/chemicals-market"><span
                                                                class="wp-block-navigation-item__label">Chemicals</span></a>
                                                    </li>
                                                    <li
                                                        class="has-xsmall-font-size wp-block-navigation-item wp-block-navigation-link">
                                                        <a class="wp-block-navigation-item__content"
                                                            href="https://www.sheeranalyticsandinsights.com//industry/energy-market"><span
                                                                class="wp-block-navigation-item__label">Energy &amp;
                                                                Power</span></a></li>
                                                    <li
                                                        class="has-xsmall-font-size wp-block-navigation-item wp-block-navigation-link">
                                                        <a class="wp-block-navigation-item__content"
                                                            href="https://www.sheeranalyticsandinsights.com//industry/food-and-beverage-market"><span
                                                                class="wp-block-navigation-item__label">Food &amp;
                                                                Beverage</span></a></li>
                                                    <li
                                                        class="has-xsmall-font-size wp-block-navigation-item wp-block-navigation-link">
                                                        <a class="wp-block-navigation-item__content"
                                                            href="https://www.sheeranalyticsandinsights.com//industry/medical-devices-market"><span
                                                                class="wp-block-navigation-item__label">Medical
                                                                Devices</span></a></li>
                                                    <li
                                                        class="has-xsmall-font-size wp-block-navigation-item wp-block-navigation-link">
                                                        <a class="wp-block-navigation-item__content"
                                                            href="https://www.sheeranalyticsandinsights.com//industry/pharmaceuticals-market"><span
                                                                class="wp-block-navigation-item__label">Pharmaceuticals</span></a>
                                                    </li>
                                                    <li
                                                        class="has-xsmall-font-size wp-block-navigation-item wp-block-navigation-link">
                                                        <a class="wp-block-navigation-item__content"
                                                            href="https://www.sheeranalyticsandinsights.com//industry/semiconductor-electronics"><span
                                                                class="wp-block-navigation-item__label">Semiconductor
                                                                &amp; Electronics</span></a></li>
                                                    <li
                                                        class="has-xsmall-font-size wp-block-navigation-item wp-block-navigation-link">
                                                        <a class="wp-block-navigation-item__content"
                                                            href="https://www.sheeranalyticsandinsights.com//industry/it-and-telecom-market"><span
                                                                class="wp-block-navigation-item__label">IT &amp;
                                                                Telecom</span></a></li>
                                                </ul>
                                            </li>
                                            <li
                                                class="has-xsmall-font-size wp-block-navigation-item has-child open-on-hover-click wp-block-navigation-submenu">
                                                <a class="wp-block-navigation-item__content"
                                                    href="https://www.sheeranalyticsandinsights.com//about"
                                                    title="About">About</a><button aria-label="About submenu"
                                                    class="wp-block-navigation__submenu-icon wp-block-navigation-submenu__toggle"
                                                    aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg"
                                                        width="12" height="12" viewBox="0 0 12 12" fill="none"
                                                        aria-hidden="true" focusable="false">
                                                        <path d="M1.50002 4L6.00002 8L10.5 4" stroke-width="1.5"></path>
                                                    </svg></button>
                                                <ul
                                                    class="wp-block-navigation__submenu-container wp-block-navigation-submenu">
                                                    <li
                                                        class="has-xsmall-font-size wp-block-navigation-item wp-block-navigation-link">
                                                        <a class="wp-block-navigation-item__content"
                                                            href="https://www.sheeranalyticsandinsights.com//info/casestudy"><span
                                                                class="wp-block-navigation-item__label">Case
                                                                Studies</span></a></li>
                                                </ul>
                                            </li>
                                            <li
                                                class="has-xsmall-font-size wp-block-navigation-item has-child open-on-hover-click custom-submenu is-style-mega-menu-right wp-block-navigation-submenu">
                                                <a class="wp-block-navigation-item__content"
                                                    href="https://www.sheeranalyticsandinsights.com//consulting">Consulting</a><button
                                                    aria-label="Consulting submenu"
                                                    class="wp-block-navigation__submenu-icon wp-block-navigation-submenu__toggle"
                                                    aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg"
                                                        width="12" height="12" viewBox="0 0 12 12" fill="none"
                                                        aria-hidden="true" focusable="false">
                                                        <path d="M1.50002 4L6.00002 8L10.5 4" stroke-width="1.5"></path>
                                                    </svg></button>
                                                <ul
                                                    class="wp-block-navigation__submenu-container custom-submenu is-style-mega-menu-right wp-block-navigation-submenu">
                                                    <li
                                                        class="has-xsmall-font-size wp-block-navigation-item wp-block-navigation-link">
                                                        <a class="wp-block-navigation-item__content"
                                                            href="https://www.sheeranalyticsandinsights.com//info/automotive-and-transportation-consulting-services"><span
                                                                class="wp-block-navigation-item__label">Automotive &amp;
                                                                Transportation Consulting Services</span></a></li>
                                                    <li
                                                        class="has-xsmall-font-size wp-block-navigation-item wp-block-navigation-link">
                                                        <a class="wp-block-navigation-item__content"
                                                            href="https://www.sheeranalyticsandinsights.com//info/customer-tracking-and-behavior-analysis-consumer-goods"><span
                                                                class="wp-block-navigation-item__label">Customer
                                                                Tracking &amp; Behavior Analysis Consumer
                                                                Goods</span></a></li>
                                                    <li
                                                        class="has-xsmall-font-size wp-block-navigation-item wp-block-navigation-link">
                                                        <a class="wp-block-navigation-item__content"
                                                            href="https://www.sheeranalyticsandinsights.com//info/competitor-intelligence-store"><span
                                                                class="wp-block-navigation-item__label">Competitor
                                                                Intelligence Store</span></a></li>
                                                    <li
                                                        class="has-xsmall-font-size wp-block-navigation-item wp-block-navigation-link">
                                                        <a class="wp-block-navigation-item__content"
                                                            href="https://www.sheeranalyticsandinsights.com//info/data-consulting-and-analytics"><span
                                                                class="wp-block-navigation-item__label">Data Consulting
                                                                &amp; Analytics</span></a></li>
                                                    <li
                                                        class="has-xsmall-font-size wp-block-navigation-item wp-block-navigation-link">
                                                        <a class="wp-block-navigation-item__content"
                                                            href="https://www.sheeranalyticsandinsights.com//info/drug-lifecycle-assessment"><span
                                                                class="wp-block-navigation-item__label">Drug Lifecycle
                                                                Assessment</span></a></li>
                                                    <li
                                                        class="has-xsmall-font-size wp-block-navigation-item wp-block-navigation-link">
                                                        <a class="wp-block-navigation-item__content"
                                                            href="https://www.sheeranalyticsandinsights.com//info/drug-commercialization-strategies"><span
                                                                class="wp-block-navigation-item__label">Drug
                                                                Commercialization Strategies</span></a></li>
                                                    <li
                                                        class="has-xsmall-font-size wp-block-navigation-item wp-block-navigation-link">
                                                        <a class="wp-block-navigation-item__content"
                                                            href="https://www.sheeranalyticsandinsights.com//info/installed-base-scenario-medical-devices"><span
                                                                class="wp-block-navigation-item__label">Installed Base
                                                                Scenario Medical Devices</span></a></li>
                                                    <li
                                                        class="has-xsmall-font-size wp-block-navigation-item wp-block-navigation-link">
                                                        <a class="wp-block-navigation-item__content"
                                                            href="https://www.sheeranalyticsandinsights.com//info/it-and-telecom-consulting-services"><span
                                                                class="wp-block-navigation-item__label">IT &amp; Telecom
                                                                Consulting Services</span></a></li>
                                                    <li
                                                        class="has-xsmall-font-size wp-block-navigation-item wp-block-navigation-link">
                                                        <a class="wp-block-navigation-item__content"
                                                            href="https://www.sheeranalyticsandinsights.com//info/medical-technologies-assessment-medical-devices"><span
                                                                class="wp-block-navigation-item__label">Medical
                                                                Technologies Assessment Medical Devices</span></a></li>
                                                    <li
                                                        class="has-xsmall-font-size wp-block-navigation-item wp-block-navigation-link">
                                                        <a class="wp-block-navigation-item__content"
                                                            href="https://www.sheeranalyticsandinsights.com//info/medical-devices-market-opportunity-assessment"><span
                                                                class="wp-block-navigation-item__label">Medical Devices
                                                                – Market Opportunity Assessment</span></a></li>
                                                    <li
                                                        class="has-xsmall-font-size wp-block-navigation-item wp-block-navigation-link">
                                                        <a class="wp-block-navigation-item__content"
                                                            href="https://www.sheeranalyticsandinsights.com//info/new-product-launches-medical-devices"><span
                                                                class="wp-block-navigation-item__label">New Product
                                                                Launches Medical Devices</span></a></li>
                                                    <li
                                                        class="has-xsmall-font-size wp-block-navigation-item wp-block-navigation-link">
                                                        <a class="wp-block-navigation-item__content"
                                                            href="https://www.sheeranalyticsandinsights.com//info/pharmaceutical-consulting"><span
                                                                class="wp-block-navigation-item__label">Pharmaceutical
                                                                Consulting</span></a></li>
                                                    <li
                                                        class="has-xsmall-font-size wp-block-navigation-item wp-block-navigation-link">
                                                        <a class="wp-block-navigation-item__content"
                                                            href="https://www.sheeranalyticsandinsights.com//info/regulatory-environment-analysis"><span
                                                                class="wp-block-navigation-item__label">Regulatory
                                                                Environment Analysis</span></a></li>
                                                    <li
                                                        class="has-xsmall-font-size wp-block-navigation-item wp-block-navigation-link">
                                                        <a class="wp-block-navigation-item__content"
                                                            href="https://www.sheeranalyticsandinsights.com//info/semiconductors-and-electronics-consulting-services"><span
                                                                class="wp-block-navigation-item__label">Semiconductors
                                                                &amp; Electronics Consulting Services</span></a></li>
                                                    <li
                                                        class="has-xsmall-font-size wp-block-navigation-item wp-block-navigation-link">
                                                        <a class="wp-block-navigation-item__content"
                                                            href="https://www.sheeranalyticsandinsights.com//info/subscriptions-services"><span
                                                                class="wp-block-navigation-item__label">Subscriptions
                                                                Services</span></a></li>
                                                    <li
                                                        class="has-xsmall-font-size wp-block-navigation-item wp-block-navigation-link">
                                                        <a class="wp-block-navigation-item__content"
                                                            href="https://www.sheeranalyticsandinsights.com//info/value-chain-assessment"><span
                                                                class="wp-block-navigation-item__label">Value Chain
                                                                Assessment</span></a></li>
                                                    <li
                                                        class="has-xsmall-font-size wp-block-navigation-item wp-block-navigation-link">
                                                        <a class="wp-block-navigation-item__content"
                                                            href="https://www.sheeranalyticsandinsights.com//info/chemical-consulting-service"><span
                                                                class="wp-block-navigation-item__label">Chemical
                                                                Consulting Services</span></a></li>
                                                </ul>
                                            </li>
                                            <li
                                                class="has-xsmall-font-size wp-block-navigation-item wp-block-navigation-link">
                                                <a class="wp-block-navigation-item__content"
                                                    href="https://www.sheeranalyticsandinsights.com//contact"><span
                                                        class="wp-block-navigation-item__label">Contact</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div
                        class="wp-block-group fr-mobile-hide fr-tablet-hide is-content-justification-right is-layout-flex wp-container-14">
                        <form role="search" method="get" action="https://www.sheeranalyticsandinsights.com//"
                            class="wp-block-search__button-inside wp-block-search__icon-button is-style-floating-white-search top-search-icon wp-block-search">
                            <label for="wp-block-search__input-12"
                                class="wp-block-search__label screen-reader-text">Search</label>
                            <div class="wp-block-search__inside-wrapper " style={{"border": "none"}}>
                            <button style={{"border": "none","background-color": "transparent"}}><svg class="search-icon"
                                        viewBox="0 0 24 24" width="25" height="28">
                                        <path
                                            d="M13.5 6C10.5 6 8 8.5 8 11.5c0 1.1.3 2.1.9 3l-3.4 3 1 1.1 3.4-2.9c1 .9 2.2 1.4 3.6 1.4 3 0 5.5-2.5 5.5-5.5C19 8.5 16.5 6 13.5 6zm0 9.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z">
                                        </path>
                                    </svg>
                                    </button>
                              </div>
                        </form>
                        
                        <div class="wp-block-buttons is-layout-flex">
                            <div class="wp-block-button is-style-system-btn get-a-custom-solution fr-mobile-hide"><a
                                    class="wp-block-button__link has-textonprimary-color has-primary-background-color has-text-color has-background wp-element-button"
                                    href="#"
                                    style={{"border-radius":"3px","padding-top":"6px","padding-right":"18px","padding-bottom":"6px","padding-left":"18px"}}>Get
                                    a Custom Solution</a></div>
                            
                        </div>
                    </div>
                   
                </div>
               
            </div>
           
        </header>
       






<div style={{"width":"1000px","height":"1000px"}}>

</div>


      <footer>
        <section class="globalsite cmp-globalsite-globalcontextualfooter">
          <div class="contextual-footer smoky-background-color">
            <div class="top-footer-nav grid-norm">
              <div class="row">
                <div class="col-md-2 col-sm-12">
                  <a href="/en">
                    <img alt="Sheer" src="https://www.sheeranalyticsandinsights.com/static/sai_logo-8bdcb86c43808dfb831384efccd61b52.png" width="175" height="35"  class="img-responsive lazyload" />
                  </a>
                </div>
                {/* <!-- desktop top links--> */}

                <div class="col-md-3 social-share hide-tablet hide-mobile hide-mobile-sm">
                  <a href="https://www.youtube.com" class="social-link">
                    <span class="gcom-icon-social-youtube"></span>
                  </a>

                  <a href="https://twitter.com" class="social-link">
                    <span class="gcom-icon-social-twitter"></span>
                  </a>

                  <a href="https://www.linkedin.com" class="social-link">
                    <span class="gcom-icon-social-linkedin"></span>
                  </a>

                  <a href="https://www.facebook.com" class="social-link">
                    <span class="gcom-icon-social-facebook"></span>
                  </a>

                  <a href="https://www.instagram.com" class="social-link">
                    <span class="gcom-icon-social-instagram"></span>
                  </a>
                </div>
              </div>
              {/* <!-- mobile top links --> */}

            </div>
            <div class="grid-full no-top-bottom">
              <div class="grid-norm no-top-bottom">
                <div class="row">
                  <div class="col-md-12 xml-container">
                    <ul class="nav navbar-nav nav-left hide-mobile-sm hide-tablet hide-mobile">
                      <li class="mg-r30 li-style">
                        <span href="#" class="nav-link primary-link">About SAI </span>
                        <div class="row">
                          <div class="sub-nav-col col-sm-6">
                            <span class="mg-b15">Who We Are</span>
                            <ul class="nav">
                              <li>
                                <a href="https://www.sheeranalyticsandinsights.com/about-us" class="nav-link" data-sublink="About Us" data-nav-category="About sheer" data-nav-sub-category="Who We Are">
                                  About Us
                                </a>
                              </li>

                              <li>
                                <a href=" " class="nav-link" data-sublink="Corporate Responsibility" data-nav-category="About sheer" data-nav-sub-category="Who We Are">
                                  Corporate Responsibility
                                </a>
                              </li>

                              <li>
                                <a href=" " class="nav-link" data-sublink="Investor Relations" data-nav-category="About sheer" data-nav-sub-category="Who We Are">
                                  Investor Relations
                                </a>
                              </li>

                              <li>
                                <a href=" " class="nav-link" data-sublink="Newsroom" data-nav-category="About sheer" data-nav-sub-category="Who We Are">
                                  Newsroom
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div class="sub-nav-col col-sm-6">
                            <span class="mg-b15">What We Do</span>
                            <ul class="nav">
                              <li>
                                <a href="/en/products" class="nav-link" data-sublink="Research &amp; Advisory" data-nav-category="About sheer" data-nav-sub-category="What We Do">
                                  Research &amp; Advisory
                                </a>
                              </li>

                              <li>
                                <a href="" class="nav-link" data-sublink="Conferences" data-nav-category="About sheer" data-nav-sub-category="What We Do">
                                  Conferences
                                </a>
                              </li>

                              <li>
                                <a href=" " class="nav-link" data-sublink="Consulting" data-nav-category="About sheer" data-nav-sub-category="What We Do">
                                  Consulting
                                </a>
                              </li>

                              <li>
                                <a href=" " class="nav-link" data-sublink="Digital Markets" data-nav-category="About sheer" data-nav-sub-category="What We Do">
                                  Digital Markets
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>

                      <li class="mg-r30 li-style">
                        <span href="#" class="nav-link primary-link">Get in Touch</span>
                        <div class="row">
                          <div class="sub-nav-col col-sm-6">
                            <span class="mg-b15">Contact</span>
                            <ul class="nav">
                              <li>
                                <a href="https://www.sheeranalyticsandinsights.com/contact-us" class="nav-link" data-sublink="Contact Us" data-nav-category="Get in Touch" data-nav-sub-category="Contact">
                                  Contact Us
                                </a>
                              </li>

                              <li>
                                <a href="/en/become-a-client?bacCtaId=bacFooterCtaBecomeAClient" class="nav-link" data-sublink="Become a Client" data-nav-category="Get in Touch" data-nav-sub-category="Contact">
                                  Become a Client
                                </a>
                              </li>

                              <li>
                                <a href=" " class="nav-link" data-sublink="Office Locations" data-nav-category="Get in Touch" data-nav-sub-category="Contact">
                                  Office Locations
                                </a>
                              </li>

                              <li>
                                <a href=" " class="nav-link" data-sublink="Technical Support" data-nav-category="Get in Touch" data-nav-sub-category="Contact">
                                  Technical Support
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div class="sub-nav-col col-sm-6">
                            <span class="mg-b15">Careers</span>
                            <ul class="nav">
                              <li>
                                <a href="https://www.sheeranalyticsandinsights.com/" class="nav-link" data-sublink="Why sheer" data-nav-category="Get in Touch" data-nav-sub-category="Careers">
                                  Why Sheer
                                </a>
                              </li>

                              <li>
                                <a href="https://www.sheeranalyticsandinsights.com/career" class="nav-link" data-sublink="Search Careers" data-nav-category="Get in Touch" data-nav-sub-category="Careers">
                                  Search Careers
                                </a>
                              </li>

                              <li>
                                <a href="" class="nav-link" data-sublink="Our Culture" data-nav-category="Get in Touch" data-nav-sub-category="Careers">
                                  Our Culture
                                </a>
                              </li>

                              <li>
                                <a href="" class="nav-link" data-sublink="Careers Blog" data-nav-category="Get in Touch" data-nav-sub-category="Careers">
                                  Careers Blog
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>

                      <li class="mg-r30 li-style">
                        <span href="#" class="nav-link primary-link">Latest Insights</span>
                        <div class="row">
                          <div class="sub-nav-col col-sm-12">
                            <span class="mg-b15">Resources</span>
                            <ul class="nav">
                              <li>
                                <a href="/en/insights" class="nav-link" data-sublink="Select Insights" data-nav-category="Latest Insights" data-nav-sub-category="Resources">
                                  Select Insights
                                </a>
                              </li>

                              <li>
                                <a href="/en/webinars" class="nav-link" data-sublink="Webinars" data-nav-category="Latest Insights" data-nav-sub-category="Resources">
                                  Webinars
                                </a>
                              </li>
                              <li>
                                <a href="/en/glossary" class="nav-link" data-sublink="Glossary" data-nav-category="Latest Insights" data-nav-sub-category="Resources">
                                  Glossary
                                </a>
                              </li>

                              <li>
                                <a href="/en/customer-success-stories" class="nav-link" data-sublink="Client Stories" data-nav-category="Latest Insights" data-nav-sub-category="Resources">
                                  Client Stories
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer-bottom-nav grid-norm">
              <div class="row">
                <div class="col-md-6 col-sm-12 col-xs-12 mg-tab">
                  <span>
                    <a class="footer-bottom-link" data-en-title="Policies" href="/en/about/policies/overview" title="Policies">Policies</a>
                  </span>

                  <span>
                    <a class="footer-bottom-link" data-en-title="Privacy Policy" href="https://www.sheeranalyticsandinsights.com/privacy-policy" title="Privacy Policy">Privacy Policy</a>
                  </span>

                  <span>
                    <a class="footer-bottom-link" data-en-title="Terms of Use" href="https://www.sheeranalyticsandinsights.com/terms-of-use" title="Terms of Use">Terms of Use</a>
                  </span>

                  <span>
                    <a class="footer-bottom-link" data-en-title="Ombudsman" href="/en/about/ombuds" title="Ombuds">Ombuds</a>
                  </span>
                </div>
                <div class="col-md-2 hide-mobile hide-mobile-sm">
                </div>
                <div class="col-md-4 hide-mobile hide-mobile-sm copyright hide-tablet">
                  <p class="copyright-text flt-right">
                    &copy;2023&nbsp;Sheer, Inc. and/or its affiliates. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default App;
