if (__DEV__) {
  ClientSecret = "ad9f8c3763b762f1059fb5479ba2361f251d2174";
  AppKey = "5f14e6b481c0269ba66e2cb925988dc2d2a5a773";
}

//var publicToken = ; //Set to publicToken value if previously retrieved or 'null' for new users
var finishURL = "https://connect.humanapi.co/blank/hc-finish";
var closeURL = "https://connect.humanapi.co/blank/hc-close";

const humanApiService = {
  connectHumanAPI() {
    const humanAPI = new HumanAPI();
    const options = {
      client_id: "4083a1c1f8a9d5dcc55a5bf550f41d7733fb58e7",
      client_user_id: "mokhtar@kantum.xyz",
      // custom auth handle without auth_url
      auth: data => this.sendAuth(data),
      /* default auth_url handle
      auth_url: 'AUTH_URL',
      success: (data) => console.log(data.public_token)  // callback when success with auth_url
      */
      cancel: () => console.log("cancel") // callback when cancel
    };
    humanAPI.onConnect(options);
  }
};

export default humanApiService;
