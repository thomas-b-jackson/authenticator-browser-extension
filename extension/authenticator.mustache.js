// todo: "pending" https://github.com/mdn/webextensions-examples/blob/master/stored-credentials/auth.js

let maxRetries = 3; // todo: configurable?

(chrome || browser).webRequest.onAuthRequired.addListener(
    /**
     * @param details - see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired#details
     */
    function authenticator(details) {
        return (--maxRetries < 0)
            ? { cancel: true }
            : { authCredentials: { username: `{{ username }}`, password: `{{ password }}` }};
    },
    { urls: [ '<all_urls>' ]},
    [ 'blocking' ],
);
