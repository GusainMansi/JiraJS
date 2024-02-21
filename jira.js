const modalHtml=`

<div class="modal-container">
    <span class="material-icons">close</span>
    <form id="create-form">
        <input name="title" type="text" placeholder="Title" required>
        <input name="assignee" placeholder="Assignee" required/>
       <select name="status" required>
             <option value="TODO">To do</option>
             <option value="IN_PROGRESS">In Progress</option>
             <option value="DONE">Completed</option>
       </select>
       <textarea name="description" id="" cols="30" rows="40" placeholder="Add a description"></textarea>
       <button>Submit</button>
      
    </form>
    </div>

</div>
`;

const createElement= document.getElementById("create");

createElement.addEventListener("click",()=>{
    const modal=document.createElement("div");
    modal.className="modal";
    modal.innerHTML=modalHtml;
    document.body.appendChild(modal);

    const form=document.getElementById("create-form");
    const removeFormListener=()=>{
        form.removeEventListener("submit",formDataListener)
    }
    const formDataListener=(e)=>{
        e.preventDefault();
        let elements= e.target.elements;
       
        let taskObject={};
        for( let i=0;i<elements.length;i++){
           elements[i].name && (taskObject[elements[i].name]=elements[i].value)
        }
console.log(taskObject);
    createTask(taskObject);
    modal.remove();
    removeFormListener();

    }

form.addEventListener("submit",formDataListener)
})


function createTask(taskObject){
   const taskContainer= document.createElement("div");
   taskContainer.className="task";
   taskContainer.draggable="true";
   
   taskContainer.innerHTML=`
   <b> Title: ${taskObject.title}</b>
   <strong>Assignee: ${taskObject.assignee}</strong>
   <p>Description:${taskObject.description}</p>
   
   
   `

    const panel=document.getElementById(taskObject.status);
    panel.appendChild(taskContainer);    
}

    

function toggleItem(){
    const dropdown= document.getElementsByClassName("dropdown-list")[0];
    dropdown.style.display==="block"?(dropdown.style.display="none"):(dropdown.style.display="block")
}// if the element is block this means it is visible and then if it is block else it is none
