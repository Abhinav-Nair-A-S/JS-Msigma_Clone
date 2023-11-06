function randomRgbColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return [r, g, b];
}

const color = [];

async function getData() {
  try {
    const response = await fetch("https://api.msigma.in/btech/v2/branches/");
    if (!response.ok) {
      throw new error(`API request failed ,status :${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    const branches = [];
    data.branches.forEach((course) => {
      branches.push(course);
    });
    for (let i = 0; i < 10; i++) {
      let color = randomRgbColor();
      const styles = {
        color: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
        border: `1px solid rgb(${color[0]}, ${color[1]}, ${color[2]})`,
        backgroundColor: `rgba((${color[0]}, ${color[1]}, ${color[2]}), 0.05)`,
      };
      let course = document.querySelector(".courses");
      let box = document.createElement("div");
      box.classList.add("box");
      let short = document.createElement("h3");
      short.innerHTML = branches[i].short;
      short.style.color = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
      let name = document.createElement("p");
      name.innerHTML = branches[i].name;
      name.id = "name";
      let button = document.createElement("button");
      button.innerHTML = "Apply now";
      Object.assign(button.style, styles);
      let price = document.createElement("p");
      price.innerHTML = "Fee starting at ₹799 per subject";
      price.id = "price";
      box.append(short, name, button, price);
      course.append(box);
    }
  } catch (error) {
    console.log(error);
  }
}
getData();
