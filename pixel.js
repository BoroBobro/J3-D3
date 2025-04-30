const API_KEY = '5wkRzl5NJbSpAib6zTIdX7Z0COZe1lX9r8vvtbWgETsYhPtlTpCLdeuQ'

const loadImage = (query = 'nature') => {
    fetch('https://api.pexels.com/v1/search?query=[your-query]'{
        headers:{
            Authorization: API_KEY,
        },
    })
    .then((res) => res.json())
    .then((data) => {
        renderCards(data.photos);
    });
};

const renderCards = (photos) => {
    const row = document.querySelector('.album .row');
    row.innerHTML = '';

photos.forEach ((photo) =>{
    const col = document.createElement('div');
    col.className = 'col-md-4';
    col.innerHTML = `
      <div class="card mb-4 shadow-sm">
        <img src="${photo.src.medium}" class="bd-placeholder-img card-img-top" style="cursor:pointer" />
        <div class="card-body">
          <h5 class="card-title" style="cursor:pointer">${photo.photographer}</h5>
          <p class="card-text">Photo by ${photo.photographer}.</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary view-btn">View</button>
              <button type="button" class="btn btn-sm btn-outline-secondary hide-btn">Hide</button>
            </div>
            <small class="text-muted">${photo.id}</small>
          </div>
        </div>
      </div>
    `;
    col.querySelector('img').addEventListener('click',() => {
        window.location.href = 'detail.html?id=${photo.id}';
    });
    col.querySelector('card-title').addEventListener('click',() =>{
        window.location.href = 'detail.html?id=${photo.id}';
    });
    col.querySelector('.hide-btn').addEventListener('click', () => {
        col.remove();
    });
    
    row.appendChild(col);
  });
};

document.querySelector(`.btn-primary`).addEventListener('click', () => {
    loadImage('nature');
});
document.querySelector('.btn-secondary').addEventListener('click', () => {
    loadImage('city');
});


const searchContainer = document.createElement('div');
searchContainer.className = 'my-3';
searchContainer.innerHTML = `laceholder="Search images..." class="form-control" />
  <button id="searchBtn" class="btn btn-success mt-2">Search</button>
`;

document.querySelector(`.jumbotron .container`).appendChild(searchContainer);

