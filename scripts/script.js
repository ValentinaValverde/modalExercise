document.addEventListener('DOMContentLoaded', function(){
    console.log("document ready");

    const overlay = document.querySelector('.overlay');
    const classes = overlay.classList;
    setTimeout(() => {
        classes.toggle('hidden');
    }, 3000);

    const closedModal = document.querySelector('#closedModal');
    closedModal.addEventListener('click', function(){
        classes.toggle('hidden');
    })

});