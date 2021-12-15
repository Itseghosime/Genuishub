window.onload = function() {
    document.querySelector('body').style.overflowX = 'hidden';
    document.querySelector('body').style.overflowY = 'hidden';

    window.setTimeout(() => {
        document.querySelector('#preloader').classList.add("hide");
        document.querySelector('body').style.overflowY = 'scroll';
        window.__be = window.__be || {};
        window.__be.id = "61a73e6606af9b0007f0a685";
        (function() {
            var be = document.createElement('script'); be.type = 'text/javascript'; be.async = true;
            be.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(be, s);
        })();
    }, 5000)
}