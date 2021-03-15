(function() {

    document.getElementById("add").addEventListener('click', () => {
        document.querySelector('.numOf').stepUp();
    })

    document.getElementById('minus').addEventListener('click', () => {
        document.querySelector('.numOf').stepDown();
    })
    

})();