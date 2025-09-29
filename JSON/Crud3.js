let fetchData = async () => {
    let url = "http://127.0.0.1:8000/collegeViewSet/";
  
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
    let url = `http://127.0.0.1:8000/collegeViewSet//${id}/`;
    await fetch(url, { method: "DELETE" }); //url ko fetch kiye or DELETE method lgaya , or ye json se bhi data delete kr dega
    
  };
  

  //how to send data in local storage --->
  
  let Book = () => {
    let name = document.querySelector("#name").value;
    let age = document.querySelector("#age").value;
    let subject = document.querySelector("#subject").value;
    let faculty=document.querySelector("#faculty").value
    let timeslot = document.querySelector("#timeslot").value;
    
  
  
    let url = "http://127.0.0.1:8000/collegeViewSet/";
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
    
  
    location.href = "Crud2.html";
    return false;
  };

  // Enter Subject: <input type="date" id="upsubject" value="${data.subject}" />
  // Enter Faculty: <input type="date" id="upfaculty" value="${data.faculty}" /><br /><br />
  // Enter Timeslot : <input type="date" id="uptimeslot" value="${data.timeslot}" /><br /><br />

  //Put method
  let Formopen = async (id) => {
    let url = `http://127.0.0.1:8000/collegeViewSet/${id}/`;
  
    let res = await fetch(url, { method: "GET" });
    let data = await res.json();
  
    //form dikhana h update pr click krne pr -->
    let Updatee = document.querySelector("#UpdateForm");
    Updatee.innerHTML += `
      Enter Name: <input type="text" id="upname" value="${data.name}" /><br /><br />
      Enter Age: <input type="text" id="upage" value="${data.age}" /><br /><br />
     
      Select your Subject : <select  id="upsubject"> <br /><br />
            <option value="Select your Subject">Select your Subject</option>
            <option value="Python">Python</option>
            <option value="Django">Django</option>
            <option value="C++">C++</option>
            <option value="Dsa">Dsa</option>
            <option value="Java">Java</option>
            <option value="React and SQL">React and SQL</option>
            <option value="Frontend(HTML,CSS,JS)">Frontend</option>
           
        </select>
      
      Select the faculty: <select id="upfaculty"> <br /><br />
            <option value=" Select the faculty"> Select the faculty</option>
            <option value="Dr. Harshlata Vishwakarma(Rs.700/hour)">Dr. Harshlata Vishwakarma</option>
            <option value="Dr. Praveen Lalwani(Rs.700/hour)">Dr. Praveen Lalwani</option>
            <option value="Dr. Sharmila Joseph(Rs.600/hour)">Dr. Sharmila Joseph</option>
            <option value="Mr.Alok(Rs.600/hour)">Mr.Alok</option>
            <option value="Mr.Rajesh(650/hour)">Mr.Rajesh</option>
            <option value="Mr.Siddharth Israni(Rs.700/hour)">Mr.Siddharth Israni</option>
             
           
        </select>
     
      Select time slot : <select  id="uptimeslot"><br><br><br><br>
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
    let url = `http://127.0.0.1:8000/collegeViewSet/${id}/`;
  
    let name = document.querySelector("#upname").value;
    let age = document.querySelector("#upage").value;
    let subject =document.querySelector("#upsubject").value
    let faculty=document.querySelector("#upfaculty").value
    let timeslot=document.querySelector("#uptimeslot").value

    
  
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