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
var form = document.getElementById('form');
var todolist = document.getElementById('todo');
var todoList = document.getElementById('todoList');
var editForm = document.getElementById('exampleModal');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(form.className+"form value");
    // var cardModel = document.querySelector('.card');
    // console.log(cardModel+"cardModel");
    const formStatusField = document.getElementById('formStatus');
    const formStatus = formStatusField.value;
    if(formStatus==="new"){
        formStatusField.value = 'submitted';
    var title = document.getElementById('todo-title').value;
    var desc = document.getElementById('todo-desc').value;
    var time = document.getElementById('message-date').value;
    var priority = document.getElementById('priority').value;
    // console.log(title+"title "+desc+"desc "+time+"time "+priority+"priority");
    var newTodo = new todo(title, desc, time, priority);
    // console.log(newTodo);
    // var todoList = document.getElementById('todoList');
    arr.push(newTodo);
    // console.log("array:" + arr[0].title);
    var card = `<div class="card" >
                <div class="card-header">
                    <h3 class="title" id="title"></h3>
                    <button class="edit-button" onclick="Edit(this.id)" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                </div>
                <div class="card-body">
                    <p class="Description" id="desc"><span></span></p>
                    <p class="Time" id="time"></p>
                </div>
                <div class="travel"><button onclick="move('progress',this.id)" class="moveright">Move to Inprogress</button>
                </div>
            </div>`;


    var tempContainer = document.getElementById('cards');

    tempContainer.innerHTML += card;




    document.getElementById('title').textContent = title;
    document.getElementById('desc').textContent = desc;
    cardNumber = document.querySelector('.edit-button');
    var cardModel = document.querySelector('.card');
    var travel = document.querySelector('.moveright');
    console.log(travel+"travel");
    travel.setAttribute("id",index);
    cardModel.setAttribute("id",index);
    cardNumber.setAttribute("id", index);

    var dest = new Date(time).getTime();
    // console.log((dest));
    var x = setInterval(function () {
        var now = new Date().getTime();
        var diff = dest - now;
        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        // console.log(days);
        var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minute = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        // var second = Math.floor((diff % (1000 * 60)) / (1000));
        console.log(minute, "minute");
        document.getElementById('time').textContent = days + "d: " + hours + "h: " + minute + "min";

    }, 1000);
    // console.log(todolist);
    var cardElement = tempContainer.firstElementChild;
    todolist.appendChild(cardElement);
    todoList.appendChild(todolist);
    // console.log(arr[index].title+"current form title");
    form.className="true";
    index++;


    form.reset();
    }

    else if (formStatus === 'submitted') {
    console.log("false");
        var cardModel = document.querySelector('.card');
        var id=cardModel.id;
        var title = document.getElementById('todo-title').value;
        var desc = document.getElementById('todo-desc').value;
        var time = document.getElementById('message-date').value;
        var priority = document.getElementById('priority').value;
        arr[id].title=title;
        arr[id].desc=desc;
        arr[id].time=time;
        arr[id].priority=priority;
        document.getElementById('title').textContent = arr[id].title;
        document.getElementById('desc').textContent = arr[id].desc;



}


});
function Edit(id) {
    // console.log("hh");
    document.getElementById('todo-title').textContent = arr[id].title;
    document.getElementById('todo-desc').textContent = arr[id].desc;
    document.getElementById('message-date').value = arr[id].date;
    document.getElementById('priority').value = arr[id].priority;

}
function move(side,id) {
    console.log(side+"side");
    console.log(id+"id");
    if (side =="progress"){
    var progress = document.querySelectorAll('#progress');
    console.log(progress + "progress tag");
    var todoList=document.getElementById(id);
    console.log(todoList+"todolist");
    var buttonright = document.createElement('button');
    buttonright.classList.add("moveRight");
    buttonright.setAttribute("id",id);
    buttonright.textContent = "Mark As Done";
    buttonright.setAttribute("onclick", "moveright(this.id)");
    var travel = document.querySelector('.travel');
    console.log(travel + "travel tag");
    var firstButton = document.querySelector('.moveright');
    firstButton.textContent = "Turn Off Progress";
    
    travel.appendChild(buttonright);
    progress.appendChild(todoList);
    firstButton.setAttribute("onclick", "move('todolist',this.id)");
    }
    if (side =="todolist"){
        var todo = document.getElementById("todo");
        var todolist = document.getElementById(id);
        console.log(todolist);
        var rightButton = document.querySelector('.moveRight');
        var travel = document.querySelector('.travel');
        travel.removeChild(rightButton);
        var firstButton = document.querySelector('.moveright');
        firstButton.textContent = "Move To Progress";
        todo.appendChild(todolist);
        firstButton.setAttribute("onclick", "move('progress',this.id)");
    }



}
function moveright(id) {
    var done = document.getElementById("done");
    var todoList = document.getElementById(id);
    var rightButton = document.querySelector('.moveRight');
    var travel = document.querySelector('.travel');
    travel.removeChild(rightButton);
    var firstButton = document.querySelector('.moveright');
    firstButton.textContent = "Move To Progress";
    firstButton.setAttribute("onclick","move('progress',this.id)");
    done.appendChild(todoList);

}
function clearForm(){
    document.getElementById('todo-title').textContent = '';
    document.getElementById('todo-desc').textContent = '';
    document.getElementById('message-date').value = '';
    document.getElementById('priority').value = '';
    const formStatusField = document.getElementById('formStatus');
    formStatusField.value = 'new';

}
// function moveleft(){
   
//     var todo

// }



