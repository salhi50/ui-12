/* MAIN SCRIPT */

// GET SOME USERS FROM GITHUB
async function fetchData(url) {
    let res = await fetch(url);
    let data = await res.json();
    return data;
}

// REPLACE DATA
const userList = document.querySelectorAll('.user--list');
const sections = document.querySelectorAll('.users ul');
fetchData('https://api.github.com/users').then((d) => {
    let slice1 = d.splice(0,10);
    let slice2 = d.splice(0,10);
    let slice3 = d.splice(0,10);
    let slices = [slice1,slice2,slice3]
    sections.forEach((item,indx) => {
        slices[indx].forEach((elem) => {
            item.innerHTML += `
            <li class="px-4 user--list py-2 d-flex align-items-center">
            <img src="${elem.avatar_url}" class="user--avatar rounded-circle" alt="">
            <h6 class="user--name ps-3">${elem.login}</h6>
          </li>
            `
        })
    })
})


// GET FRIENDS
const friends = document.querySelector('.friends')
fetchData('https://api.github.com/users').then((d) => {
    d.length = 10;
    d.forEach((one) => {
        friends.innerHTML += `
        <div class="item--friend p-3 d-flex align-items-center justify-content-between">
        <div class="left--friend d-flex align-items-center">
          <img src="${one.avatar_url}" class="rounded-circle" alt="">
        <div class="details ps-3">
          <h5>${one.login}</h5>
        </div>
        </div>
        <div class="right--friend">
          <span class="material-symbols-outlined cursor">more_horiz</span>
        </div>
      </div>
        `
    })
})