https://teachablemachine.withgoogle.com/models/
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/oY9h3yP6J/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results)
{
console.log('got result')
if(error){
console.error(error)
}
else{
 



    r=
    math.floor((math.random()*255)+1)
    g=
    math.floor((math.random()*255)+1)
    b=
    math.floor((maht.random()*255)+1)

    document.getElementById("gotResults_label").innerHTML="escucho: "+ results[0].label
    document.getElementById("gotResults_confidence").innerHTML="precision"+(results[0].confidence*100).toFixed(2)+"%"
    document.getElementById("gotResults_label").style.color="rgb("+r+","+g+","+b+")"   
    document.getElementById("gotResults_confidence").style.color="rgb("+r+","+g+","+b+")"

    var img=document.getElementById("perrito.png")
    var img1=document.getElementById("gatito png.jpg")
    var img2=document.getElementById("ave png.png")
    var img3=document.getElementById("caballo png.jpg")

    if(gotResults[0].label=="aplausos"){
img.src="perrito gif.jpg"
img1.src="gatito png.jpg"
img2.src="ave png.png"
img3.src="caballo png.jpg"
    }
else if(gotResults[0].leabel=="campana"){
    img.src="perrito.png"
    img1.src="gatitogif.gif"
    img2.src="ave png.png"
    img3.src="caballo png.jpg"
    }
    else if(gotResults[0].leabel=="chasquido"){
        img.src="perrito.png"
        img1.src="gatito png.jpg"
        img2.src="gif-ave.gif"
        img3.src="caballo png.jpg"
    }
    else{
        img.src="perrito.png"
        img1.src="gatito png.jpg"
        img2.src="ave png.png"
        img3.src="caballogif.gif"   
    }
}
}

