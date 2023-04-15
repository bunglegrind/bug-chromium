function isBlob(obj) {
    return (
        typeof obj === "object"
        && obj.size > 0
        && typeof obj.type === "string"
    );
}


chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message?.type === "bug") {
        if (isBlob(message.content)) {
            sendResponse("Received blob. Size: " + message.content.size);
            return true;
        }
        sendResponse("It isn't a blob. constructor: " + message.content.constructor.name);
        return true;
    }
});
