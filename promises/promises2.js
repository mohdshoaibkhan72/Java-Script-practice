var ans = new Promise((res, rej) => {
  if (false) {
    return res();
  } else {
    return rej();
  }
});

ans
  .then(() => {
    console.log("resolve hogy tha ");
  })
  .catch(() => {
    console.log("kaaam nhii huva");
  });
