const url = "https://jsonplaceholder.typicode.com/comments";
const bodyEl = document.querySelector(".body");
const input = document.querySelector("input");

let data = {
  postId: 1,
  id: 1,
  name: "id labore ex et quam laborum",
  email: "Eliseo@gardner.biz",
  body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium",
};

function splitBody(str) {
  const arr = str.split("\n");

  return arr.map((item) => `<p>${item}</p>`).join("");
}

function highLightText(text, key) {
  let regex = new RegExp(key, "g");
  return text.replace(regex, `<mark>${key}</mark>`);
}

function searchComments() {
  let filter = comments.filter((item) => item.name.indexOf(input.value) > -1);
  let content = renderData(filter);
  bodyEl.innerHTML = content;
}

function renderData(data) {
  if (input.value !== "") {
    let newData = data.map((item) => {
      return {
        ...item,
        name: highLightText(item.name, input.value),
      };
    });

    return newData
      .map(
        (item, index) => `<tr>
    <td>${index + 1}</td>
    <td>${item.name}</td>
    <td>${item.email}</td>
    <td>${splitBody(item.body)}</td>
  </tr>`
      )
      .join("");
  } else {
    return data
      .map(
        (item, index) => `<tr>
    <td>${index + 1}</td>
    <td>${item.name}</td>
    <td>${item.email}</td>
    <td>${splitBody(item.body)}</td>
  </tr>`
      )
      .join("");
  }
}

let comments = [];

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    comments.push(...data);
    let content = renderData(data);

    bodyEl.innerHTML = content;
  });

bodyEl.innerHTML = renderData(comments);

input.addEventListener("change", searchComments);

input.addEventListener("keyup", searchComments);
