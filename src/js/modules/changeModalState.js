import checkNumInputs from "./checkNumInputs.js";

const changeModalState = (state) => {
  const windowForm = document.querySelectorAll('.balcon_icons_img');
  const windowWidth = document.querySelectorAll('#width');
  const windowHeight = document.querySelectorAll('#height');
  const windowType = document.querySelectorAll('#view_type');
  const windowProfile = document.querySelectorAll('.checkbox');

  checkNumInputs('#width');
  checkNumInputs('#height');

  function bindActionToElements(event, element, prop) {
    element.forEach((item, index) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case 'SPAN':
            state[prop] = index;
            break;
          case 'INPUT':
            if (item.getAttribute('type') === 'checkbox') {
              index === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
              element.forEach((box, j) => {
                box.checked = false;
                if (index == j) {
                  box.checked = true;
                }
              })
            } else {
              state[prop] = item.value;
            }
            break;
          case 'SELECTOR' :
            console.log('selector');
            break;
        }
      })
    })
  }

  bindActionToElements('click', windowForm, 'form');
  bindActionToElements('input', windowHeight, 'height');
  bindActionToElements('input', windowWidth, 'width');
  bindActionToElements('change', windowType, 'type');
  bindActionToElements('change', windowProfile, 'profile');
};

export default changeModalState;