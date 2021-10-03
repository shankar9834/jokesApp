const ul=document.querySelector('.ul');
//console.log(ul);
const btn=document.querySelector('button');
var val=1;
const addjoke=async ()=>{
     const joke=await getjoke();
     const li=document.createElement('li');
     li.classList.add('border', 'border-primary','rounded-pill','p-3','m-2');
     li.innerHTML=`${val} ${" : "} ${joke}`;
      val++
    
     ul.append(li);
}
const getjoke=async ()=>{

    try{

        const config={headers :{Accept : "application/json"}};
       const res=await  axios.get('https://icanhazdadjoke.com/',config);
       console.log(res);
       console.dir(res);
       return res.data.joke;

    }
    catch(e){
        console.log('No joke found :)');

    }
    }

//getjoke();

btn.addEventListener('click',addjoke);