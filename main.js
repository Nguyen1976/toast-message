function toast({title = '', message = '', type = 'info', duration = 3000}) {
    const main = document.getElementById('toast');
    if(main) {
        const toast = document.createElement('div');

        const autoRemove = setTimeout(() => main.removeChild(toast), duration+1000);//Loại bỏ phaafn tử html

        toast.onclick = function(e) {
            if(e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemove);
            }
        }

        toast.classList.add('toast');
        toast.classList.add(`toast--${type}`);

        toast.style.animation = `slideInleft ease 0.3s, fadeOut linear 1s ${duration/1000}s forwards`;

        const icons = {
            info: 'fa-solid fa-circle-info',
            success: 'fa-solid fa-circle-check',
            warning: 'fa-solid fa-triangle-exclamation',
            error: 'fa-solid fa-circle-xmark',
        }
        const icon = icons[type];

        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <div class="toast__title">
                    ${title}
                </div>
                <div class="toast__msg">
                    ${message}
                </div>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-circle-xmark"></i>
            </div>
        `;
        main.appendChild(toast);//thêm phần tử html vào trang web
        
    }
}


function showSuccesToast() {
    toast({
        title: 'Thành công',
        message: 'Bạn đã thành công hahaha',
        type:'success',
        duration: 3000,
    });
}

function showErrorToast() {
    toast({
        title: 'Thất bại',
        message: 'Bạn đã thất bại hahaha',
        type:'error',
        duration: 3000,
    });
}