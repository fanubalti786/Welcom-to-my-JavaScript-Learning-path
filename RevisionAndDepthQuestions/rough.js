let student = {
    name:"irfan",
    rollno: 12,
    mid: 20,
    final: 35
}

const data = (student) =>
{
    console.log(student.name);
    const total = student.mid + student.final;
    return total;
    
}

const marks =  data(student);
console.log(marks);