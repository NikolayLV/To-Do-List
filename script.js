


let taskNameInput = document.querySelector("#task-name-input");
let addTaskButton = document.querySelector("#add-task-btn");
let startMessage = document.querySelector("#start-message");
let taskList = document.querySelector(".task-list");
let completedTask = document.querySelector("#show-completed-task");
let deleteAll = document.querySelector("#delete-all")
let notCompletedTask = document.querySelector("#show-not-completed-task");
let tasks = [];

addTaskButton.addEventListener("click", addTaskHandler);

taskNameInput.addEventListener("keydown", function (e) {
    if (e.code == "Enter") addTaskHandler();
})



function showCompletedTask(element) {

    element.style.display = "none";

}

function addTaskHandler() {
    if (taskNameInput.value) {
        if (!startMessage.hidden) startMessage.hidden = true;

        let newTask = new Task(taskNameInput.value);
        newTask.createIn(taskList);
        tasks.push(newTask);

        taskNameInput.value = "";
    } else {
        alert("Введите имя задачи");
    }
}

class Task {
    constructor(text) {
        this.text = text;
        this.isDone = false;
        this.div = null;
    }

    createIn(element) {
        this.div = document.createElement("div");
        this.div.classList.add("task");

        let input = document.createElement("input");
        input.addEventListener("click", () => this.changeState(this.div));
        input.type = "checkbox";

        let p = document.createElement("p");
        p.innerText = this.text;

        let button = document.createElement("button");
        button.type = "button";
        button.className = "button";
        button.innerText = "Удалить задачу";

        this.div.append(input);
        this.div.append(p);
        this.div.append(button);



        button.addEventListener("click", function() {
            this.parentElement.remove();
        });

        // deleteAll.addEventListener("click", function () {
        //     this.div.delete(element);
        // })




        element.append(this.div);
    }

    changeState(element) {
        this.isDone = !this.isDone;
        element.classList.toggle("completed");
        notCompletedTask.addEventListener("click", function () {
            element.style.display = "none";
        })
        completedTask.addEventListener("click", function () {
            element.style.display = "flex";
        });
    }
}
