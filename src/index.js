setInterval(() => {
	Array.from(document.getElementsByClassName("q-box qu-borderAll qu-borderRadius--small qu-borderColor--raised qu-boxShadow--small qu-mb--small qu-bg--raised")).forEach(e => {
    if (e.getElementsByClassName("q-inline qu-mr--tiny").length > 0) {
    	e.remove();
    	console.log("removed unrelated answer: " + e.getElementsByClassName("puppeteer_test_question_title")[0].innerText);
    }
});
}, 300);