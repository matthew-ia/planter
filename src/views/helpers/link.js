module.exports.register = (handlebars) => {
  /**
   * Link Helper
   * @param {String} name page name the link refers to (a.k.a the page's unique string ID)
   * @param {String} text display text of the link
   * @param {String} url url for the link
   * @param {String} currentName the "current page" name
  */
  handlebars.registerHelper('link', (name, text, url, currentName) => {
    let result = '';
    let className = '';

    if (currentName === name) className = 'active';

    if (currentName !== 'externalLink') {
      result = `<a href="${url}" class="${className}">${text}</a>`;
    } else {
      result = `<a href="${url}" class="${className}" target="_blank">${text}</a>`;
    }
    
    return new handlebars.SafeString(result);
  });
}