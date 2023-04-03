import { compareAsc, format } from 'date-fns'

format(new Date(2014, 1, 11), 'yyyy-MM-dd')
//=> '2014-02-11'

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


//Object For single todo item
const Todoitems = (title, description, dueDate, priority, notes, checklist ) =>{
    const getTitle = ()=> title
    const getDescription = ()=> description
    const getDueDate = ()=> dueDate
    const getPriority = ()=> priority
    const getNotes = ()=> notes
    const getChecklist = ()=> checklist
    
    return { getTitle, getDescription ,getDueDate ,getPriority ,getNotes ,getChecklist}
};
 
const NewTodo = Todoitems("birinci" , "ilk deneme", "23.10.1992" ,"top", "asd")
console.log(NewTodo.dueDate)
//Object for projects (list of todos)
var projects = {
    items: [],
  
    addItem: function(item) {
      this.items.push(item);
    }
  };

