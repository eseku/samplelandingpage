var total = [];

function localStore(){
    var previousData = localStorage.getItem('total');
    var previousData = JSON.parse(previousData);

    var UserName = document.getElementById('firstname');
    var LastUserName = document.getElementById('lastname');
    var UserEmail = document.getElementById('InputEmail');

    data = [UserName.value, LastUserName.value, UserEmail.value];

    total.push(data);
    localStorage.setItem('total', JSON.stringify(total));
    window.alert("Saved");


}




