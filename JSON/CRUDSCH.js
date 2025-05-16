let fetchData = async () => {
    let url = "http://localhost:3000/school";
  
    let res = await fetch(url, { method: "GET" });
    let data = await res.json();
  
    //data jo db.json pr h usko table format me front screen pr show krne k liye use array of object => map
    let dataShow = document.querySelector("#datashow");
  
    // <td>${e.price}</td>
    data.map((e) => {
      dataShow.innerHTML += `
      <tr>
        <td>${e.name}</td>
        <td>${e.age}</td>
        <td>${e.subject}</td>
        <td>${e.faculty}</td>
        <td>${e.timeslot}</td>
        
        <td><button onclick="Del('${e.id}')">Delete</button></td>
        <td><button onclick="Formopen('${e.id}')">Update</button></td>
      </tr>
    `;
    
    });
  };
  
  
  // person se price multiply hoga jo hamne price bhra h niche
  
  
  
  //How to delete data by particular id ---->>>
  let Del = async(id) => {
    // alert (id);
    let url = `http://localhost:3000/school/${id}`;
    await fetch(url, { method: "DELETE" }); //url ko fetch kiye or DELETE method lgaya , or ye json se bhi data delete kr dega
    
  };
  

  //how to send data in local storage --->
  
  let Book = () => {
    let name = document.querySelector("#name").value;
    let age = document.querySelector("#age").value;
    let subject = document.querySelector("#subject").value;
    let faculty=document.querySelector("#faculty").value;
    let timeslot = document.querySelector("#timeslot").value;
   
  
  
    let url = "http://localhost:3000/school";
    fetch(url, {
      method: "POST", //  postmethod me 3 chije bhejte h ===>>   method, header, string format me data
  
      headers: {
        "Content-Type": "application/json",
      },
  
      body: JSON.stringify({
        name: name, //NAME (jo json me key h uski jgh vo value aajaye jo ham fomr me dalenge jo ki name h jo value utha rha h )
        age: age,
        subject: subject,
        faculty: faculty,
        timeslot: timeslot
      }),
    });
    
  
    location.href = "CRUDSCH2.html";
    return false;
  };



  //Put method
  let Formopen = async (id) => {
    let url = `http://localhost:3000/school/${id}`;
  
    let res = await fetch(url, { method: "GET" });
    let data = await res.json();
  
    //form dikhana h update pr click krne pr -->
    let Updatee = document.querySelector("#UpdateForm2");
    Updatee.innerHTML += `
      Enter Name: <input type="text" id="up2name" value="${data.name}" /><br /><br />
      Enter Age: <input type="text" id="up2age" value="${data.age}" /><br /><br />
     
      Select your Subject : <select  id="up2subject"> <br /><br />
      <option value="Select your Subject">Select your Subject</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Physics">Physics</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Business Studies">Business Studies</option>
            <option value="Modern History">Modern History</option>
            <option value="Economics">Economics</option>
            <option value="Accounts">Accounts</option>
            
          
        </select>
      
      Select the faculty: <select id="up2faculty"> <br /><br />
            <option value=" Select the faculty"> Select the faculty</option>
            <option value="Mr.Dhiraj Sharma(Rs.500/hour)">Mr. Dhiraj Sharma</option>
            <option value="Mr.Hemant Patidar(Rs.500/hour)">Mr. Hemant Patidar</option>
            <option value="Mr. Nitish Biswas(Rs.500/hour)">Mr. Nitish Biswas</option>
            <option value="Mr. Alok Nath(Rs.450/hour)">Mr. Alok Nath</option>
            <option value="Mr. Mahesh Rawat(Rs.400/hour)">Mr. Mahesh Rawat</option>
            <option value="Mr. Vikas Iyer(Rs.400/hour)">Mr. Vikas Iyer</option>
        </select>
     
      Select time slot : <select  id="up2timeslot"><br><br><br><br>
            <option value="Select time slot">Select time slot</option>
            <option value="13:00 - 14:00">13:00 - 14:00</option>
            <option value="14:00 - 15:00">14:00 - 15:00</option>
            <option value="15:00 - 16:00">15:00 - 16:00</option>
            <option value="17:00 - 18:00">17:00 - 18:00</option>   
            <option value="19:00 - 20:00">19:00 - 20:00</option>
            <option value="20:00 - 21:00">20:00 - 21:00</option>
        </select>
      <button onclick="return Updatte('${data.id}')">Update Data</button>
    `;
    
  };
  
  let Updatte = (id) => {
    let url = `http://localhost:3000/school/${id}`;
  
    let name = document.querySelector("#up2name").value;
    let age = document.querySelector("#up2age").value;
    let subject =document.querySelector("#up2subject").value
    let faculty=document.querySelector("#up2faculty").value
    let timeslot=document.querySelector("#up2timeslot").value
    
  
    fetch(url, {
      method: "PUT", //  postmethod me 3 chije bhejte h ===>>   method, header, string format me data
  
      headers: {
        "content-type": "application/json",
      },
  
      body: JSON.stringify({
        name: name, //NAME (jo json me key h uski jgh vo value aajaye jo ham fomr me dalenge jo ki name h jo value utha rha h )
        age: age,
        subject: subject,
        faculty: faculty,
        timeslot: timeslot
       
      }),
    });
  
    return false;
  };


//   Error handling 
// .then() & .catch
// for beginners 
// try catch