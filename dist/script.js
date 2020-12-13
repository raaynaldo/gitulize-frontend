document.addEventListener("DOMContentLoaded", () => {
    // const url = "http://localhost:3000"
    const url = "https://gitulize-backend.herokuapp.com/"
    new Visualize(url);
    new GitCommand(url);
})