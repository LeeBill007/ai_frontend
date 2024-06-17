document.addEventListener('DOMContentLoaded', ()=> {
    //頁籤切換更新Toggler名稱(手機版用)
    const updateTogglerName = ()=> {
        const togglerEle = document.getElementById('memberTabToggler').getElementsByTagName('span').item(0)
        const memberTabEle = document.querySelector('#memberCategoryTab .nav-link.active')
        togglerEle.innerHTML = memberTabEle.innerHTML
    }
    updateTogglerName()

    document.querySelectorAll('#memberCategoryTab .nav-link').forEach((ele)=>{
        ele.addEventListener('click', ()=>{

            updateTogglerName()
            //手機版時關閉選單
            const memberTabToggler = document.getElementById('memberTabToggler')
            if(memberTabToggler.offsetParent !== null){
                document.getElementById('memberTabToggler').click()
            }
        })
    })

})