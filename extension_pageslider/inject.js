
var timeadder = 0
// var url = []




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
        tab_page=document.querySelectorAll("li.number")[page-1]
        tab_page.click()
        }, t(2));
    
}


// btn bluefont
setTimeout(() => {
    btn_click = document.querySelectorAll("span.btn.bluefont")[seq-1]
    btn_click.click()

}, t(2));


}
  //  url[index] = document.URL









function t(seconds=1) {

    timeadder += seconds * 1000

    return timeadder

}