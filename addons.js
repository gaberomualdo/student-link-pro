const BASE_URL = 'bu.edu/link/bin/uiscgi_studentlink.pl';

const querySelectorAllText = (selector, text, elm = document) => {
  const selectorMatches = Array.from(elm.querySelectorAll(selector));

  const r = [];

  for (let i = 0; i < selectorMatches.length; i++) {
    if (selectorMatches[i].innerText.toLowerCase().includes(text.toLowerCase())) {
      r.push(selectorMatches[i]);
    }
  }

  return r;
};

const querySelectorText = (selector, text, elm = document) => {
  const all = elm.querySelectorAllText(selector, text);
  return all.length > 0 ? all[0] : null;
};

const setSelectorTextWithClass = (selector, text, className, elm = document) => {
  querySelectorAllText(selector, text, elm).forEach((elm) => {
    elm.classList.add(className);
  });
};

document.querySelector('html').setAttribute('lang', 'en');

Array.from(document.getElementsByTagName('img')).forEach((img) => {
  if (!img.hasAttribute('alt')) {
    const imgFilenameNoExt = img.src.split('/').pop().split('.')[0];
    const imgDescription = imgFilenameNoExt.replace(/_/g, ' ').trim() + ' image';
    img.setAttribute('alt', imgDescription);
  }
});

document.head.insertAdjacentHTML(
  'afterbegin',
  `
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
`
);

// footer
setSelectorTextWithClass('center', 'Copyright ©,', 'footer');
(() => {
  const footer = document.querySelector('.footer');
  footer.classList.add('with-links');
  footer.innerHTML = footer.querySelector('font').innerHTML;
  footer.innerHTML = '<p>' + footer.innerHTML.split('<br>').join('</p><p>') + '</p>';
})();

// links
Array.from(document.querySelectorAll('a')).forEach((elm) => {
  if (!elm.href.includes(BASE_URL)) {
    elm.setAttribute('target', '_blank');
  }
});
