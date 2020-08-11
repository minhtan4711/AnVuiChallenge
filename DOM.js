/*
 - Thay đổi class (thêm và xóa)
 - Thay đổi attribute (sửa)
 - Thêm mới một attribute cho một phần tử 
 - Bắt được sự kiện click của người dùng 
 - Thêm phần tử mới trong cấu trúc HTML
 ....
  -> Làm hiệu ứng động cho phần tử đó
  
  Phải xác địn được công việc trên dành cho phần tử nào 

  1.Truy xuất phần tử 
    - bằng id -> HTML element
    - bằng class -> collection of HTML element
      + Lưu ý: HTML Collection không phải là array. Nó chỉ gần giống array khi biết được độ dài bằng length và truy cập được vào phần tử bằng index
      Nếu muốn sử dụng các method của array thì phải ép kiểu về array
      =>cú pháp: Array.from(HTMLCollectionOf)


    - tên thẻ
    - bằng selector trong css

 
 */


//Truy xuất phần tử bằng selector của CSS 
/**
 * Attribute Selector
 * Có thể sử dụng cách này để thay thế cho việc truy xuất trong file DOM.js
 *  getElementById
 * getElementByClassName
 * getElementByTagName
 * 
 * 
 * querySelector("#demo") -> trả về cho mình phần tử đầu tiên tìm thấy được mà match với selector
 * querySelectorAll(".demo") -> trả về cho mình nhiều phần tử match với selector truyền vào -> không phải là array mà là một collection -> ép kiểu Array.from()
 */

// var demoId = document.querySelector("#demo");
// console.log(demoId);

// var demoClass = document.querySelectorAll(".demo");
// console.log(demoClass);

// var btnModal = document.querySelector("[data-toggle='modal']");
// console.log(btnModal);


/** Thao tác với thuộc tính HTML bằng Javascript
 * 
 * 
 */

// var img = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTfaJuXd05exiz7RMDHohhFRh7BySnxLAiGXA&usqp=CAU"

// var image = document.querySelector(".class-demo");

// //Thay đổi thuộc tính có sẵn, GET = lấy dữ liệu / SET = thiết lập dữ liệu mới 
// image.setAttribute("src", img);
// image.setAttribute("alt", "This is an image");
// //set được cả chiều rộng lẫn chiều cao 
// image.setAttribute("width", 1000);
// image.setAttribute("title", "This is image but in title attribute");

// var elDataTitle = Array.from(document.querySelectorAll("[data-title]"));
// console.log(elDataTitle);

// var temp = '';
// // debugger;
// for (var index = 0; index < elDataTitle.length; index++) {
//   // console.log(elDataTitle[index]);
//   // console.log(elDataTitle[index].getAttribute("data-title"));
//   temp += elDataTitle[index].getAttribute("data-title") + " ";
// }
// console.log(temp); //đang bị dư khoảng trắng 

// //Khi set giá trị data-title mới cho #demo -> trim()
// document.getElementById("demo").setAttribute("data-title", temp.trim());

// console.log("class cua phan tu img = ", image.getAttribute("class"));


// console.log(image);

/**
 * Code trong JS sẽ có 2 TH được thực thi
 * 1. Chạy ngay từ đầu khi load lại trang
 * 2. Chạy ngay khi nhận được một tương tác từ người dùng
 */

//  function handleClick() {
//    console.log("Button got pressed");
//  }

//  var colorSkinId = document.getElementById("color-skin");

//  function changeStyleColor(href) {
//   colorSkinId.setAttribute("href", href);
//  }

//   var body = document.getElementsByTagName('body')[0];
//  function changeBg(filename) {
//   //  console.log(filename);
//    if (filename) {
//     var valueStyle = "background-image: url('" + filename + "')";
//     body.setAttribute("style", valueStyle);
//    }

//  }

// var image = document.querySelector(".class-demo"); //truy xuất vào class 
// image.setAttribute("src", "inst_2.png");


