/*
*   Website 13 
*   Functions
*/
try
{
    let button = document.getElementsByClassName("button");

    let field = document.getElementsByClassName("field");

    let text = document.getElementsByTagName("textarea");

    var empty = "";

    button[0].onclick = function()
    {
        alert("Dear "+field[0].value+" your Mail is Unsbmitted some probles ");
    }
    button[1].onclick = function()
    {
        field[0].value = "";
        field[1].value = "";
        field[2].value = "";

        text[0].value = "";
    }
}
catch (error)
{
    alert("ERROR : "+error.message);
}