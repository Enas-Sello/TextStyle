let font = document.querySelectorAll( 'input[name="Font"]' )
let Align = document.querySelectorAll('input[name="Align"]')
let Height = document.querySelectorAll('input[name="Height"]')
let Lspace = document.querySelectorAll('input[name="Lspace"]')
let Indent = document.querySelectorAll( 'input[name="Indent"]' )
let Transform = document.querySelectorAll( 'input[name="Transform"]' )
let Decorate = document.querySelectorAll( 'input[name="Decorate"]' )
let Border = document.querySelectorAll( 'input[name="Border"]' )
let BorderColor = document.querySelectorAll('input[name="BorderColor"]')
const table = document.getElementById( 'Text' );
console.log(font,
Align,
Height,
Lspace,
Indent,
Transform,
Decorate,
Border,
BorderColor )
    


function ChangeFont ( value )
{

        table.style.fontFamily = value
        console.log(value)
}


function ChangeAlign ( value )
{

        table.style.textAlign = value
}

function ChangeHeight ( value )
{

        table.style.lineHeight = value
}

function ChangeLSpace ( value )
{

        table.style.letterSpacing = value
}

function ChangeIndent ( value )
{

        table.style.textIndent = value
}

function ChangeTransform ( value )
{

        table.style.textTransform = value
}

function ChangeDecorate ( value )
{

        table.style.textDecoration = value
}

function ChangeBorder ( value )
{

        table.style.borderStyle = value
}

function ChangeBorderColor ( value )
{

        table.style.borderBlockColor = value
}