//  function addClass(el, className) {
//    var oldClass = el.getAttribute("class");
//   //  console.log(oldClass);
//    if (oldClass) {
//      //khac null 

//      if (oldClass.indexOf(className) === -1) {
//       var newClass = oldClass + " " + className;
//       el.setAttribute("class", newClass);
//      }

//    } else {
//      //bang null
//     el.setAttribute("class", className);

//    }
//  }

//  function removeClass(el, className) {
//   var oldClass = el.getAttribute("class");
//   debugger;
//   if (oldClass) {
//     //tách thành chuỗi trước để kiểm tra tính tồn tại 
//     var arrOldClass = oldClass.split(" ");
//     var indexDelete = arrOldClass.indexOf(className);
//     if (indexDelete !== -1) {
//       //Class cần xóa tồn tại trong mảng cũ
//       //Xóa một phần tử tính từ vị trí indexDelete
//       arrOldClass.splice(indexDelete, 1);
//       // console.log(arrOldClass.join(" "));
//       el.setAttribute("class", arrOldClass.join(" "));
//     }
//   }
//  }

//  addClass(body, 'wrapper-content');
//  addClass(image, 'image');
//  addClass(image, 'demo-abc');
//  addClass(image, 'image');


//  removeClass(image, 'class-demo');
//  removeClass(image, "image");
//  removeClass(image, 'demo-abc');


// var demoId = document.getElementById("demo");
// // console.log(demoId.classList);

// demoId.classList.add("class3", "class4", "class5");


// // function test (...parem) {
// //   console.log(parem);
// // }

// // test("abc", "def", "ghk");


// demoId.style.backgroundColor = "red";

// var dropdownlist = Array.from(document.querySelectorAll(".dropdown"));
// // console.log(dropdownlist);

// dropdownlist.forEach(
//   function (el, idx) {
//     // console.log(el, idx);
//     var btn = el.querySelector(".btn");
//     // console.log(btn);
//     btn.addEventListener("click", function (event) {
//       // console.log(el); //this sẽ trỏ tới phần tử hiện tại 
//       if (el.classList.value.indexOf("open") === -1) {
//         el.classList.add("open");

//       } else {
//         el.classList.remove("open");
//       }
//       // console.log(el.classList.value); //trả về class
//     });
//   });


// var container = document.querySelector(".container");
// console.log(container.parentElement.parentElement.querySelector("#demo"));
// console.log(container.parentElement.parentElement.querySelector("#demo").nextElementSibling);
// console.log(container.parentElement.parentElement.querySelector("#demo").nextSibling);

// console.log(container.parentElement.parentElement.querySelector("#demo").previousElementSibling);

// var h1 = document.querySelector("h1");
// console.log("h1 = ", h1);
// h1.innerText = "Javascript DOM is so amazing";
// console.log("Get text cho phan tu h1 = ", h1.innerText);

// h1.innerHTML = "<p>Javascript is vo dich</p>";


/**Tạo một phần tử HTML bằng Javascript */
//ép kiểu về mảng cho dễ xử lí 
var listSelectYear = Array.from(document.querySelectorAll('select[name="year"]'));
console.log(listSelectYear);

for (var index = 0; index < listSelectYear.length; index++) {
  var select = listSelectYear[index];
  console.log(listSelectYear[index]);

  for (var year = 1970; year <= 2020; year++) {
    //tao ra the <option> moi
    //set attribute value cho no <option value="1970"></option>
    //Set innerText <option value="1970">1970</option>


    //tao ra the <optio> moi
    var option = document.createElement('option');
    //set attribute value cho no <option value="1970"></option>
    option.setAttribute('value', year);
    //Set innerText <option value="1970">1970</option>
    option.innerText = year;
    select.append(option);
    // console.log(option);

  }
}

var countrySelectHTML = document.querySelector('select[name="country"]');
console.log(countrySelectHTML);











var countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas (the)",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia (Plurinational State of)",
  "Bonaire, Sint Eustatius and Saba",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory (the)",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cayman Islands (the)",
  "Central African Republic (the)",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands (the)",
  "Colombia",
  "Comoros (the)",
  "Congo (the Democratic Republic of the)",
  "Congo (the)",
  "Cook Islands (the)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Curaçao",
  "Cyprus",
  "Czechia",
  "Côte d'Ivoire",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic (the)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Falkland Islands (the) [Malvinas]",
  "Faroe Islands (the)",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories (the)",
  "Gabon",
  "Gambia (the)",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard Island and McDonald Islands",
  "Holy See (the)",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran (Islamic Republic of)",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea (the Democratic People's Republic of)",
  "Korea (the Republic of)",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic (the)",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands (the)",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia (Federated States of)",
  "Moldova (the Republic of)",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands (the)",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger (the)",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands (the)",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine, State of",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines (the)",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Republic of North Macedonia",
  "Romania",
  "Russian Federation (the)",
  "Rwanda",
  "Réunion",
  "Saint Barthélemy",
  "Saint Helena, Ascension and Tristan da Cunha",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin (French part)",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten (Dutch part)",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and the South Sandwich Islands",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan (the)",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan",
  "Tajikistan",
  "Tanzania, United Republic of",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands (the)",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates (the)",
  "United Kingdom of Great Britain and Northern Ireland (the)",
  "United States Minor Outlying Islands (the)",
  "United States of America (the)",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela (Bolivarian Republic of)",
  "Viet Nam",
  "Virgin Islands (British)",
  "Virgin Islands (U.S.)",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "Åland Islands"
];

for (var i = 0; i < countryList.length; i++) {
  var optionCountry = document.createElement('option');
  optionCountry.setAttribute('value', countryList[i]);
  optionCountry.innerText = countryList[i];
  countrySelectHTML.append(optionCountry);

}

var districtList = Array.from(document.querySelectorAll('tbody tr td:nth-child(2) a'));
var selectProvince = document.querySelector('select[name="province"]');
var provinceListVN = [];
console.log(selectProvince);
for (var j = 0; j < districtList.length; j++) {
  provinceListVN.push(districtList[j].innerText);
  var optionProvince = document.createElement('option');
  optionProvince.setAttribute('value', districtList[j].innerText);
  optionProvince.innerText = districtList[j].innerText;
  selectProvince.append(optionProvince);
  // console.log(districtList[j].innerText);
}
console.log(provinceListVN);

var array = ["An Giang", "Bà Rịa - Vũng Tàu", "Bạc Liêu", "Bắc Giang", "Bắc Kạn", "Bắc Ninh", "Bến Tre", "Bình Dương", "Bình Định", "Bình Phước", "Bình Thuận", "Cà Mau", "Cao Bằng", "Cần Thơ", "Đà Nẵng", "Đắk Lắk", "Đắk Nông", "Đồng Nai", "Đồng Tháp", "Điện Biên", "Gia Lai", "Hà Giang", "Hà Nam", "Hà Nội", "Hà Tĩnh", "Hải Dương", "Hải Phòng", "Hòa Bình", "Hậu Giang", "Hưng Yên", "Thành phố Hồ Chí Minh", "Khánh Hòa", "Kiên Giang", "Kon Tum", "Lai Châu", "Lào Cai", "Lạng Sơn", "Lâm Đồng", "Long An", "Nam Định", "Nghệ An", "Ninh Bình", "Ninh Thuận", "Phú Thọ", "Phú Yên", "Quảng Bình", "Quảng Nam", "Quảng Ngãi", "Quảng Ninh", "Quảng Trị", "Sóc Trăng", "Sơn La", "Tây Ninh", "Thái Bình", "Thái Nguyên", "Thanh Hóa", "Thừa Thiên - Huế", "Tiền Giang", "Trà Vinh", "Tuyên Quang", "Vĩnh Long", "Vĩnh Phúc", "Yên Bái"];
// console.log(districtList);

