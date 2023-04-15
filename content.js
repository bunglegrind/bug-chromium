const button = document.createElement("button");
button.style.display = "block";
button.style.width = "100%";
button.style.height = "300px";

button.id = "bug";
button.textContent = "Click me";

button.addEventListener("click", function () {
    alert("Sending a blob to the background...");
    chrome.runtime.sendMessage(
        {
            type: "bug",
            content: new Blob(
                [new Array(64 * 1024).join("x")],
                {type: "text/plain"}
            )
        },
        (message) => alert(message)
    );
});

document.querySelector("#bug")?.remove();
document.body.prepend(button);
