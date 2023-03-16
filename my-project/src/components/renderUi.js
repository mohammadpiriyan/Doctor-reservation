import { btnCard } from "./btncard";

export const renderUi = (data) => {
  const cardbox = document.getElementById("cardbox");
  cardbox.innerHTML = "";

  data.map((item) => {
    let html = `
<div
          class="card shadow gap-8 p-4 bg-gray-1 w-2/12 rounded-2xl flex flex-col justify-center items-center"
        >
          <div
            class="flex justify-center items-center bg-gray-3 w-20 h-20 rounded-full"
          >
            <img src="src/icon/icons8-user-30.png" class="w-12" alt="" />
          </div>

          <ul>
            <li class="flex gap-4">
              <p>نام:</p>
              <p>${item.fullname}</p>
            </li>
            <li class="flex gap-4">
              <p>تخصص:</p>
              <p>${item.Expertise}</p>
            </li>
          </ul>
          <button onclick="${btnCard()}" class="bg-gray-3 p-2 w-3/4 rounded-full text-gray-1">
            رزرو پزشک
          </button>
        </div>`;
    cardbox.innerHTML += html;
  });
};
