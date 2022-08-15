const githubForm=document.getElementById("github-form");
const nameInput=document.getElementById("githubname");
const clearLastUsers=document.getElementById("clear-last-users");
const lastUsers=document.getElementById("last-users");

const github=new Github();
const ui=new UI();

eventListeners();

function eventListeners(){
githubForm.addEventListener("submit",getData);
clearLastUsers.addEventListener("click",clearAllSearched);
document.addEventListener("DOMContentLoaded",getAllSearched);


}

function getData(e){
    let username= nameInput.value.trim();
    if(username===""){
        alert("Lutfen Gecerli Bir Kullanici Adi Girin")
    }else{
        github.getGithubData(username).then(response=>{
            // eger hatali bir giris yaptiysak hata yazdirmak istiyoruz
            if(response.user.message==="Not Found"){
                ui.showMessage("kullanici bulunamadi..","danger");
            }else{
                ui.showUserInfo(response.user);
                ui.showRepoInfo(response.repo);
                ui.showMessage("tebrikler..","success");
            }
        })
        .catch(err=>ui.showMessage("err","danger"))
    } 
   
    ui.clearInput();
    e.preventDefault();
}

function clearAllSearched(){


}

function getAllSearched(){

}
