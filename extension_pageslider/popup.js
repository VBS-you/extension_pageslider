

var page_num
var seq_num





document.addEventListener('DOMContentLoaded', function() {
    
    
    
    
    page_num = document.getElementById("page_num")
    seq_num  = document.getElementById("seq_num")


    seq_num.value=localStorage.getItem("seq")
    page_num.value=localStorage.getItem("page")




    
    var StartButton = document.getElementById('start');

    StartButton.addEventListener('click', function() {

        seq_num.value=parseInt(seq_num.value)
        page_num.value=parseInt(page_num.value)

        if (page_num.value<=0) {
         page_num.value=1
        }

        


        jumpto(page_num.value,seq_num.value)

        accumulate()

        localStorage.setItem("page", page_num.value);
        localStorage.setItem("seq", seq_num.value);     //    duplicated   ,   need modify


        
}
, false);




var ResetButton = document.getElementById('Reset');

ResetButton.addEventListener('click', function() {

    seq_num.value=1
    page_num.value=1

}, false);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if ("override" == request.message) {
        accumulate(request.page,request.seq)
	}
});






}, false);



function accumulate(page=page_num.value,seq=seq_num.value) {
    
    if (1<=seq&&seq<=9) {
            
        seq_num.value++

    }else{
        seq_num.value=1
        page_num.value=page+1
    }
    


} 




function jumpto(page=1,seq=1) {
    
    // Storage(page=page,)

    //  http://www.baichuanweb.com/produce/myTask

    target_page = {code:"window.location.replace(\"http://www.baichuanweb.com/produce/myTask\")"};
   
    chrome.tabs.executeScript(null, target_page) ; 





    code_inject = {file:"inject.js"}

setTimeout(() => {
   
    chrome.tabs.executeScript(null, code_inject,function () {


        chrome.tabs.query({
            "active": true,
            "currentWindow": true
        },
        function(tabs) {


                chrome.tabs.sendMessage(tabs[0].id, {
                    "page": page,
                    "seq": seq
                });
            
        }
    );


    }) ; 



}, 1600);
    


}