import { compareAsc, format } from 'date-fns' ;
import addNewToDo from './addNewToDo' ;
import "./style.css";
format(new Date(2014, 1, 11), 'yyyy-MM-dd')
//=> '2014-02-11'
const form = document.querySelector('form');
const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
]
dates.sort(compareAsc)
//=> [
//   Wed Feb 11 1987 00:00:00,
//   Mon Jul 10 1989 00:00:00,
//   Sun Jul 02 1995 00:00:00
// ]
document.addEventListener("click", function(e){
  const target = e.target.closest("#addButton"); 
  if(target){
    addNewToDo()
         }
});


//Object For single todo item
const ADDtodoitems = (title, description, dueDate, priority, notes) =>{
    const getTitle = ()=> title
    const getDescription = ()=> description
    const getDueDate = (dueDate)=> dueDate
    const getPriority = ()=> priority
    const getNotes = ()=> notes
    const getChecklist = ()=> checklist
    
    return { getTitle, getDescription ,getDueDate ,getPriority ,getNotes ,getChecklist}
};
 
const NewTodo = ADDtodoitems('birinci' , "ilk deneme", "23.10.1992" ,"top", "asd")
console.log(NewTodo.getDueDate)
//Object for projects (list of todos)

function projects() {
  const projectItems = [];

  function addprojectItems (todoItem) {
    projectItems .push(todoItem);
  }

  function removeprojectItems (index) {
    projectItems .splice(index, 1);
  }

  function getprojectItems () {
    return projectItems ;
  }

  return {
    addprojectItems ,
    removeprojectItems ,
    getprojectItems ,
  };
}


// function submitForm() {
//   // Get a reference to the form element
//   var form = document.getElementById("toDoForm");
//   var data = new FormData(form)
//   // Submit the form using the submit method
//   form.submit();
// }

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
        event.preventDefault();
      
     
    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());
    ADDtodoitems(value);
    form.reset();
    toggle();
}
function toggle(){
  var form = document.getElementById("toDoForm");
  form.classList.toggle('active');
  
}
