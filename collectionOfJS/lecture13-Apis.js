const URL = "https://cat-fact.herokuapp.com/facts";


// let promise = fetch(URL);
// console.log(promise);



// const getfacts = async () => 
//    {
//       let response = await fetch(URL);
//       console.log(response);
//       console.log(response.status);
//       let data = await response.json();
//       console.log(data, data.text);
         
//    }
// // 

// getfacts();





// let factpara = document.querySelector(".fact");

// const getfacts = async () => 
//    {
//       let response = await fetch(URL);
//       console.log(response);
//       console.log(response.status);
//       let data = await response.json();
//       console.log(data);
//       factpara.innerText = data[0].text;
      
//    }


// getfacts();



let factpara = document.querySelector(".fact");
let btn = document.querySelector(".btn");

const getfacts = async () => 
   {
      let response = await fetch(URL);
      console.log(response);
      console.log(response.status);
      let data = await response.json();
      console.log(data);
    //   factpara.innerText = data[0].text;
    //   factpara.innerText = data[1].text;
      factpara.innerText = data[2].text;


      
   }


btn.addEventListener("click",getfacts);



