const container = document.querySelector('.container');
const generateColorBtn = document.querySelector('.btn');

const generatepalette = () => {
  container.innerHTML = '';
  for (let i = 1; i <= 8; i++) {
    const randomHex = Math.floor(Math.random() * 0xfffff).toString(16);
    const colorValue = `#${randomHex.padStart(6, '0')}`;
    const colorDiv = document.createElement('div');
    colorDiv.classList.add('box');
    colorDiv.innerHTML = `
    <div class="color-bg" style="background: ${colorValue}"></div>
    <span class="hex-value">${colorValue}</span>`;
    colorDiv.addEventListener('click', () => copyText(colorDiv, colorValue));
     container.appendChild(colorDiv);

  }
};

generatepalette();

generateColorBtn.addEventListener('click', generatepalette);

function copyText(elm, hexvalue) {
  let colorTextSpan = elm.querySelector('.hex-value');
  console.log(colorTextSpan);

  navigator.clipboard.writeText(hexvalue).then(() => {
    colorTextSpan.innerText = 'copied';
    setTimeout(() => (colorTextSpan.innerText = hexvalue), 1000).catch(() => 
      alert('failed copy')
    );
  });
}