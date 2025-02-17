let counter=0;
let victims=0;
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
}