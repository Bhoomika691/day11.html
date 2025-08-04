        function addTodoItem(text){
               const container = document.getElementById('todo-container');
 
  // Create the main div
  const todoItem = document.createElement('div');
  todoItem.className = 'todo-item';

  // Create the checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'task1';

  // Create the label
  const label = document.createElement('label');
  label.setAttribute('for', 'task1');
  label.className = 'todo-label';
  label.textContent = text; 
//create Toggle straight line-throughout on click of checkbox
  checkbox.onclick=function(){
        if(checkbox.checked){
                label.classList.add('strike');
        }else{
                label.classList.remove('strike');
        }
  };

  // Create the delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.innerHTML = '🗑️';

  // Delete functionality
 deleteBtn.onclick = function () {
  container.removeChild(todoItem);
};

  

  // Append all
  todoItem.appendChild(checkbox);
  todoItem.appendChild(label);
  todoItem.appendChild(deleteBtn);
  container.appendChild(todoItem);
}
  addTodoItem("Learn HTML");
  addTodoItem("Learn CSS");
  addTodoItem("Learn JavaScript");
