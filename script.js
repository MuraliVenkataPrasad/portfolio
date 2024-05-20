window.addEventListener('load', () => {
    const form = document.querySelector("#task-form");
    const input = document.querySelector("#task-input");
    const list = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value;
        if (!task) {
            return;
        }
        const task_div = document.createElement("div");
        task_div.classList.add("tasks");
        task_div.textContent = task; // Set the task content
        list.appendChild(task_div);
    }); // Added closing parenthesis for addEventListener
});
 