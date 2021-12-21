// Create a "close" button and append it to each list item
// var mynode=document.getElementsByTagName('li');

// var i;
// for(i=0;i<mynode.length;i++){
//     var span1=document.createElement('span');
//     var txt=document.createTextNode('\u00D7');
//     span1.className='close';
//     span1.appendChild(txt);
//     mynode[i].appendChild(span1);
// }

// Click on a close button to hide the current list item
function closeElement(){
    var i; 
    var close1=document.getElementsByClassName('close');
    for(i=0;i<close1.length;i++){
       // console.log(close[i])
        close1[i].onclick=function(){
           
            var div=this.parentElement;
            console.log(div)
            div.style.display='none';
        }
    }
}

// Add a "checked" symbol when clicking on a list item
// var list=document.querySelector('ul');
// list.addEventListener('click',function(ev){
//     if(ev.target.tagName ==='li'){
//         ev.target.classList.toggle('checked');
//     }
// },false);

// Create a new list item when clicking on the "Add" button
function newElement(){
    var li=document.createElement('li');
    var inputValue=document.getElementById('myInput').value;
    var t=document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue===''){
        alert('You must write Something!');
    }   
    else{
        document.getElementById('myUL').appendChild(li);
    }
    document.getElementById('myInput').value='';

    var span=document.createElement('span');
    var txt=document.createTextNode('\u00D7');
    span.className='close';
    span.appendChild(txt);
    li.appendChild(span);

    var close1=document.getElementsByClassName('close');
    for(i=0;i<close1.length;i++){
        close1[i].onclick=function(){
        var div=this.parentElement;
        div.style.display='none';
        }
    }


}
