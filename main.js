let form = document.querySelector('.form');
let urlInput = document.querySelector('[type=url]')
let select = document.querySelector('select')
let qrcode = document.getElementById('qrcode');

const generateQRCode = function(e){
    e.preventDefault();
    hideSpinner();
    clearUI();
    if(urlInput.value === ''){
        window.alert('please enter url');
        return;
    }else{
        showSpinner();
        setTimeout(() => {
            hideSpinner();
            generate_QR_Code();
            setTimeout(()=>{
                generateBTN(document.querySelector('#qrcode img').src);
                const img = document.querySelector('#qrcode img');
                img.style.width = `calc(${(select.value/100)}  *10%)`;
                img.style.margin = '0px auto';
            },50);
        }, 1000);
    }
}

const showSpinner = ()=>{
    document.querySelector('.spinner').style.display = 'block';
}

const hideSpinner = ()=>{
    document.querySelector('.spinner').style.display = 'none';
}

const generate_QR_Code = () =>{
    new QRCode(qrcode , {
    text : urlInput.value,
    width : select.value,
    height : select.value,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
    });
};

const generateBTN = (urlImg)=>{
    let saveImg = document.createElement('a');
    saveImg.innerHTML = 'Save Image';
    saveImg.classList.add('save');
    saveImg.href = urlImg;
    saveImg.download = 'qrcode';
    qrcode.appendChild(saveImg);
}

const clearUI = ()=>{
    qrcode.innerHTML = '';
}



form.addEventListener('submit',generateQRCode);