document.addEventListener('DOMContentLoaded', function () {
    console.log('script loaded');

    const currentDateElement = document.getElementById('current-date');
    const taskInput = document.getElementById('task-input');
    const prioritySelect = document.getElementById('priority');
    const addTaskButton = document.getElementById('add-task-button');
    const todoList = document.getElementById('todo-list');
    const doneList = document.getElementById('done-list');
    const deleteAllButton = document.getElementById('delete-all-button');

     console.log('currentDateElement:', currentDateElement);
     console.log('taskInput:',taskInput);
     console.log('prioritySelect:', prioritySelect);
     console.log('addTaskButton', addTaskButton);
     console.log('todoLis',todoList);
     console.log('doneList',doneList);
     console.log('deleteAllButton', deleteAllButton);
    

    // menampilkan tanggal sekarang 
    const today = new Date();
    currentDateElement.innerText = `Tanggal ${today.toLocaleDateString()}`;



    // Function to add a new task
    addTaskButton.addEventListener('click', function () {
        console.log('delete All Button Clicked');
        const taskText = taskInput.value.trim();
        const priority = prioritySelect.value;

        console.log('Add Task Button Clicked');
        console.log('Task:', taskText);
        console.log('priority:', priority);

        if (taskText === '') {

          console.log('Task text is empty');
          return;
        }
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            ${taskText} - ${priority}
            <input type="checkbox" class="task-checkbox">
        `;
        todoList.appendChild(taskItem);

        // menghapus kolam masukan
        taskInput.value = '';
        prioritySelect.value = 'low';
    });

    // Function untuk menandai tugas sebagai selesai
    todoList.addEventListener('change', function (event) {
        console.log('Change Detected in todolist');
        if (event.target.classList.contains('task-checkbox')) {
            const taskItem = event.target.parentElement;
            taskItem.querySelector('.task-checkbox').remove();
            taskItem.classList.add('done');
            doneList.appendChild(taskItem);

            console.log('Task marked as done:', taskItem.textContent);
        }
    });

    // Function untuk menghapussemua tugas
    deleteAllButton.addEventListener('click', function () {
        console.log('delete All Button Clicked');
        todoList.innerHTML = '';
        doneList.innerHTML = '';
        console.log('all tasks deleted');
    });
});


   