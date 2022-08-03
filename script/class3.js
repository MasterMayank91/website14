/*
*   Website 13 
*   Functions
*/
try
{
    var i,percent = 0,learn = [
        [98,"HTML"],
        [90,"CSS"],
        [85,"JavaScript"],
        [70,"PHP"],
        [50,"SQL"],
        [65,"C"],
        [10,"C++"],
        [40,"Python"],
        [75,"Java"],
        [65,"BatchScript"],
        [50,"CMD"]
    ];
    for (i = 0; i < learn.length; i++)
    {
        document.write("<div class='data'><h3> "+learn[i][0]+"% "+learn[i][1]+" </h3><progress max='100' value="+learn[i][0]+"></progress></div>");
        percent += Number(learn[i][0]);
    }
}
catch (error)
{
    alert("ERROR : "+error.message);
}