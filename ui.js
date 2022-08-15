class UI{

    constructor(){
        // id si profile  olan div in altina profil div i olusturup ekliycez
        // ayni sekilde repo div inin altina da yeni div olusturup repoyu aticaz
        // lastusers ul nin altina da li leri ekliycez
        // once hangi div in altina ekleyecegimizi seciyoruz
        this.profileDiv=document.getElementById("profile");
        this.repoDiv=document.getElementById("repos");
        this.lastUsers=document.getElementById("last-users")

        // input alanini da temizlemek icin seciyoruz
        this.inputField=document.getElementById("githubname")

        // card body altina hata mesaji yazdirmak icin seciyorum
        this.cardBody=document.querySelector(".card-body");
    }


    clearInput(){
        this.inputField.value="";
        // getData icinde kullanicaz
    }

    showUserInfo(user){
        this.profileDiv.innerHTML=`
        
        <div class="card card-body mb-3">
                    <div class="row">
                      <div class="col-md-4">
                        <a href="${user.html_url}" target = "_blank">
                         <img class="img-fluid mb-2" src="${user.avatar_url}"> </a>
                         <hr>
                         <div id="fullName"><strong>${user.name}</strong></div>
                         <hr>
                         <div id="bio">${user.bio}</div>
                        </div>
                      <div class="col-md-8">
                            <button class="btn btn-secondary">
                                  Takipçi  <span class="badge badge-light">${user.followers}</span>
                            </button>
                            <button class="btn btn-info">
                                 Takip Edilen  <span class="badge badge-light">${user.following}</span>
                              </button>
                            <button class="btn btn-danger">
                                Repolar  <span class="badge badge-light">${user.public_repos}</span>
                            </button>
                            <hr>
                            <li class="list-group">
                                <li class="list-group-item borderzero">
                                    <img src="images/company.png" width="30px"> <span id="company">${user.company}</span>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/location.png" width="30px"> <span id = "location">${user.location}</a>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/mail.png" width="30px"> <span id="mail">${user.email}</span>
                                    
                                </li>
                                
                            </div>
                               
                            
                      </div>
                </div>
        
         `;
    }



    showMessage(message,type){
        const div=document.createElement("div");
        div.className=`alert alert-${type}`;
        div.textContent=message;

        this.cardBody.appendChild(div);

        setTimeout(()=>{
            div.remove();
        },2000)

    }
}