export class Github {
    private api: String;
    private userid: String;
    private token: String;
    // private isauth: boolean;
    constructor(private Api: String = "https://api.github.com", private Userid: String, private Token: String) {
        this.api = Api;
        this.userid = Userid;
        this.token = Token;
        this.auth();
    }
    async auth() {
        var requestOptions = {
            user: this.userid,
            pass: this.token
        }
        const response= await fetch(api, requestOptions)
        console.log(response)
    }
}