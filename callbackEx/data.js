let employees=[{id:101,name:'om' ,sal:45000}
         ,{id:102,name:'eshank' ,sal:65000}
        ];


         let createEmployee=(emp)=>{
setTimeout(() => {
    employees.push(emp)
}, 3000);
         }
         let getEmployee=()=>{
setTimeout(() => {
   let rows=""
   employees.map((employee)=>{
    rows = rows +  `<tr>
                     <td>${employee.id}</td>
                     <td>${employee.name}</td>
                     <td>${employee.sal}</td>
                    </tr>`
   })
    document.getElementById('tbody-data').innerHTML=rows
}, 1000);
         }
         createEmployee({id:103,name:'ganesh',sal:25000});
         getEmployee();