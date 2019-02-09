import React, { Component } from 'react';

export default class LoginButton extends Component {
  componentDidMount() {
    LoginButton.loadSDK();
    window.snapKitInit = function () {
      var loginButtonIconId = 'my-login-button-target';
        // Mount Login Button
        window.snap.loginkit.mountButton(loginButtonIconId, {
          clientId: 'ce74ae80-01b8-4b70-9ce8-5560057820c8',
          redirectURI: 'http://localhost:3000/redirect',
          scopeList: [
            'user.display_name',
            'user.bitmoji.avatar',
          ],
          handleResponseCallback: function () {
            window.snap.loginkit.fetchUserInfo()
                .then(data => console.log('User info:', data));
          },
        });
    };
  }



  static loadSDK(id = 'loginkit-sdk') {
    if (document.getElementById(id)) return;
    const script = document.createElement("script");
    script.src = "https://sdk.snapkit.com/js/v1/login.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
        <div id="my-login-button-target" />
    );
  }
}