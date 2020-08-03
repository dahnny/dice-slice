function getRandomImage() {
    var randomNumber = Math.floor(Math.random() * 6);
    var listOfImages = [];
    for (var i = 0; i < 6; i++) {
        listOfImages.push("images/dice" + (i + 1) + ".png");
    }
    var pickedImage = listOfImages[randomNumber];
    return [pickedImage, randomNumber];
}
var firstnumberList = getRandomImage();
var secondNumberList = getRandomImage();

if(firstnumberList[1] > secondNumberList[1]){
    document.querySelector("h1").textContent = "Player 1 wins"
    document.querySelector(".before-flag").classList.add("hide");
    document.querySelector(".after-flag").classList.remove("hide");
}else if(firstnumberList[1] < secondNumberList[1]){
    document.querySelector("h1").textContent = "Player 2 wins"
    document.querySelector(".before-flag").classList.remove("hide");
    document.querySelector(".after-flag").classList.add("hide");
}
document.querySelector(".img1").setAttribute("src", firstnumberList[0]);
document.querySelector(".img2").setAttribute("src", secondNumberList[0]);
