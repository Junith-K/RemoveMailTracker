var observer = new MutationObserver(function(mutations) {
    var found = false;
    mutations.forEach(function(mutation) {
        if(found==false){
            var isSendButtonVisible = document.querySelector('[aria-label="Send now"]');
            if (isSendButtonVisible) {
                console.log("Element is now visible");
                sendButton = isSendButtonVisible;
                sendButton.addEventListener('click', function() {
                    var currentDate = new Date().toLocaleDateString('en-GB');
                    var count = parseInt(localStorage.getItem(currentDate)) || 0;
                    count++;
                    localStorage.setItem(currentDate, count);
                });
                found = true;
                observer.disconnect();
            }
        }
    });
});

observer.observe(document.body, { childList: true, subtree: true });
