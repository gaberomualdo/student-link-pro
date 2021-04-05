/* copied snippets (start) */
function titleCase(string) {
  var sentence = string.toLowerCase().split(' ');
  for (var i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  return sentence.join(' ');
}
/* copied snippets (end) */
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

const EXTENSION_NAME = 'Student Link Pro';
const EXTENSION_CREATOR = 'Gabriel Romualdo';
const EXTENSION_URL = 'https://studentlinkpro.web.app/';
const PAGE_NAME = 'Student Link';
const PAGE_TITLE_SEPARATOR = ' – ';

const BASE_SUBSTR = 'bu.edu/link/bin/uiscgi_studentlink.pl';
const BASE_URL = `http://${BASE_SUBSTR}`;
const LOGO_TOP_URL = 'https://www.bu.edu/link/student/images/bu_home.gif';
const LOGO_BOTTOM_URL = 'https://www.bu.edu/link/student/images/logo.gif';

const pageIcons = {
  Academics: `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 24 24" clip-rule="evenodd"><path d="M22 22h1v2h-22v-2h1v-8h20v8zm-7-5h-6v6h2v-5h2v5h2v-6zm-9 3h-2v2h2v-2zm14 0h-2v2h2v-2zm-14-4h-2v2h2v-2zm14 0h-2v2h2v-2zm4-3h-24l3-7h3.943l-2.601 2.229.66.771 5.998-5.143v-3.857h5l-1 1.491 1 1.509h-4l6.999 6 .661-.771-2.602-2.229h3.942l3 7zm-12-6.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm0 2.5h1v.8h-1.763v-1.8h.763v1z"/></svg>`,
  'Degree Advice': `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" viewBox="0 0 24 24" clip-rule="evenodd"><path d="M24 21h-3l1-3h1l1 3zm-12.976-4.543l8.976-4.575v6.118c-1.007 2.041-5.607 3-8.5 3-3.175 0-7.389-.994-8.5-3v-6.614l8.024 5.071zm11.976.543h-1v-7.26l-10.923 5.568-11.077-7 12-5.308 11 6.231v7.769z"/></svg>`,
  Money: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.324 7.021l.154.345c.237-.041.52-.055.847-.025l.133.577c-.257-.032-.53-.062-.771-.012l-.092.023c-.464.123-.316.565.098.672.682.158 1.494.208 1.815.922.258.578-.041.973-.541 1.163l.154.346-.325.068-.147-.329c-.338.061-.725.053-1.08-.041l-.1-.584c.294.046.658.087.938.03l.186-.06c.333-.165.231-.582-.264-.681-.367-.083-1.342-.021-1.705-.831-.205-.458-.053-.936.535-1.154l-.161-.361.326-.068m3.82 1.614c-.706-1.648-2.681-2.751-4.409-2.463-1.728.288-2.557 1.857-1.85 3.506.746 1.739 2.888 2.853 4.651 2.414 1.562-.388 2.28-1.887 1.608-3.457zm4.05-5.635l3.766 8.233c-5.433 4.223-12.654-.038-17.951 4.461l-3.766-8.233c4.944-4.779 11.773-.45 17.951-4.461zm3.806 12.014c-6.857 3.939-12.399-1.424-19.5 5.986l-4.5-9.964 1.402-1.462 3.807 8.401-.002.008c7.445-5.592 11.195-1.175 18.109-4.561.294.647.565 1.33.684 1.592z"/></svg>`,
  Personal: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"/></svg>`,
  Work: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.081 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h10.483l.704-3h1.615l.704 3h10.483l.005-1.241c.001-2.52-.198-3.975-3.177-4.663zm-8.231 1.904h-1.164l-.91-2h2.994l-.92 2z"/></svg>`,
  Food: `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11.415 12.393l1.868-2.289c.425-.544.224-.988-.055-2.165-.205-.871-.044-1.854.572-2.5 1.761-1.844 5.343-5.439 5.343-5.439l.472.37-3.693 4.728.79.617 3.87-4.59.479.373-3.558 4.835.79.618 3.885-4.58.443.347-3.538 4.85.791.617 3.693-4.728.433.338s-2.55 4.36-3.898 6.535c-.479.771-1.425 1.161-2.334 1.167-1.211.007-1.685-.089-2.117.464l-2.281 2.795c2.445 2.962 4.559 5.531 5.573 6.829.771.987.065 2.421-1.198 2.421-.42 0-.853-.171-1.167-.573l-8.36-10.072s-.926.719-1.944 1.518c-3.172-5.184-6.267-11.661-6.267-13.955 0-.128-.034-.924.732-.924.245 0 .493.116.674.344.509.642 5.415 6.513 10.002 12.049m-2.952 3.617l1.953 2.365-4.115 5.055c-.295.378-.736.576-1.182.576-1.198 0-1.991-1.402-1.189-2.428l4.533-5.568z" fill="#030405"/></svg>`,
  Basics: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.586 10.461l-10.05 10.075c-1.95 1.949-5.122 1.949-7.071 0s-1.95-5.122 0-7.072l10.628-10.585c1.17-1.17 3.073-1.17 4.243 0 1.169 1.17 1.17 3.072 0 4.242l-8.507 8.464c-.39.39-1.024.39-1.414 0s-.39-1.024 0-1.414l7.093-7.05-1.415-1.414-7.093 7.049c-1.172 1.172-1.171 3.073 0 4.244s3.071 1.171 4.242 0l8.507-8.464c.977-.977 1.464-2.256 1.464-3.536 0-2.769-2.246-4.999-5-4.999-1.28 0-2.559.488-3.536 1.465l-10.627 10.583c-1.366 1.368-2.05 3.159-2.05 4.951 0 3.863 3.13 7 7 7 1.792 0 3.583-.684 4.95-2.05l10.05-10.075-1.414-1.414z"/></svg>`,
  Index: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 6h-8v-6h8v6zm-10 12h-6v6h6v-6zm18 0h-6v6h6v-6zm-11-7v-3h-2v3h-9v5h2v-3h7v3h2v-3h7v3h2v-5h-9zm2 7h-6v6h6v-6z"/></svg>`,
};

const pageImages = {
  Academics: 'https://images.pexels.com/photos/3494806/pexels-photo-3494806.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'Degree Advice': 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  Money: 'https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  Personal: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  Work: 'https://images.pexels.com/photos/684314/pexels-photo-684314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  Food: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  Basics: 'https://images.pexels.com/photos/164686/pexels-photo-164686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  Index: 'https://images.pexels.com/photos/357514/pexels-photo-357514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
};
const pageLinks = {
  Academics: 'https://www.bu.edu/link/bin/uiscgi_studentlink.pl/1617381142?ModuleName=menu.pl&amp;NewMenu=Academics',
  'Degree Advice': 'https://www.bu.edu/link/bin/uiscgi_studentlink.pl/1617380721?ModuleName=menu.pl&amp;NewMenu=DegreeAdvice',
  Money: 'https://www.bu.edu/link/bin/uiscgi_studentlink.pl/1617380721?ModuleName=menu.pl&amp;NewMenu=Money',
  Personal: 'https://www.bu.edu/link/bin/uiscgi_studentlink.pl/1617380721?ModuleName=menu.pl&amp;NewMenu=Personal',
  Work: 'https://www.bu.edu/link/bin/uiscgi_studentlink.pl/1617380721?ModuleName=menu.pl&amp;NewMenu=Work',
  Food: 'https://www.bu.edu/link/bin/uiscgi_studentlink.pl/1617380721?ModuleName=menu.pl&amp;NewMenu=Food',
  Basics: 'https://www.bu.edu/link/bin/uiscgi_studentlink.pl/1617380721?ModuleName=menu.pl&amp;NewMenu=Basics',
  Index: 'https://www.bu.edu/link/bin/uiscgi_studentlink.pl/1617380721?ModuleName=menu.pl&amp;NewMenu=Index',
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
    `<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge">`
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
    footer.querySelector('p:nth-child(2)').innerHTML = `
    <a href="http://bu.edu/link/bin/uiscgi_studentlink.pl" style="border: none;"><img src="https://www.bu.edu/home/img/masterplate112x50-retina.png" alt="BU Logo" /><img src="https://www.bu.edu/link/student/images/logo.gif" alt="Student Link Logo" /></a>
    `;
  })();

  // links
  Array.from(document.querySelectorAll('a')).forEach((elm) => {
    if (!elm.href.includes(BASE_SUBSTR)) {
      elm.setAttribute('target', '_blank');
    }
  });

  let currentTabObj = undefined;

  let isHomepage = false;

  // navigation bar
  (() => {
    const nav = document.querySelector('body > table:first-child');
    document.body.classList.add('has-nav');
    if (nav) {
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
        '#2188ff', // blue --> "Gabriel blue"
      ];

      navLinks.forEach((linkElm) => {
        const imageAlt = linkElm.querySelector('img').getAttribute('alt');
        if (imageAlt.includes('tab empty')) {
          // current tab
          const currentTabName = document.querySelector('body > table:nth-child(2) > tbody > tr:first-child > td > img').getAttribute('alt');
          document.body.setAttribute('style', `--tab-color: ${/* linkColors[links.length % linkColors.length] */ 'var(--theme)'}`);

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
        if (logoutBtn) {
          metaInnerHTML += `<a class='badge' href='${logoutBtn.href}'>&larr; Log Out</a>`;
        }
      })();

      // set final nav HTML with logo and links
      nav.outerHTML = `
      <div class='nav'>
        <div class='nav-inner'>
          ${logoHTML}
          <div class='meta ${metaInnerHTML === '' ? 'disabled' : ''}'>${metaInnerHTML}</div>
          <div class='links'>
            ${links
              .map((link, i) => `<a ${link.url.length > 0 ? `href=${link.url}` : ''} active='${link.currentTab ? 'true' : 'false'}'>${link.name}</a>`)
              .join('')}
          </div>
        </div>
      </div>
      `;
    } else {
      // homepage
      isHomepage = true;
      document.querySelector('body > center:first-child > table:first-child').outerHTML = `
      <div class="nav">
        <div class="nav-inner">    
          <div class="logo">
            <a href="http://bu.edu/link/bin/uiscgi_studentlink.pl" class="image">
              <img src="https://www.bu.edu/link/student/images/bu_home.gif" class="top">
              <img src="https://www.bu.edu/link/student/images/logo.gif" class="bottom">
            </a>
          </div>
          <div class="meta disabled"></div>
          <div class="links">
            <a href="https://www.bu.edu/link/bin/uiscgi_studentlink.pl/1617381142?ModuleName=menu.pl&NewMenu=Academics" active="false">Academics</a><a href="https://www.bu.edu/link/bin/uiscgi_studentlink.pl/1617380721?ModuleName=menu.pl&amp;NewMenu=DegreeAdvice" active="false">Degree Advice</a><a href="https://www.bu.edu/link/bin/uiscgi_studentlink.pl/1617380721?ModuleName=menu.pl&amp;NewMenu=Money" active="false">Money</a><a href="https://www.bu.edu/link/bin/uiscgi_studentlink.pl/1617380721?ModuleName=menu.pl&amp;NewMenu=Personal" active="false">Personal</a><a href="https://www.bu.edu/link/bin/uiscgi_studentlink.pl/1617380721?ModuleName=menu.pl&amp;NewMenu=Work" active="false">Work</a><a href="https://www.bu.edu/link/bin/uiscgi_studentlink.pl/1617380721?ModuleName=menu.pl&amp;NewMenu=Food" active="false">Food</a><a href="https://www.bu.edu/link/bin/uiscgi_studentlink.pl/1617380721?ModuleName=menu.pl&amp;NewMenu=Basics" active="false">Basics</a><a href="https://www.bu.edu/link/bin/uiscgi_studentlink.pl/1617380721?ModuleName=menu.pl&amp;NewMenu=Index" active="false">Index</a>
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

    // add icon
    const listBlockTitleElm = document.querySelector('body > table > tbody > tr:first-child > td');
    const listBlockTitle = asTitle(listBlockTitleElm.querySelector('img').getAttribute('alt'));
    listBlockTitleElm.innerHTML = `<h1 class='list-block-title'>${listBlockTitle}</h1>`;

    if (pageIcons[listBlockTitle]) {
      const icon = document.createElement('div');
      icon.classList.add('list-block-icon');
      icon.innerHTML = pageIcons[listBlockTitle];
      listBlock.appendChild(icon);
    }
  }

  if (isHomepage) {
    // remove everything except for navigation bar and footer
    document.querySelectorAll('body > center:first-child > *').forEach((e) => {
      if (!e.classList.contains('nav')) {
        e.outerHTML = '';
      }
    });
    document.querySelectorAll('body > *:not(:first-child):not(.footer)').forEach((e) => {
      e.outerHTML = '';
    });

    document.querySelector('body > center:first-child').innerHTML += `<div class="homepage-main-links"></div>`;

    Object.keys(pageLinks).forEach((key) => {
      const val = pageLinks[key];
      document.querySelector('body > center:first-child > .homepage-main-links').innerHTML += `
      <a href="${val}" class="main-link"><img src="${pageImages[key]}" alt="${key}" /><span>${key}</span></a>
      `;
    });
  }

  // add footer message
  document.querySelector(
    '.footer > p:first-child'
  ).innerHTML += `<br />New UI added by <a target="_blank" href="${EXTENSION_URL}">${EXTENSION_NAME}</a>.`;

  // update page title and favicon
  const defaultTitle = 'Student Link Menu';
  if (document.title === defaultTitle) {
    // check if page is active
    if (currentTabObj && currentTabObj.name) {
      document.title = `${currentTabObj.name}${PAGE_TITLE_SEPARATOR}${PAGE_NAME}`;
    } else {
      document.title = PAGE_NAME;
    }
  } else {
    const curPageName = document.title.trim();
    document.title = `${curPageName}${PAGE_TITLE_SEPARATOR}${PAGE_NAME}`;
  }
};
gabrielEntersTheChat();
