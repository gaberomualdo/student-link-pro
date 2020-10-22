/* copied snippets (start) */
function titleCase(string) {
  var sentence = string.toLowerCase().split(' ');
  for (var i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  return sentence.join(' ');
}
/* copied snippets (end) */

const BASE_SUBSTR = 'bu.edu/link/bin/uiscgi_studentlink.pl';
const BASE_URL = `http://${BASE_SUBSTR}`;
const LOGO_TOP_URL = 'https://www.bu.edu/link/student/images/bu_home.gif';
const LOGO_BOTTOM_URL = 'https://www.bu.edu/link/student/images/logo.gif';

const evaluateCamelCase = (x) => {
  let r = '';
  for (let i = 0; i < x.length; i++) {
    r += x[i] === x[i].toLowerCase() ? '' : ' ';
    r += x[i];
  }
  return r.trim();
};
const asTitle = (x) => {
  return titleCase(evaluateCamelCase(x));
};

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

const gabrielEntersTheChat = () => {
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
    if (!footer) {
      return;
    }
    footer.classList.add('with-links');
    footer.innerHTML = footer.querySelector('font').innerHTML;
    footer.innerHTML = '<p>' + footer.innerHTML.split('<br>').join('</p><p>') + '</p>';
  })();

  // links
  Array.from(document.querySelectorAll('a')).forEach((elm) => {
    if (!elm.href.includes(BASE_SUBSTR)) {
      elm.setAttribute('target', '_blank');
    }
  });

  let currentTabObj = undefined;

  // navigation bar
  (() => {
    const nav = document.querySelector('body > table:first-child');
    console.log(nav);
    if (nav) {
      document.body.classList.add('has-nav');

      // get nav links
      const navLinks = nav.querySelectorAll('tr:nth-child(2) > td td');

      let links = [];

      const linkColors = [
        '#e67e22', // orange
        '#6084a7', // gray
        '#27ae60', // green
        '#8e44ad', // purple
        '#0abde3', // cyan
        '#ff9f43', // yellow
        '#c0392b', // red
        '#2188ff', // blue
      ];

      navLinks.forEach((linkElm) => {
        const imageAlt = linkElm.querySelector('img').getAttribute('alt');
        if (imageAlt.includes('tab empty')) {
          // current tab
          const currentTabName = document.querySelector('body > table:nth-child(2) > tbody > tr:first-child > td > img').getAttribute('alt');
          document.body.setAttribute('style', '--tab-color: ' + linkColors[links.length % linkColors.length]);

          currentTabObj = {
            name: asTitle(currentTabName),
            url: '',
            currentTab: true,
          };
          links.push(currentTabObj);
        } else if (imageAlt.includes('Student Link')) {
          // ignore this tab, it literally just goes back to home (same thing as logo link) lol
        } else {
          const linkURL = linkElm.querySelector('a').href;
          links.push({
            name: asTitle(imageAlt),
            url: linkURL,
            currentTab: false,
          });
        }
      });

      // create logo
      const logoHTML = `
      <div class='logo'>
        <a href='${BASE_URL}' class='image'>
          <img src=${LOGO_TOP_URL} class='top' />
          <img src=${LOGO_BOTTOM_URL} class='bottom' />
        </a>
      </div>`;

      // create meta area
      let metaInnerHTML = '';

      (() => {
        const logoutBtn = document.querySelector('body > table:first-child > tbody > tr:first-child > td:nth-child(2) > a');
        console.log(logoutBtn);
        if (logoutBtn) {
          metaInnerHTML += `<a class='badge' href='${logoutBtn.href}'>Log Out</a>`;
        }
      })();

      // set final nav HTML with logo and links
      nav.outerHTML = `
      <div class='nav'>
        <div class='nav-inner'>
          ${logoHTML}
          <div class='meta'>${metaInnerHTML}</div>
          <div class='links'>
            ${links
              .map((link, i) => `<a ${link.url.length > 0 ? `href=${link.url}` : ''} active='${link.currentTab ? 'true' : 'false'}'>${link.name}</a>`)
              .join('')}
          </div>
        </div>
      </div>
      `;
    }
  })();

  // index list styles
  if (currentTabObj) {
    document.body.classList.add('is-list-page');
    const listBlock = document.querySelector('body > table');
    listBlock.classList.add('list-block');
    listBlock.classList.add('with-links');
    listBlock.innerHTML = `${listBlock.innerHTML.replace(/&nbsp; &nbsp;/g, '<div class="margin"></div>')}`;
    Array.from(document.querySelectorAll('body > table a')).forEach((elm) => {
      if (!elm.href.includes(BASE_SUBSTR)) {
        elm.classList.add('external-link');
      }
      elm.outerHTML = `<li>${elm.outerHTML}</li>`;
    });

    const listBlockTitleElm = document.querySelector('body > table > tbody > tr:first-child > td');
    const listBlockTitle = asTitle(listBlockTitleElm.querySelector('img').getAttribute('alt'));
    listBlockTitleElm.innerHTML = `<h1 class='list-block-title'>${listBlockTitle}</h1>`;
  }
};
gabrielEntersTheChat();
