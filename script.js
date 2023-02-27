{
    let tasks = [];
    let hideDone = false;


    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
    };


    const removeTask = (index) => {
        tasks.splice(index, 1);
        render();
    };


    const toggleTask = (index) => {
        tasks[index].done = !tasks[index].done;
        render();
    };


    const toggleAllDone = () => {
        tasks = tasks.map((task) => ({
            ...task,
            done: true,
        }));
        render();
    };

    const hideAllDoneTasks = () => {
        hideDone = !hideDone;
        console.log(hideDone);
        render;
    };


    const removeTaskFromList = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton) => {
            removeButton.addEventListener("click", () => {
                removeTask();
            });
        });
    };


    const toggleTaskDone = () => {
        const toggleButtons = document.querySelectorAll(".js-done");

        toggleButtons.forEach((toggleButton, index) => {
            toggleButton.addEventListener("click", () => {
                toggleTask(index);
            });
        });
    };


    const hideDoneTasks = () => {
        const hideAllDoneButton = document.querySelector(".js-hideAllDone");

        if (hideAllDoneButton) {
            hideAllDoneButton.addEventListener("click", () => {
                hideAllDoneTasks();
            });
        }

    };



    const toggleAllTasksDone = () => {
        const toggleAllDoneButton = document.querySelector(".js-toggleAllDone");

        if (toggleAllDoneButton) {
            toggleAllDoneButton.addEventListener("click", () => {
                toggleAllDone();
            });
        };
    };



    const renderButtons = () => {
        let buttonsField = "";


        if (tasks.length) {
            buttonsField += `
            <button class = "section__button js-toggleAllDone" ${tasks.every(({ done }) => done) ? "disabled" : ""} > Done All </button>
            `
        };

        document.querySelector(".js-buttons").innerHTML = buttonsField;
        toggleAllTasksDone();
        hideDoneTasks();

    };



    const renderTasks = () => {

        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li 
            class = "tasks__list">
            <button class = "taskslist__toggleDoneButton js-done"> ${task.done ? "✔" : ""} </button>
            <span class = " task ${task.done ? "task--done" : ""}" >${task.content} </span>
            <button class = "taskslist__toggleRemoveButton js-remove">🗑
            </button>
            </li>
            `;
        };

        document.querySelector(".js-tasks").innerHTML = htmlString;

        removeTaskFromList();
        toggleTaskDone();

    };



    const render = () => {
        renderTasks();
        renderButtons();
    };



    const formSubmit = (event) => {
        event.preventDefault();

        const newTaskElement = document.querySelector(".js-input");
        const newTaskContent = newTaskElement.value.trim();

        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            newTaskElement.value = "";
        } newTaskElement.focus();

        render();
    };




    const init = () => {
        render();

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", formSubmit);
    };

    init();
}