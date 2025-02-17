let counter=0;
let victims=0;

let hehehDICTIONARY={
    answerToLife:42,
    swiftyyy:22,
    mario:"Mamamia"
}

function middleFlip(){
    if (document.getElementById('myImage').src.endsWith('button1.png')){
        document.getElementById('myImage').src='button2.png';
    }else{
        document.getElementById('myImage').src='button1.png';
    }
    counter++;
    if (counter%3===2){
        window.alert("HEHEHEH EVIL ADSSSS")
        victims++;
        console.log("Victim count: "+victims);
    }
    // console.log("answerToLife is" + hehehDICTIONARY[answerToLife]);
    // console.log("Swifties are" + hehehDICTIONARY[swiftyyy]);
    // console.log(hehehDICTIONARY[mario] + "u stepped on my pitza")

}