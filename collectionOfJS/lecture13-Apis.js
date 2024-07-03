const URL = "https://cat-fact.herokuapp.com/facts";


// let promise = fetch(URL);
// console.log(promise);



const getfacts = async () => 
   {
      let response = await fetch(URL);
      console.log(response);
      console.log(response.status);
      let data = await response.json();
      console.log(data, data.text);
         
   }


getfacts();





let factpara1 = document.querySelector(".fact");

const getfacts1 = async () => 
   {
      let response = await fetch(URL);
      console.log(response);
      console.log(response.status);
      let data = await response.json();
      console.log(data);
      factpara.innerText = data[0].text;
      
   }


getfacts();



const factpara2 = document.querySelector(".fact");
const btn = document.querySelector(".btn");

const getfacts2 = async () => 
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


let getapi = () =>
    {
        let data = fetch(URL)
        .then((response) =>
        {
            console.log(response);
            console.log(response.status);
            return response.json();

        })
        .then((data) =>
        {
            console.log(data);
            // factpara.innerText = data[0].text;
            //factpara.innerText = data[1].text;
            factpara.innerText = data[2].text;
        })
    }


btn.addEventListener("click",getapi);




