function btnFloat() {
    const btnAdd = document.getElementById('btnAdd')
    const btnList = document.querySelector('.btn-float-list')
    btnList.style.display = 'none'

    btnAdd.addEventListener('click', function () {
        let existingBox = document.querySelector('.black-box')
        let divBox = document.createElement('div')
        divBox.classList.add('black-box')


        if (btnList.style.display == 'none') {
            btnList.style.display = 'block'
        } else {
            btnList.style.display = 'none'
        }

        console.log(btnList.style.display)


        if (existingBox) {
            existingBox.remove()
        } else {
            document.body.appendChild(divBox)
        }
    })
}

(function () {
    btnFloat()
})();