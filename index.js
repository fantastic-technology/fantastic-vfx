let user;
function userChange() {
    let userNameElement = document.querySelector('.user-name');
    const userInp = document.querySelector('.user').value;
    localStorage.setItem("userName", userInp)
    if(!userInp){
        user = 'User'
    }else{
        user = localStorage.getItem("userName")
    }
    userNameElement.textContent = user
    }
document.querySelector('.user-name').textContent = localStorage.getItem("userName")

function download() {
    const userDownloadElement = document.querySelector('.download-count');
    let downloads = parseInt(localStorage.getItem('userDownloads')) || 0;
    downloads += 1;
    localStorage.setItem('userDownloads', downloads);
    userDownloadElement.textContent = downloads;
}

(function() {
    const userNameElement = document.querySelector('.user-name');
    const userDownloadElement = document.querySelector('.download-count');
    
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
        userNameElement.textContent = storedUserName;
    }
    
    const storedDownloads = parseInt(localStorage.getItem('userDownloads')) || 0;
    userDownloadElement.textContent = storedDownloads;
})();