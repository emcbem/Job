//requirement 1
document.addEventListener("load", ()=>    //Make sure to not block loading or rendering of page
{
    let scripts = document.querySelectorAll("script"); //make sure the lodash script wasn't already 
    let loaded = false;
    scripts.forEach(element => {
        if(element.getAttribute("src") == "lodash.js")
        {
            loaded = true
        };
    });

    if(!loaded)
    {
        let headElement = document.querySelector("head");
        let lodashScript = document.createElement("script");
        let cdnHostedLodash = document.createElement("script");
        lodashScript.setAttribute("src", "lodash.js");
        cdnHostedScript.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js");
        headElement.appendChild(lodashScript); 
        headElement.appendChild(cdnHostedLodash);
    }
});


//Requirement 2
document.URL
let regex = new RegExp("[jumpid=]")
//Now imagine i got the regex working and stored it in jumpid
let jumpid = "test";


//Requirement 3
if(localStorage.getItem("click_activity") == null)
{
    const defaultClickArray = []
    localStorage.setItem("click_activity", JSON.stringify(defaultClickArray));
}
document.addEventListener("click", (e)=>{
     let clickArray = localStorage.getItem("click_activity") != null ? JSON.parse(localStorage.getItem("click_activity")) : [];
     let log = e.target.tagName.toLower(); //add tag
     log += ":" + e.target.getAttribute("id"); //add attribute
     let classes = e.target.getAttribute("class").replace(" ", "."); //make classes into correct format
     log += ":" + classes;
     log += ":" + e.target.tagName.toLower();
     clickArray.push(log);
     localStorage.setItem("click_activity", clickArray);
});

//Requirement 4