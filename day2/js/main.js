const secondHand = document.querySelector(".hand.hand-second");
const minuteHand = document.querySelector(".hand.hand-minute");
const hourHand = document.querySelector(".hand.hand-hour");
console.log(secondHand);

const setSecond = () => {
  const now = new Date();
  const second = now.getSeconds();
  const secondDegree = (second * 360) / 60;
  secondHand.style.transform = `translateY(-50%) rotate(${
    secondDegree - 90
  }deg)`;
};

setInterval(setSecond, 1000);

const setMinute = () => {
  const now = new Date();
  const minute = now.getMinutes();
  const minuteDegree = (minute * 360) / 60;
  minuteHand.style.transform = `translateY(-50%) rotate(${
    minuteDegree - 90
  }deg)`;
};

setInterval(setMinute, 1000);

const setHour = () => {
  const now = new Date();
  const hour = now.getHours();
  const hourDegree = (hour * 360) / 12;
  hourHand.style.transform = `translateY(-50%) rotate(${hourDegree - 90}deg)`;
};

setInterval(setHour, 1000);
