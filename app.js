let form=document.addform;

let text=form.add;
let ul=document.querySelector(".todos");
let form2=document.myform;
let data=form2.search;


function addItem(item)
{
    let str=`<li class="list-group-item  d-flex justify-content-between align-items-center">
    <span>${item}</span>
    <i class='fa fa-trash delete'></i>
  </li>`
  ul.innerHTML+=str;
}
form.addEventListener("submit",(e)=>
{
  e.preventDefault();
  let item=text.value;
  if(item.length>0)
  {
   addItem(item);
   text.value=""; 
  }
})
ul.addEventListener("click",(e)=>
{
  if(e.target.nodeName==="I")
  {
    e.target.parentElement.remove();
  }
})
function searchData(data)
{
    let listitems=ul.children;
    for(let list of listitems)
    { 
       
      if(list.innerText.toLowerCase().indexOf(data)==-1)
      {
        list.classList.add("filtered");
      }
      else
      {
        list.classList.remove("filtered");
      }
    }
}
data.addEventListener("keyup",(e)=>
{
   let value=data.value;
 
   searchData(value.toLowerCase());
   
})