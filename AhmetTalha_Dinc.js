(() => {
  const html = `
    <div class="containerr">
      <div class="carousel-header">
        <h2 class="carousel-text">Beğenebileceğinizi düşündüklerimiz</h2>
      </div>
      <div class="carousel-items">
      
      </div>
    </div>
  `;

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap');

    .containerr {
      width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    max-width: 1320px;
    }

    .carousel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #fef6eb;
      padding: 25px 67px;
      border-top-left-radius: 35px;
      border-top-right-radius: 35px;
     
    }

    .carousel-text {
      font-family: Quicksand-Bold;
      font-size: 3rem;
      font-weight: 700;
      line-height: 1.11;
      color: #f28e00;
      margin: 0;
    }
  `;

  const addContentAfterDene = () => {
    const targetElement = document.querySelector('.ins-preview-wrapper');

    if (targetElement) {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = html;

      targetElement.insertAdjacentElement('afterend', wrapper.firstElementChild);

      const style = document.createElement('style');
      style.textContent = css;
      document.head.appendChild(style);
    }
  };

  addContentAfterDene();
})();
