class DropBoxController { 

    constructor() { 

        this.btnSendFileEl = document.querySelector('#btn-send-file');
        this.inputFilesEl = document.querySelector('#files');
        this.snackModal = document.querySelector('#react-snackbar-root')

        this.initEvents();

    }

    initEvents() { 

        this.btnSendFileEl.addEventListener('click', e=> { 

            this.inputFilesEl.click()

        });

        this.inputFilesEl.addEventListener('change', e=> { 

            console.log(e.target.files)

            this.snackModal.style.display = 'block';

        });

    }

}