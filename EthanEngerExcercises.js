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
    document.addEventListener("DOMContentLoaded", () =>
    {
        let url = document.URL
        //let regex = new RegExp("/jumpid=[a-zA-Z0-9+_[a-zA-Z0-9]]") //I couldn't figure out the regex.
        //lets figure t out
        let jumpid = url.split("jumpid=")[1].split("#")[0];
        //while (digitalData.page.pageInfo.jumpid == undefined) { }//I am so sorry for my spin lock 
        digitalData.page.pageInfo.jumpid = jumpid; //Should be available when dom is loaded. Hopefully
    });
}

//Requirement 3
function MakeElementClickStoreage() {
    document.addEventListener("click", (e) => {
        AddClickActivity(e.target)
    });
}

function AddClickActivity(e)
{
    let clickArray = localStorage.getItem("click_activity") !== null ? JSON.parse(localStorage.getItem("click_activity")) : [];
    let log = e.tagName.toLowerCase(); //add tag
    log += ":" + e.getAttribute("id"); //add attribute
    let classes = e.getAttribute("class").replace(" ", "."); //make classes into correct format
    log += ":" + classes;
    log += ":" + e.getAttribute("name");
    clickArray.push(log);
    localStorage.setItem("click_activity", clickArray);
}

//Requirement 4
//Figure out test cases dummy
//lets try mocha
var assert = require('mocha');
describe('Click Activity', () => {
    describe('AddClickActivity()', () =>
    {
        let exampleElement = document.createElement("a")
        exampleElement.setAttribute("id", "matt1");
        exampleElement.setAttribute("class", "link button fixture");
        exampleElement.setAttribute("name", "matt");
        AddClickActivity(exampleElement);
        assert.equal(JSON.parse(localStorage.getItem("click_activity")[0], "a:matt1:link.button.fixture:matt"))
    });
});