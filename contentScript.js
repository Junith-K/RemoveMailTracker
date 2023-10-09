// contentScript.js
function deleteDiv() {
  console.log("dd")
  const divElement = document.querySelector('div.Am.Al.editable.LW-avf.tS-tW')
  if(divElement){
    const signatureDiv = divElement.querySelector('#mt-signature');

    if (signatureDiv) {
        divElement.removeChild(signatureDiv);
    }
  }
  
}

// Run on page load
deleteDiv();

// Run on DOM mutation (changes in the DOM)
var observer = new MutationObserver(function (mutationsList) {
  for (var mutation of mutationsList) {
    if (mutation.type === "childList") {
      // Check for the presence of the div after each mutation
      deleteDiv();
    }
  }
});

// Start observing the target node for configured mutations
observer.observe(document, { childList: true, subtree: true });
