const formatToPhone = (event) => {
    try{
        let numberObj1 = libphonenumber.parsePhoneNumber(event.target.value, 'RU')
        event.target.value = numberObj1.number
    }catch (e){

    }
};

function call(){
    alert("Сообщение отправлено!")
}

const inputElement = document.getElementById('phone');
inputElement.addEventListener('keyup',formatToPhone);