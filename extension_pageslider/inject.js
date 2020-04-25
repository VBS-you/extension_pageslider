

// var url = []
var    t=600



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
        right_arrow=document.querySelectorAll("i.el-icon.el-icon-arrow-right")[0]    

        for (let index = 1; index < page; index++) {
         
                right_arrow.click()   
        }





        }, 2*t);
        t=2.5*t
}

    


        setTimeout(() => {
            btn_click = document.querySelectorAll("span.btn.bluefont")[seq-1]

           
                if (btn_click!=null) {
                    btn_click.click()
                }else{
                    if (seq==10||seq==9) {
                        
                        chrome.runtime.sendMessage({
                            "message": "override",
                            "page":page,
                            "seq":seq
                        });
                    }
                }
            

            
        
        }, 2*t);   //page>1  then 5t-2t = 3t



}
















