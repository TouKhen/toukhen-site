function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

 
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }

  }   

function myDropDown() {
    document.getElementById("myUL").classList.toggle("show");
}

var num = 1;

function counter(num) {

}

$(document).ready(function() {
  $('button').click(function() {
    
    num++;

    if(num >= 100){
      num = 0;
    }
    
    $('.count-leave').addClass('count-leave-active');
    setTimeout(function() {
      $('.count-leave').remove();
    }, 250);
    
    $('.count-enter').addClass('count-enter-active');
    setTimeout(function() {
      $('.count-enter').addClass('count-leave').removeClass('count-enter count-enter-active');
      $('.count-box').append('<h1 class="count count-enter">'+ num +'</h1>')
    }, 250);
    
  })
});
 

