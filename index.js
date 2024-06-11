let user;
function userChange() {
    let userNameElement = document.querySelector('.user-name');
    const userInp = document.querySelector('.user').value;
    localStorage.setItem("userName", userInp)
    if(!userInp){
        user = 'Default user'
    }else{
        user = localStorage.getItem("userName")
    }
    userNameElement.textContent = user
    }
    document.querySelector('.user-name').textContent = localStorage.getItem("userName")