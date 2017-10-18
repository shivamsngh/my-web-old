function _loadScripts() {
    console.log("blog app script loading")
    let dataScript = document.createElement("script");
    let blogScript = document.createElement("script");

    dataScript.type = "text/javascript";
    dataScript.src = "../js/data-script/data.js";
    document.getElementsByTagName("body")[0].appendChild(dataScript);
    
    dataScript.onload = () => {
        console.log("datascriptloaded");
        blogScript.type = "text/javascript";
        blogScript.src = "../js/component-script/blog.js";
        document.getElementsByTagName("body")[0].appendChild(blogScript);
        blogScript.onload = () => {
            console.log("recent blog script loaded")
            _bindRecentBlogData()
        };
    }
}