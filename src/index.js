import HYFClass from './HYFClass'

var JS = new HYFClass([])

var jsMembers = [
  {firstName: 'Mauro', lastName: 'Mandracchia', type: 'teacher'},
  {firstName: 'David', lastName: 'Furlong', type: 'teacher'},
  {firstName: 'Ali', lastName: 'Barakat', type: 'student'},
  {firstName: 'odai' , lastName: 'kakhi' , type: 'student'},
]

jsMembers.forEach(( member ) => {
  if(member.type === 'teacher'){
    JS.addTeacher( member )
  }else{
    JS.addStudent( member )
  }
})

console.log('ALL Teachers', JS.getAllTeachers())
console.log('All Student', JS.getAllStudents())
