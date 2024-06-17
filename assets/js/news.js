document.addEventListener('DOMContentLoaded', ()=> {
    //頁籤切換更新Toggler名稱(手機版用)
    const updateTogglerName = ()=> {
        const togglerEle = document.getElementById('newsTabToggler').getElementsByTagName('span').item(0)
        const newsTabEle = document.querySelector('#newsCategoryTab .nav-link.active')
        togglerEle.innerHTML = newsTabEle.innerHTML
    }
    updateTogglerName()

    document.querySelectorAll('#newsCategoryTab .nav-link').forEach((ele)=>{
        ele.addEventListener('click', ()=>{

            updateTogglerName()
            //手機版時關閉選單
            const newsTabToggler = document.getElementById('newsTabToggler')
            if(newsTabToggler.offsetParent !== null){
                document.getElementById('newsTabToggler').click()
            }
        })
    })

})