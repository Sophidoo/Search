

document.querySelector("#searchbar").addEventListener("keyup", function Search(){
    let input = document.getElementById('searchbar').value
    let result = document.getElementsByClassName('result')
    input = input.toLowerCase();
    for(i = 0; i < result.length; i++){
        if (!result[i].innerHTML.toLowerCase().startsWith(input)) {
            result[i].style.display="none";
        }
        else {
            result[i].style.display="flex";                 
        }
    }
    if(input.innerHTML = ''){
        result.style.display = 'none'
    }
});