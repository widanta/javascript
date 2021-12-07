// representasi success dalam code 200 - 299
// pembuatan menggunakan jQuery ajax
// $(".search-btn").on("click", function () {
//   $.ajax({
//     url: "http://www.omdbapi.com/?apikey=a3bdd005&s=" + $(".input-keyword").val(),
//     success: (results) => {
//       const movies = results.Search;
//       let cards = "";
//       movies.forEach((m) => {
//         cards += showCards(m);
//       });
//       $(".movie-container").html(cards);

//       // ketika tombol detail di tekan
//       $(".modal-detail-btn").on("click", function () {
//         $.ajax({
//           url: "http://www.omdbapi.com/?apikey=a3bdd005&i=" + $(this).data("imdbid"),
//           success: (m) => {
//             const movieDetail = showMovieDetail(m);
//             $(".modal-body").html(movieDetail);
//           },
//           error: (e) => {
//             console.log(e.responseText);
//           },
//         });
//       });
//     },
//     error: (e) => {
//       console.log(e.responseText);
//     },
//   });
// });
// akhir jquery

// pembuatan menggunakan vanila javascript
// const searchBtn = document.querySelector(".search-btn");
// searchBtn.addEventListener("click", function () {
//   const inputKeyword = document.querySelector(".input-keyword");
//   fetch("http://www.omdbapi.com/?apikey=a3bdd005&s=" + inputKeyword.value)
//     .then((response) => response.json())
//     .then((response) => {
//       const movies = response.Search;
//       let cards = "";
//       movies.forEach((m) => (cards += showCards(m)));
//       const movieContainer = document.querySelector(".movie-container");
//       movieContainer.innerHTML = cards;

//       // ketika tombol botton di klik
//       const modalDetailBtn = document.querySelectorAll(".modal-detail-btn");
//       modalDetailBtn.forEach((btn) => {
//         btn.addEventListener("click", function () {
//           const imdbid = this.dataset.imdbid;
//           console.log(imdbid);
//           fetch("http://www.omdbapi.com/?apikey=a3bdd005&i=" + imdbid)
//             .then((response) => response.json())
//             .then((m) => {
//               const movieDetail = showMovieDetail(m);
//               const modalBody = document.querySelector(".modal-body");
//               modalBody.innerHTML = movieDetail;
//             });
//         });
//       });
//     });
// });
// akhir vanila javascript

// pembuatan code agar lebih sederhana / gampang di baca
// ketika tombol cari di klik
const searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", async function () {
  const inputKeyword = document.querySelector(".input-keyword");
  // function
  const movies = await getMovies(inputKeyword.value);
  updateUi(movies);
});

// menampilkan detail
// event binding
// ketika tombol detail di klik
document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("modal-detail-btn")) {
    const imdbid = e.target.dataset.imdbid;
    const movieDetail = await getMovieDetail(imdbid);
    updateUiDetail(movieDetail);
  }
});

function getMovieDetail(imdbid) {
  return fetch("http://www.omdbapi.com/?apikey=a3bdd005&i=" + imdbid)
    .then((response) => response.json())
    .then((m) => m);
}

function updateUiDetail(m) {
  const movieDetail = showMovieDetail(m);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = movieDetail;
}

function getMovies(keyword) {
  return fetch("http://www.omdbapi.com/?apikey=a3bdd005&s=" + keyword)
    .then((response) => response.json())
    .then((response) => response.Search);
}

function updateUi(movies) {
  let cards = "";
  movies.forEach((m) => (cards += showCards(m)));
  const movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = cards;
}

// akhir pembaruan

function showCards(m) {
  return `<div class="col-md-4 my-3">
            <div class="card">
              <img src="${m.Poster}" class="card-img-top card-img" alt="" />
              <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                <a href="#" class="btn btn-primary modal-detail-btn" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Details</a>
              </div>
            </div>
          </div>`;
}

function showMovieDetail(m) {
  return `<div class="container-fluid">
            <div class="row">
              <div class="col-md-3">
                <img src="${m.Poster}" alt="img-fluid" class="modal-img"/>
              </div>
              <div class="col-md">
                <ul class="list-group">
                  <li class="list-group-item"><h4>${m.Title}(${m.Year})</h4></li>
                  <li class="list-group-item"><strong>Director : </strong> ${m.Director}</li>
                  <li class="list-group-item"><strong>Actors : </strong> ${m.Actors}</li>
                  <li class="list-group-item"><strong>Writer : </strong> ${m.Writer}</li>
                  <li class="list-group-item">
                    <strong>Plot : </strong> <br />
                    ${m.Plot}
                  </li>
                </ul>
              </div>
            </div>
          </div>`;
}
