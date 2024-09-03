// This script fully automates the withdrawl of LinkedIn invitations
(function run() {
    console.log("Started");
    var totalCount = 0;
    var els = [];

    function populateEls() {
        els = Array.from(document.querySelectorAll('button[aria-label^="Withdraw invitation"]'));
    }

    function clickWithdrawConfirmation() {
        const confirmButton = document.querySelector('div[role="alertdialog"] button[data-test-dialog-primary-btn]');
        if (confirmButton && confirmButton.textContent.trim() === "Withdraw") {
            confirmButton.click();
            return true;
        }
        return false;
    }

    function runWithdraw() {
        console.log(`Found ${els.length} invitations to withdraw`);
        
        function processNext(index) {
            if (index >= els.length) {
                console.log("Finished current batch. Searching for more...");
                setTimeout(() => {
                    populateEls();
                    if (els.length === 0) {
                        console.log("No more invitations to withdraw. Done.");
                    } else {
                        runWithdraw();
                    }
                }, 2000);
                return;
            }

            const el = els[index];
            el.click();
            
            setTimeout(() => {
                if (clickWithdrawConfirmation()) {
                    totalCount++;
                    console.log(`Withdrew invitation ${totalCount}`);
                } else {
                    console.log("Couldn't find confirmation button. Skipping.");
                }
                
                setTimeout(() => processNext(index + 1), 1500);
            }, 1000);
        }

        processNext(0);
    }

    populateEls();
    runWithdraw();
})();