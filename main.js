const title = document.getElementById("title");
// const testTitle = document.getElementById("title-dontmove");
const theText = "the place after ";

function populate_title(){
    let times = 0;
    if (title.innerText === ""){title.innerText=theText}
    while (title.offsetWidth <= screen.width){
        title.innerText+=title.innerText;
        times++
        if (times > 5){break}
    }
    title.innerText+=title.innerText;
    // testTitle.innerText=title.innerText
}
populate_title();

const root = document.querySelector(':root');

const baseFonts=["Courier Prime","Source Code Pro","Mona Sans","Syne Mono","Azeret Mono"];
const fontLengths={
    "Courier Prime":-480,
    "Source Code Pro":-480,
    "Mona Sans":-365,
    "Syne Mono":-440,
    "Azeret Mono":-520
};
var fonts = [...baseFonts];

var changingFont = true;

function changeFont(){
    let index=Math.floor(Math.random()*fonts.length);
    let newFont=fonts[index];
    title.style.fontFamily=newFont;
    root.style.setProperty('--size',fontLengths[newFont]+"px");

    fonts.splice(index,1);
    if (fonts.length === 0){
        fonts=[...baseFonts];
        fonts.splice(fonts.indexOf(newFont),1);
    }
    console.log(fonts);

    if (changingFont) {setTimeout(changeFont,1000);}
}
changeFont();