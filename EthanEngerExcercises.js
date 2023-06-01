//requirement 1
document.addEventListener("load", () =>    //Make sure to not block loading or rendering of page
{
    let scripts = document.querySelectorAll("script"); //make sure the lodash script wasn't already implimented
    let loaded = false;
    scripts.forEach(element => {
        if (element.getAttribute("src") == "lodash.js") {
            loaded = true
        };
    });

    if (!loaded) {
        let headElement = document.querySelector("head");
        let lodashScript = document.createElement("script");
        let cdnHostedLodash = document.createElement("script");
        lodashScript.setAttribute("src", "lodash.js");
        cdnHostedScript.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js");
        headElement.appendChild(lodashScript);
        headElement.appendChild(cdnHostedLodash);
        //make it do the hash requirement
    }
    return document.querySelector("a").reduce();
});


//Requirement 2
function ReadJumpIdThenStoreThisSpinLocks() {
    let url = document.URL
    //let regex = new RegExp("jumpid=") //I couldn't figure out the regex.
    let jumpid = url.split("jumpid=")[1].split("#")[0];
    while (digitalData.page.pageInfo.jumpid == undefined) { }//I am so sorry for my spin lock 
    digitalData.page.pageInfo.jumpid = jumpid;
}

//Requirement 3
function MakeElementClickStoreage() {
    document.addEventListener("click", (e) => {
        let clickArray = localStorage.getItem("click_activity") != null ? JSON.parse(localStorage.getItem("click_activity")) : [];
        let log = e.target.tagName.toLowerCase(); //add tag
        log += ":" + e.target.getAttribute("id"); //add attribute
        let classes = e.target.getAttribute("class").replace(" ", "."); //make classes into correct format
        log += ":" + classes;
        log += ":" + e.target.tagName.toLowerCase();
        clickArray.push(log);
        localStorage.setItem("click_activity", clickArray);
    });
}

//Requirement 4
//Figure out test cases dummy