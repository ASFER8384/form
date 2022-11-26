function myfunc() {
    // var row =1
    let display = document.getElementById("output")
    row = 1
    let newRow = display.insertRow(1)



    var firstname = document.getElementById("fname").value

    let cell = newRow.insertCell(0)
    cell.innerHTML = firstname
    // var cell1=document.getElementById("cell1")
    // cell1.innerHTML=firstname

    // console.log(firstname)

    var lastname = document.getElementById("lname").value
    let cell2 = newRow.insertCell(1)
    cell2.innerHTML = lastname
    // var cell2=document.getElementById("cell2")
    // cell2.innerHTML=lastname

    // console.log(lastname)

    var email = document.getElementById("email").value
    var lastname = document.getElementById("email").value
    let cell3 = newRow.insertCell(2)
    cell3.innerHTML = email
    // var cell3=document.getElementById("cell3")
    // cell3.innerHTML=email

    // console.log(email)

    var pincode = document.getElementById("pincode").value
    let cell4 = newRow.insertCell(3)
    cell4.innerHTML = pincode

    // var cell4=document.getElementById("cell4")
    // cell4.innerHTML=pincode

    // console.log(pincode)

    // var gender=document.getElementById("gender").value

    var sfirst = document.getElementById("selec1")
    var text = sfirst.options[sfirst.selectedIndex].text
    let cell5 = newRow.insertCell(4)
    cell5.innerHTML = text

    // var cell5=document.getElementById("cell5")
    // cell5.innerHTML=gender

    // console.log(gender)

    // var food=document.getElementById("food").value
    // let cell6=newRow.insertCell(5)
    // cell6.innerHTML=food

    var idly = document.getElementById("mycheckbox1");
    var dosa = document.getElementById("mycheckbox2");
    var pori = document.getElementById("mycheckbox3");
    var rice = document.getElementById("mycheckbox4");
    let cell6 = newRow.insertCell(5)
    var checkbox = document.getElementsByName("food")
    var checkedItems = 0
    var list = []
    for (let i = 0; i < checkbox.length; i++) {
        if (idly.checked == true && dosa.checked == true && pori.checked == true && rice.checked == true) {
            alert("select any Three")
            break
        }else if(idly.checked == false && dosa.checked == false && pori.checked == false && rice.checked == false){
            alert("select any Three")
            break
        }
        if (checkbox[i].checked) {
            checkedItems++

            list.push(checkbox[i].value)
        }
    }
    cell6.innerHTML = list
    console.log(list.length)
    // if(list.length>3){
    //     alert("select Three")
    // }
   
    // console.log(food)

    // var country=document.getElementById("country").value
    var ssec = document.getElementById("selec2")
    var text = ssec.options[ssec.selectedIndex].text
    let cell7 = newRow.insertCell(6)
    cell7.innerHTML = text
    // var cell7=document.getElementById("cell7")
    // cell7.innerHTML=country

    // console.log(country)

    // var state=document.getElementById("state").value
    var sthird = document.getElementById("selec3")
    var text = sthird.options[sthird.selectedIndex].text
    let cell8 = newRow.insertCell(7)
    cell8.innerHTML = text
    // var cell8=document.getElementById("cell8")
    // cell8.innerHTML=state

    // console.log(state)

    document.getElementById("form").reset()
}