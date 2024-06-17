document.addEventListener('DOMContentLoaded', ()=> {
    //調整編輯器預覽iframe的scale值，根據iframe設定的指定寬度(1000px) / 目前wrapper的寬度
    const iframe = document.getElementById('editorPreviewIframe')
    const editorWrapper = document.getElementsByClassName('template-edit-preview')[0]

    var updateIframeScale = function(){
        const scale = editorWrapper.offsetWidth / iframe.offsetWidth
        iframe.style.transform = `scale(${scale}, ${scale})`

        //更新wrapper的height值
        editorWrapper.style.height = iframe.offsetHeight * scale + 'px'
    }
    updateIframeScale()

    window.addEventListener('resize', updateIframeScale)
})