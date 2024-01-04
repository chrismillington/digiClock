const clock = document.querySelector(".clock");

const tick = () => {
  // Gets date now in MS
  const now = new Date();
  // Gets hours minutes seconds in JS
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  //Displays values as a string to be reset every second
  const html = `
    <span>${h}</span> :
    <span>${tenner(m)}</span> :
    <span>${tenner(s)}</span>
  `;

  clock.innerHTML = html;
};
// Calls tick every second
setInterval(tick, 1000);

function tenner(tm) {
  if (tm < 10) {
    //   return "0" + tm.toString();
    return [0, tm].join("");
  } else {
    return tm;
  }
}
