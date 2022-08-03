/*
*   Website 13 
*   Functions
*/

try
{
    let first = document.getElementById("box1");

    let second = document.getElementById("box2");

    let third = document.getElementById("box3");

    let forth = document.getElementById("box4");

    let next = document.getElementById("next_button");

    let icon = document.getElementsByClassName("icon");


    var color1 = "#111";
    var color2 = "crimson";
    var none = "none";
    var border = "3px solid "+color2;

    package1();

    function package1()
    {
        first.style.display = "flex";   // flex
        second.style.display = "none";  // grid
        third.style.display = "none";   // grid
        forth.style.display = "none";   // grid
        
        icon[0].style.backgroundColor = color1;
        icon[1].style.backgroundColor = "transparent";
        icon[2].style.backgroundColor = "transparent";
        icon[3].style.backgroundColor = "transparent";
        icon[4].style.backgroundColor = "transparent";

        icon[0].style.borderTop = border;
        icon[1].style.borderTop = none;
        icon[2].style.borderTop = none;
        icon[3].style.borderTop = none;
        icon[4].style.borderTop = none;
    }
    function package2()
    {
        first.style.display = "none";
        second.style.display = "grid"; 
        third.style.display = "none";
        forth.style.display = "none";
        
        icon[0].style.backgroundColor = "transparent";
        icon[1].style.backgroundColor = color1;
        icon[2].style.backgroundColor = "transparent";
        icon[3].style.backgroundColor = "transparent";
        icon[4].style.backgroundColor = "transparent";

        icon[0].style.borderTop = none;
        icon[1].style.borderTop = border;
        icon[2].style.borderTop = none;
        icon[3].style.borderTop = none;
        icon[4].style.borderTop = none;
    }
    function package3()
    {
        first.style.display = "none";
        second.style.display = "none"; 
        third.style.display = "grid";
        forth.style.display = "none";
        
        icon[0].style.backgroundColor = "transparent";
        icon[1].style.backgroundColor = "transparent";
        icon[2].style.backgroundColor = color1;
        icon[3].style.backgroundColor = "transparent";
        icon[4].style.backgroundColor = "transparent";

        icon[0].style.borderTop = none;
        icon[1].style.borderTop = none;
        icon[2].style.borderTop = border;
        icon[3].style.borderTop = none;
        icon[4].style.borderTop = none;
    }
    function package4()
    {
        first.style.display = "none";
        second.style.display = "none"; 
        third.style.display = "none";
        forth.style.display = "grid";
        
        icon[0].style.backgroundColor = "transparent";
        icon[1].style.backgroundColor = "transparent";
        icon[2].style.backgroundColor = "transparent";
        icon[3].style.backgroundColor = color1;
        icon[4].style.backgroundColor = "transparent";
        
        icon[0].style.borderTop = none;
        icon[1].style.borderTop = none;
        icon[2].style.borderTop = none;
        icon[3].style.borderTop = border;
        icon[4].style.borderTop = none;
    }
    function shade()
    {
        this.style.borderRadius = "50%";
        this.style.backgroundColor = color1; 
    }
    function dull()
    {
        this.style.borderRadius = "0";
        // this.style.backgroundColor = ""; 
    }

    icon[0].addEventListener("mouseenter",shade);
    icon[1].addEventListener("mouseenter",shade);
    icon[2].addEventListener("mouseenter",shade);
    icon[3].addEventListener("mouseenter",shade);
    icon[4].addEventListener("mouseenter",shade);

    icon[0].addEventListener("mouseout",dull);
    icon[1].addEventListener("mouseout",dull);
    icon[2].addEventListener("mouseout",dull);
    icon[3].addEventListener("mouseout",dull);
    icon[4].addEventListener("mouseout",dull);

    icon[0].addEventListener("click",package1);
    icon[1].addEventListener("click",package2);
    icon[2].addEventListener("click",package3);
    icon[3].addEventListener("click",package4);

    icon[4].addEventListener("click",function()
    {
        window.open("https://www.wikipedia.org#mastermayank");   
    });
    next.addEventListener("click",package2);
}
catch (error)
{
    alert("ERROR : "+error.message);    
}