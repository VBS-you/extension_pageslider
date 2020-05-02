

// var url = []
var    timeadder=0

function t(seconds=1) {

    timeadder += seconds * 1000

    return timeadder

} 


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    page=request.page
    seq=request.seq
    month=request.month

    goto(page,seq,month)  // timeadder ==0?

});





    // page=localStorage.getItem("page")
    // seq=localStorage.getItem("seq")


    // goto(page,seq)



// document.querySelectorAll("i.el-input__icon.el-icon-date")[0].click();
// document.querySelectorAll("a.cell")[12].click()






function goto(page=1,seq=1,month="Default"){

    if (month!="Default") {
        if (month=="Mar") {
            
            document.querySelectorAll("i.el-input__icon.el-icon-date")[0].click();
            setTimeout(() => {
                document.querySelectorAll("a.cell")[12].click()
            }, t(0.3));
            
            t(0.5)
        }
        if (month=="Apr") {
            
            document.querySelectorAll("i.el-input__icon.el-icon-date")[0].click();
            setTimeout(() => {
                document.querySelectorAll("a.cell")[13].click()
            }, t(0.3));
            
            t(0.5)
        }

    }

    setTimeout(() => {
        tab_worn = document.querySelectorAll("span.el-radio-button__inner")[3]
        tab_worn.click()
    }, t(0)); //included in "month default" if selection





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





        }, t(0.7));
        t(0.4)
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
            

            
        
        }, t(0.7));   //page>1  then 4.4t-2t = 2.4t



}
















