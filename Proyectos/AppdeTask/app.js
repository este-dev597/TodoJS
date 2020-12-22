document.getElementById('formTask').addEventListener('submit', saveTask );

function saveTask(e) {

    let title = document.getElementById('title').value;  //Obtengo del titulo su valor (Add a Todo)
    let description = document.getElementById('description').value;

    const task = {   //objeto
        title,    // title: title
        description    // description: description
    };


    // Si el localStorage está vacio empieza agregar unas nuevas tareas que voy a estar almacenando
      // Si ya existen algunas previamente, simplemente actualizalas y almacenalas nuevamente
    if (localStorage.getItem('tasks') === null) {  //Si desde localStorage ya existe un valor llamado 'tasks' y es igual a 'null' -> vamos a crear tareas
        let tasks = [];
        tasks.push(task);  
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {  // Si ya existen valoren allí, vamos a empezar a actualizarlos
        let tasks = JSON.parse(localStorage.getItem('tasks'));   // Obtener las tareas que tengo almacenadas en el localStorage y almacenarlo en una variable
        tasks.push(task);  // Las he actualizado
        localStorage.setItem('tasks', JSON.stringify(tasks));  // Las he vuelto a almacenar
    }



    getTasks();
    document.getElementById('formTask').reset(); // Para que se limpie el formulario cada vez que agrego una tarea
    e.preventDefault();  // para que no se reinicie la página cuando presione el submit - boton de enviar
}

function getTasks() {   // Cuando se ejecute este evento, voy a tratar de obtener las tareas que tengo almacenadas, si me devuelve algo. Van a ser tareas que voy a empezar a recorrer
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let tasksView = document.getElementById('tasks');

    tasksView.innerHTML = ''; // limpiar los datos

    for(let i = 0; i < tasks.length; i++) {
        let title = tasks[i].title;
        let description = tasks[i].description;
    
        tasksView.innerHTML += `<div class="card mb-3">
            <div class="card-body">
              <p>${title} - ${description}
              <a href="#" onclick="deleteTask('${title}')" class="btn btn-success ml-5">Complete</a>
              <a href="#" onclick="deleteTask('${title}')" class="btn btn-danger ml-5">Delete</a>
              </p>
            </div>
          </div>`;
    }
}

function deleteTask(title) {
    let tasks = JSON.parse(localStorage.getItem('tasks')); //Si algunos de los titulos que tengo almacenado(localStorage) coinciden con el titulo que puso el boton delete, entonces si existen, y si si existen lo puedo eliminar
    for(let i=0; i < tasks.length; i++) {
        if (tasks[i].title == title) {
            tasks.splice(i, 1); //quitar esa tarea de nuestro arreglo
        }
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Almacenar nuevamente las tareas, con ese item menos
        getTasks();
    }
}

getTasks();