var form =document.getElementById('form');
var list = document.getElementById('items')
var del =document.getElementById('del')

form.addEventListener('submit',submitEvnt);

del.addEventListener('click',deleteEvnt);


function submitEvnt(e){
    e.preventDefault()
    var txt = document.getElementById('submit-element').value
    let newlist =document.createElement('li')
    newlist.className='list-group-item'
    newlist.appendChild(document.createTextNode(txt))
    list.appendChild(newlist)
    let button = document.createElement('button')
    button.className="btn btn-danger btn-sm float-right delete";
    button.appendChild(document.createTextNode("X"))
    newlist.appendChild(button)
}
function deleteEvnt(e){
    e.preventDefault();
    if(confirm("Do you want to delete")){
        var lst = document.querySelector('li:last-child')
        list.removeChild(lst)
        console.log(lst)
    }
}