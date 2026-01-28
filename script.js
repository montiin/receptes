function mainitRecepti() { 

    let teksts = ""; 
  
    // Kopā būs 3 receptes, tāpēc tiek ģenerēts nejaušs skaitlis no 0 līdz 2 
  
    let nejaussJoks = Math.floor(Math.random() * 4);  
  
    
  
    if (nejaussJoks === 0)
    
    {
        teksts = "Šašlika kebabs ar dārzeņiem Sastāvdaļas: 400 g šašliks 200g mocarellas siers, 1 iepakojums arābu maizes, 6 šampinjoni, 1 kabacis, 1 paprika, 1 tomāts, 2 sarkanie sīpoli, 2 daivas ķiploks, pus citrons, 1 zars svaigs rozmarīns, Čilī pēc garšas.";
      }
  
    else if (nejaussJoks === 1)  
  
    { 
  
      teksts = "Nekad nevienam neļauj sabojāt savu dienu. Tā ir tava diena. Sabojā to pats!"; 
  
    }  
  
    else  
  
    { 
  
      teksts = "Vēlies kaut ko mainīt dzīvē? Sēdi uz telefona un skaties dīvānā!"; 
  
    } 
  
  
  { 
  
    document.getElementById("joks").textContent = teksts; 
  
  } 



  
  
  } 
  
  function mainitKrasas()  
  
  { 
  
    document.body.classList.toggle("tumss"); 
  
  } 
  
  
  function atsauces()  

  let atsauces = ""; 
  
  { 
  
    <a href=" https://receptes.tvnet.lv/recepte/19850-saslika-kebabs-ar-darzeniem ">Šašlika kebabs ar dārzeņiem</a>; 
  
    } 
