const collabsible = document.querySelectorAll(".collapsible");
// collabsible.forEach((i) => {
//   console.log(i);
//   //   i.addEventListener("click", (item) => {
//   //     // item.classList.toggle = "collapsible--active";
//   //     // console.log(this.document);
//   //     console.log(this);
//   //   });
// });

console.log(collabsible);

collabsible.forEach((c) => {
  c.addEventListener("click", function () {
    this.classList.toggle("collapsible--active");
  });
});
