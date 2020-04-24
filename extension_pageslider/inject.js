

// var url = []
var    t=800



chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    page=request.page
    seq=request.seq


    goto(page,seq)

});





    // page=localStorage.getItem("page")
    // seq=localStorage.getItem("seq")


    // goto(page,seq)










function goto(page=1,seq=1){



    tab_worn = document.querySelectorAll("span.el-radio-button__inner")[3]
    tab_worn.click()




if (page>1) {
    setTimeout(() => {

        // page_inputbox=document.querySelectorAll("input.el-input__inner")[2]   
        // if (page_inputbox.value!=page) {
        // page_inputbox.value=page
        // page_inputbox.select()
        // right_arrow=document.querySelectorAll("i.el-icon.el-icon-arrow-right")[0]       
        // right_arrow.dispatchEvent(new MouseEvent("mousedown"))
        // }

        tab_page=document.querySelectorAll("li.number")[page-1]
        tab_page.click()





        }, 2*t);
        t=1.5*t
}

    


        setTimeout(() => {
            btn_click = document.querySelectorAll("span.btn.bluefont")[seq-1]
            btn_click.click()
        
        }, 2*t);   //3t-2t = 1t



}
















