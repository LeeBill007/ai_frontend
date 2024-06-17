(function(window, document){
    document.addEventListener("DOMContentLoaded", ()=> {
        var scrollTop = 0
        var isMobileCollapsed = true
        
        //更新navbar底色
        var updateNavbarTransparent = ()=> {
            var navbar = document.querySelector('.navbar');
            if (scrollTop == 0 && isMobileCollapsed) {
                navbar.classList.add('bg-transparent');
            } else {
                navbar.classList.remove('bg-transparent');
            }
        }    
        
        //window scroll
        window.addEventListener('scroll', function() {
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            updateNavbarTransparent()
        });

        //init
        updateNavbarTransparent()
    });
})(window, document)