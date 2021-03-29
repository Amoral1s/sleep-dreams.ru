/* jQuery(document).ready(function ($) { */
document.addEventListener('DOMContentLoaded', () => {    

    
    const headerCatalog = document.querySelector('.header-catalog');
    headerCatalog.addEventListener('click', () => {
        headerCatalog.classList.toggle('header-catalog-active');
        
        jQuery('.header-down').slideToggle(100);
        jQuery('.header').toggleClass('bb');

        if (jQuery(window).width() < 992) {
            jQuery('.header-nav').slideToggle(100);
        }
    });

    

  

});