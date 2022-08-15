class Github{

constructor(){
    this.url="https://api.github.com/users/"
}

    async getGithubData(username){
        const responseUser=await fetch(this.url+username);
        const userData=await responseUser.json();
        
        const responseRepo=await fetch(this.url+username+"/repos");
        const repoData=await responseRepo.json();

        return {
            user:userData,
            repo:repoData
        }
    }

}