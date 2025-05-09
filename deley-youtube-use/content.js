let clockImg = "https://media.istockphoto.com/id/597276512/photo/wall-clock-isolated-on-white-ten-past-ten.jpg?s=612x612&w=0&k=20&c=lKvvdbmDXzEDA8SobtWTraysYFAhbFENDrZdbmv36Zk=";

const images = document.getElementsByTagName("img");

for (image of images) { 
    image.src = clockImg;
    image.alt = "image of clock";
}

document.onload(alert("Time is not infinite. Please be wise with it."));