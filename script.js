const input_box = document.getElementById("input_box");
const list_container = document.getElementById("list_container");


function addTask()
{
    if(input_box.value === ' ')
    {
        alert("You must write something!");
    }
    else
    {
        // create a text and add it to the list// 
        let li = document.createElement("li");
        li.innerHTML = input_box.value;
        list_container.appendChild(li);

        // create the cross symbol and add it//
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    // clear the text after adding it//
    input_box.value = " ";

    //function call to save data in browser// 
    saveData();
}

list_container.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data", list_container.innerHTML);
}

function showTask()
{
    list_container.innerHTML = localStorage.getItem("data");
}

showTask();