var e = document.getElementById("exampleSelect1");
function onSelectChanged()
{
    console.log(e.selectedIndex);
    document.getElementById("exampleSelect2").options[e.selectedIndex].disabled = true;
}
e.addEventListener('change', onSelectChanged, false);

// var strUser = e.options[e.selectedIndex].text;
// console.log(strUser);
// form = document.getElementById('start');
// console.log(form.elements['source']);
