class Storage{

    static getSearchedUsersFromStorage(){
        let users;

        if(localStorage.getItem("searched")===null){
            users=[];
        }else{
            users=JSON.parse(localStorage.getItem("searched"));

        }
        return users;

    }

    static addSearchedUserToStorage(username){
        let users=this.getSearchedUsersFromStorage();

        // gonderdigim username bu arayde var mi sorguluyorum, yoksa ekliyorum
        if(users.indexOf(username)===-1){
            users.push(username);
        }
        localStorage.setItem("searched",JSON.stringify(users));

    }
    static clearAllUsersFromStorage(){
        localStorage.removeItem("searched");
    }

}