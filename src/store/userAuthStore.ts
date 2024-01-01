import { observable, action, makeObservable, computed } from "mobx";

export class UserAuthStore {
    
    constructor(){
        makeObservable(this);
    }

    @observable
    public isAuthenticated: boolean = false;

    @observable
    public jwtToken: string = "";

    @observable
    public error: string = ""

    @action async login(username : string, password : string){
        const url = "https://apis.ccbp.in/login";
        const options = {
            method : "POST",
            body : JSON.stringify({
                username, password
            })
        }

        const response = await fetch(url, options);
        const data = await response.json();
        if (data.jwt_token !== undefined){
            this.isAuthenticated = true;
            this.jwtToken = data.jwt_token;
            // localStorage.setItem("token", data.jwt_token);
            // return this.isAuthenticated;
        } else {
            this.error = data.error_msg;
            // return this.isAuthenticated;
        }
        
    }

    @action
    public logout(): void {
        this.isAuthenticated = false;
        this.jwtToken = "";
        // localStorage.removeItem("token");
    }
}