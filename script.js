function mainitRecepti() {
  let teksts = "";
  // Kopā būs 3 receptes, tāpēc tiek ģenerēts nejaušs skaitlis no 0 līdz 2
  let nejaussJoks = Math.floor(Math.random() * 4); 
  if (nejaussJoks === 0) 
  {
    teksts = "Šašlika kebabs ar dārzeņiem";
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
