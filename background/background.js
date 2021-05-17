const API_KEY = 'AIzaSyA2lbpRU4mEOazqHuRyHNZfIv3fFBvrPR8';
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];

let user_signed_in = false;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.message === 'get_access_token')
    {
        chrome.identity.getAuthToken({interactive: true}, function(token) {
            console.log(token);
        });
        sendResponse({signed_in: true});
    }

    else if(request.message === 'get_profile')
    {
        var email;
        chrome.identity.getProfileUserInfo({accountStatus: 'ANY'}, function(user_info) {
            console.log(user_info);
            email = user_info.email;
        });
        console.log(email);
        sendResponse({email});
    }
});