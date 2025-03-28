let tasks=[];
function  addTasks(){
    


let fullName = document.getElementById("inputFullName").value;
let gender = document.getElementById("select_gender").value;
let age = document.getElementById("input-age").value;
let slot = document.getElementById("select_slot").value;
let date = document.getElementById("time").value;
let taskinput1 =document.getElementById("inputtasks").value;



const newtasks={
    name:fullName,
    Gender:gender,
    age:age,
    time:slot,
    date:date,
    inputtasks:taskinput1,
   
    

};

tasks.push(newtasks)
localStorage.setItem("tasks", JSON.stringify(tasks));
const savetasks=localStorage.getItem("tasks");

if (savetasks){
    tasks=JSON.parse(savetasks)
}

function renderformlist(tasklist){
    alert("Appointment succesfull\n you can see appointment ticket")
    const formlistElement=document.getElementById("formlist");
    formlistElement.innerHTML="";
    
    for (let i=0; i<=10; i++){
        const taskObj=tasklist[i];
        
    
      
   
        formlistElement.innerHTML +=`
        <div class="hanto">
    <div class="han_output">
     
     <h2 class="app"> Appointment Detail </h2>
        <h3 class="addtext"> Name= ${taskObj.name }<h3> 
            <h3 class="addtext2"> Gender=${taskObj.Gender}<h3> 
                 <h3 class="addtext5"> time=${taskObj.time}<h3> 
                <h3 class="addtext3"> Age=${taskObj.age}<h3> 
                    <h3 class="addtext4"> Date=${taskObj.date}<h3> 
    
                        <h3 class="addtext5"> city=${taskObj.inputtasks}<h3> 

                             <h3 class="addtext7"> Doctor: Dr. Hemant Patil</h3> 
                         <h3 class="addtext8"> Contact: <a href="tel:8787878787">8787878787</a></h3>
                   <h3 class="addtext9"> Status: <span class="status pending">Pending</span></h3>
     
    </div>
    
    

                            



    `;
   

    

        

}

}

renderformlist(tasks);




}
