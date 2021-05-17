const API_KEY = 'AIzaSyCYzO2cRtI0XnpMAU6kvSGAYp-wGFLEThU';
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];

function onGapiLoad() {
    gapi.client
        .init({
            apiKey: API_KEY,
            discoveryDocs: DISCOVERY_DOCS,
        })
        .then(
            function () {
                console.log('gapi init success');
                chrome.identity.getAuthToken({ interactive: true }, function (token) {
                    gapi.auth.setToken({
                        access_token: token,
                    });
                });
            },
            function (error) {
                console.log('gapi init fail', error);
            }
        );
}