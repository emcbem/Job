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
        cdnHostedLodash.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js");
        cdnHostedLodash.setAttribute("integrity", "sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ==")
        cdnHostedLodash.setAttribute("onload", reduceUrls)
        headElement.appendChild(lodashScript);
        headElement.appendChild(cdnHostedLodash);
        //make it do the hash requirement
    }
});

function reduceUrls()
{
    console.log( _.reduce(document.querySelectorAll("a"), (urls, tag) => {
        urls.push(tag.getAttribute("href"));
         return urls;
    }, []));
}


//Requirement 2
function StoreJumpId() {
    while(digitalData.page.pageInfo === undefined)
    {
        setTimeout(StoreJumpId, 100)
    }
    digitalData.page.pageInfo.jumpid = ParseJumpIdFromString(document.URL); //Should be available when dom is loaded. Hopefully
}

function ParseJumpIdFromString(string)
{
    const jumpidRegex = /(?<=jumpid\=)[a-z]{2}_[\w]+/;
    try
    {
        return string.match(jumpidRegex)[0];
    }
    catch
    {
        return null;
    }
}

//Requirement 3
function MakeElementClickStorage() {
    document.addEventListener("click", (e) => {
        AddClickActivity(e.target)
    });
}

function AddClickActivity(e)
{
    let clickArray = localStorage.getItem("click_activity") === null ? [] : JSON.parse(localStorage.getItem("click_activity"));
    clickArray.push(StringifyElement(e));
    localStorage.setItem("click_activity", JSON.stringify(clickArray));
}

function StringifyElement(e)
{
    let log = e.tagName.toLowerCase(); //add tag
    if(e.getAttribute("id") != null)
    {
        log += ":" + e.getAttribute("id"); //add attribute
    }
    if(e.getAttribute("class") != null)
    {
        let classes = e.getAttribute("class").replaceAll(" ", "."); //make classes into correct format
        log += ":" + classes;
    }
    if(e.getAttribute("name") != null)
    {
      log += ":" + e.getAttribute("name");
    }
    return log;
}

module.exports  = {StringifyElement, ParseJumpIdFromString};