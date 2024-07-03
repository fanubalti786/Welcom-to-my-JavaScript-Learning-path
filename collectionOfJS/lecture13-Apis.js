const URL = "https://cat-fact.herokuapp.com/facts";


let promise = fetch(URL);
console.log(promise);


let fact = document.querySelector(".fact");

const getfacts = async () => 
   {
      let response = await fetch(URL);
      console.log(response);
      console.log(response.status);
      let data = await response.json();
      console.log(data.text);
         console.log(data[0].text);
   }
// 

getfacts();





let factpara = document.querySelector(".fact");

const getfacts = async () => 
   {
      let response = await fetch(URL);
      // console.log(response);
      // console.log(response.status);
      let data = await response.json();
      console.log(data);
      factpara.innerText = data[0].text;
      
   }


getfacts();