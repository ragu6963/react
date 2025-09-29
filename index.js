fetch("https://dummyjson.com/carts")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.carts.slice(0, 3));
  });
