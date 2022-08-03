/*
*   Website 13 
*   Functions
*/
try
{
    var image = [
        "y6.png",
        "y7.png",
        "y8.png",
        "y9.png",
        "y10.png",
        "y12.png",
        "y13.png",
        "y14.png",
        "y15.png",
        "y18.png",
        "y19.png",
        "y21.png",
        "y22.png",
        "y24.png",
        "y1.png"
    ];

    image.forEach(i => {
        document.write("<img src='../rtx/Desgin/"+i+"'>");
    });
}
catch (error)
{
    alert("ERROR : "+error.message);
}