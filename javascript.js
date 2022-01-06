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
