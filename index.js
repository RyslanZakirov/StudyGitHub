document.addEventListener("dblclick", (e) => {
  console.log(e.clientX, e.clientY);
});

class Person {
  constructor() {}

  printInfo() {
    return "ertyhg";
  }
}

const some = () => {
  return Math.pow(23, 2);
};

const sample = new Person();

const arr = [123, 12, 745, 234, 68];

navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
  console.log(stream);

  const mediaRecorder = new MediaRecorder(stream);

  mediaRecorder.ondataavailable = (e) => {
    console.log(e.data);
  };

  mediaRecorder.start();

  setTimeout(() => {
    mediaRecorder.stop();
  }, 4000);
});
