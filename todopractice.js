class todo {
    constructor( title ,  desc,  date,  priority) {
        this.title = title;
        this.desc = desc;
        this.date = date;
        this.priority = priority;

    }
}


const todoList = document.getElementById('todoList');
const form = document.getElementById('form');
console.log("form tag",form);
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const title = document.getElementById('todo-title').value;

    console.log(title);
    const card = `<div class="card" id="card">
                <div class="card-header">
                    <h3 class="title" id="title"></h3>
                    <button class="edit-button">Edit</button>
                </div>
                <div class="card-body">
                    <p class="Description" id="desc"><span></span></p>
                    <p class="Time" id="time"><Span></Span></p>
                </div>
                <button>Move to Inprogress
</button>
            </div>`;
            console.log(card);
    const todolist = document.getElementById('todo');
    
    todolist.innerHTML += card;
    const cardBorder = document.getElementById('card');
    console.log("card boder", cardBorder);
    
    document.getElementById('title').textContent = title;
    document.getElementById('desc').textContent = document.getElementById('todo-desc').value;
    // document.getElementById('time').textContent = document.getElementById('message-date').value;
    const time = document.getElementById('message-date').value;
    const priority = document.getElementById('priority').value;
    cardBorder.style.boxShadow = priority;
    console.log(time);
    const dest = new Date(time).getTime();
    // console.log((dest));
    var x = setInterval(function () {
        var now = new Date().getTime();
        var diff = dest - now;
        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        // console.log(days);
        var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minute = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var second=Math.floor((diff%(1000 * 60))/(1000));
        console.log(minute, "minute");
        document.getElementById('time').textContent = days + "d: " + hours + "h: " + minute + "min:"+second+"sec";

    }, 1000);
    console.log("color",priority);
    
    const cardList = new todo(title, document.getElementById('todo-desc').value,time,priority);
    console.log(cardList);
    

    
    
});

