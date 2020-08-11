var listSelect = Array.from(document.querySelectorAll("select[name]"));
var formDivList = Array.from(document.querySelectorAll(".form-group"));

for (var i = 0; i < formDivList.length; i++) {
    var divWrapper = document.createElement("div");
    divWrapper.classList.add("custom-select");
    formDivList[i].append(divWrapper);
}


var divWrapperList = Array.from(document.querySelectorAll(".custom-select"));
for (var j = 0; j < divWrapperList.length; j++) {
    var divSelected = document.createElement("div");
    divSelected.classList.add("selected");
    divWrapperList[j].append(divSelected);
}

var divSelectedList = Array.from(document.querySelectorAll(".selected"));
// console.log(divSelectedList[0], divSelectedList[1]);
for (var x = 0; x < divWrapperList.length; x++) {
    var ulList = document.createElement("ul");
    ulList.classList.add("options");
    divWrapperList[x].append(ulList);
}




var ulListArr = Array.from(document.querySelectorAll(".options"));


var listSelectCountry = Array.from(document.querySelectorAll("select[name='country'] option"));
for (var z = 0; z < listSelectCountry.length; z++) {
    var liList1 = document.createElement("li");
    liList1.setAttribute("value", listSelectCountry[z].getAttribute("value"));
    liList1.innerText = listSelectCountry[z].innerText;
    ulListArr[0].append(liList1);

}

var listSelectCountry2 = Array.from(document.querySelectorAll("select[name='country2'] option"));
for (var y = 0; y < listSelectCountry2.length; y++) {
    var liList2 = document.createElement("li");
    liList2.setAttribute("value", listSelectCountry2[y].getAttribute("value"));
    liList2.innerText = listSelectCountry2[y].innerText;
    ulListArr[1].append(liList2);
}

// console.log(listSelect);



// listSelect.forEach(function (select, index) {
//     console.log
//     var listOption = Array.from(select.querySelectorAll("option"));
//     console.log(listOption);
//     // for (var t = 0; t < divSelectedList.length; t++) {
//     //     divSelectedList[t].innerText = listOption[index].innerText;
//     //     divSelectedList[t].setAttribute("value", listOption[index].getAttribute("value"));
//     // }

// });

console.log(listSelectCountry);
console.log(listSelectCountry2);
for (var t = 0; t < listSelectCountry.length; t++) {
    if(listSelectCountry[t].hasAttribute("selected") === true) {
        divSelectedList[0].innerText = listSelectCountry[t].innerText;
        divSelectedList[0].setAttribute("value", listSelectCountry[t].getAttribute("value"));
    }
    console.log(divSelectedList[0].innerText);
}
for (var c = 0; c < listSelectCountry2.length; c++) {
    if(listSelectCountry2[c].hasAttribute("selected") === true) {
        divSelectedList[1].innerText = listSelectCountry2[c].innerText;
        divSelectedList[1].setAttribute("value", listSelectCountry2[c].getAttribute("value"));
    }
    console.log(divSelectedList[1].innerText);
}



