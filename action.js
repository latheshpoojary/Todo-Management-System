
class todo {
    constructor(title, desc, date, priority) {
        this.title = title;
        this.desc = desc;
        this.date = date;
        this.priority = priority;

    }
}
var arr = [];
let index = 0;
var formContainer = document.getElementById('form');
var todoContainer = document.getElementById('todo');
var progressContainer = document.getElementById('progress');
var doneContainer = document.getElementById('done');
var todoTitle = document.getElementById('todo-title');
var todoDescription = document.getElementById('todo-desc');
var todoDate = document.getElementById('message-date');
var todoPriority = document.getElementById('priority');
var formStatus = document.getElementById('formStatus');
function clearForm() {
    formStatus.value = "new";
    todoTitle.value = '';
    todoDescription.value = '';
    todoDate.value = '';


}
formContainer.addEventListener('submit', (event) => {
    event.preventDefault();
    if (formStatus.value === "new") {
        var todoTitleValue = todoTitle.value;
        var todoDescValue = todoDescription.value;
        var todoDateValue = todoDate.value;
        var todoPriorityValue = todoPriority.value;
        var newTodo = new todo(todoTitleValue, todoDescValue, todoDateValue, todoPriorityValue);
        arr.push(newTodo);
        var card = `<div class="card" >
                <div class="card-header">
                    <h3 class="cardTitle" ></h3>
                    <button class="edit-button" onclick="Edit(this.id)" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                </div>
                <div class="card-body">
                    <h5 class="cardDescription"><span></span></h5>
                    <h5 class="cardTime" ></h5>
                </div>
                <div class="travelButton"><button onclick="move('progress',this.id)" class="toProgress">Start</button>
                </div>
            </div>`;
        var tempContainer = document.getElementById('cards');

        tempContainer.innerHTML += card;
        document.querySelector('.cardTitle').textContent = todoTitleValue;
        document.querySelector('.cardDescription').textContent = todoDescValue;
        var dest = new Date(todoDateValue).getTime();
        console.log((dest));
        // 
        updateTimer(tempContainer.lastElementChild,dest);
        document.querySelector('.card').setAttribute("id", index);
        document.querySelector('.edit-button').setAttribute("id", index);
        document.querySelector('.toProgress').setAttribute("id", index);
        var cardDiv=document.querySelector('.card');
        cardDiv.style.backgroundColor=todoPriorityValue;
        document.querySelector('.card-header').backgroundColor=todoPriorityValue;
        document.querySelector('.edit-button').style.color=todoPriorityValue;
        document.querySelector('.travelButton').backgroundColor=todoPriorityValue;
        index++;
        var cardElement = tempContainer.firstElementChild;
        todoContainer.appendChild(cardElement);
        formStatus.value = "submitted";
        formContainer.reset();
    }
    else if (formStatus.value === "submitted") {



        var cardId = formContainer.name;
        var formContainerEdit = document.getElementsByName("cardId");


        arr[cardId].title = todoTitle.value;
        arr[cardId].desc = todoDescription.value;
        arr[cardId].date = todoDate.value;
        
        arr[cardId].priority = todoPriority.value;
        var card = document.getElementById(cardId);
        card.querySelector('.cardTitle').textContent = arr[cardId].title;
        card.querySelector('.cardDescription').textContent = arr[cardId].desc;
        var dest = new Date(arr[cardId].date).getTime();
        // console.log(dest);
        // console.log(card.querySelector('.cardTime'));
        updateTimer(card.querySelector('.card-body'), dest);
        // card.querySelector('.cardTime').textContent = arr[cardId].date;
        var cardDiv = document.querySelector('.card');
        card.style.backgroundColor = arr[cardId].priority;
        card.querySelector('.card-header').backgroundColor = arr[cardId].priority;
        card.querySelector('.edit-button').style.color = arr[cardId].priority;
       card.querySelector('.travelButton').backgroundColor = arr[cardId].priority;
        console.log(arr);


    }

});
function Edit(id) {
    
    console.log(id);
    formContainer.setAttribute("name", id);
    console.log(arr[id].title);
    todoTitle.textContent = arr[id].title;
    todoDescription.textContent = arr[id].desc;
    todoDate.value = arr[id].date;
    todoPriority.value = arr[id].priority;

}
function move(direction, id) {
    if (direction === "progress") {
        console.log("hello this is progress");
        var cardDiv = document.getElementById(id);
        var travelButtonDiv = cardDiv.querySelector('.travelButton');
        var markAsDoneButton = document.createElement('button');
        markAsDoneButton.classList.add('toDone');
        markAsDoneButton.setAttribute("id",id);
        markAsDoneButton.setAttribute('onclick', "move('done',this.id)");
        markAsDoneButton.textContent = "Done";
        markAsDoneButton.style.backgroundColor="green";
        var toDoListButton = cardDiv.querySelector('.toProgress');
        toDoListButton.setAttribute("class","toDoList");
        toDoListButton.setAttribute("onclick","move('todo',this.id)");
        toDoListButton.textContent="Back";
        travelButtonDiv.appendChild(markAsDoneButton);
        progressContainer.appendChild(cardDiv);
    }
    else if(direction === "done"){

        console.log("hello this is done");
        var cardDiv = document.getElementById(id);
        var travelButtonDiv = cardDiv.querySelector('.travelButton');
        var markAsDoneButton = cardDiv.querySelector('.toDone');
        travelButtonDiv.removeChild(markAsDoneButton);
        var toDoListButton = cardDiv.querySelector('.toDoList');
        toDoListButton.setAttribute("class", "toProgress");
        toDoListButton.setAttribute("onclick", "move('progress',this.id)");
       
        doneContainer.appendChild(cardDiv);
    }
    else if(direction === "todo"){
        console.log("hello this is todo");
        var cardDiv = document.getElementById(id);
        var travelButtonDiv = cardDiv.querySelector('.travelButton');
        var markAsDoneButton = cardDiv.querySelector('.toDone');
        travelButtonDiv.removeChild(markAsDoneButton);
        var toDoListButton = cardDiv.querySelector('.toDoList');
        toDoListButton.setAttribute("onclick", "move('progress',this.id)");
        toDoListButton.setAttribute("class","toProgress");
        toDoListButton.textContent="Start";
        cardDiv.appendChild(travelButtonDiv);
        todoContainer.appendChild(cardDiv);
    }
    
}
function updateTimer(cardElement, dest) {
    var x = setInterval(function () {
        // console.log(cardElement);
        var now = new Date().getTime();
        var diff = dest - now;
        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minute = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        cardElement.querySelector('.cardTime').textContent = days + "d: " + hours + "h: " + minute + "min";
    }, 1000);
}
