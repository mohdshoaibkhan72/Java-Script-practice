var ans = new Promise((res, rej) => {
  var n = Math.floor(Math.random() * 10);
        console.log(n);
  if (n < 5) {
    return res();
  } else {
    return rej();
  }
})
  .then(() => {
    console.log("number is blow 5" );
  })
  .catch(() => {
    console.log("number is above 5");
  });
