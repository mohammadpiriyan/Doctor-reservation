export function modalDays(e) {
  const modalDay = document.getElementById('modalDay');
  const targetId = e.target.id;
  console.log(targetId);

  fetch(`http://localhost:3002/doctors/${targetId}`)
    .then((response) => response.json())
    .then((data) => {
      let htmlModal = `<div>
      <div class="flex gap-12 items-center">
        <div
          class="flex justify-center items-center bg-gray-3 w-20 h-20 rounded-full"
        >
          <img src="src/icon/icons8-user-30.png" class="w-12" alt="" />
        </div>
        <div>
          <ul>
            <li class="flex gap-16">
              <p>نام:</p>
              <p>محمد</p>
            </li>
            <li class="flex gap-8">
              <p>تخصص:</p>
              <p>مریض</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-wrap gap-8 justify-center mb-20">
        <button
          class="p-2 w-32 rounded-md shadow-lg bg-gray-2 hover:bg-gray-3"
        >
          شنبه
        </button>
        <button
          class="p-2 w-32 rounded-md shadow-lg bg-gray-2 hover:bg-gray-3"
        >
          یک شنبه
        </button>
        <button
          class="p-2 w-32 rounded-md shadow-lg bg-gray-2 hover:bg-gray-3"
        >
          دو شنبه
        </button>
        <button
          class="p-2 w-32 rounded-md shadow-lg bg-gray-2 hover:bg-gray-3"
        >
          سه شنبه
        </button>
        <button
          class="p-2 w-32 rounded-md shadow-lg bg-gray-2 hover:bg-gray-3"
        >
          چهار شنبه
        </button>
        <button
          class="p-2 w-32 rounded-md shadow-lg bg-gray-2 hover:bg-gray-3"
        >
          پنج شنبه
        </button>
        <button
          class="p-2 w-32 rounded-md shadow-lg bg-gray-2 hover:bg-gray-3"
        >
          جمعه
        </button>
      </div>
    </div>`;

      // modalDay.innerHTML = htmlModal;
    });
}
