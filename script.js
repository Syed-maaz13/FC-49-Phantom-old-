// var e = document.getElementById("exampleSelect1");
// function onSelectChanged()
// {
//     console.log(e.selectedIndex);
//     document.getElementById("exampleSelect2").options[e.selectedIndex-1].disabled = true;
// }
// e.addEventListener('change', onSelectChanged, false);

// // var strUser = e.options[e.selectedIndex].text;
// // console.log(strUser);
// // form = document.getElementById('start');
// // console.log(form.elements['source']);
const submitbtn = document.getElementById('submit'),
select1 = document.getElementById('exampleSelect1'),
select2 = document.getElementById('exampleSelect2');
const SubmitHandler = async(e) => {
    e.preventDefault();
    if(select1.value===null || select2.value===null || select1.value===select2.value)
    {
        alert("Error");
    }
    else {
        const data = {
            source:select1.value,
            dest: select2.value,
        }
        const response = await fetch('/',{method: 'POST',body: JSON.parse(data)});
        return response.json();
    }
}

submitbtn.addEventListener('click', SubmitHandler);