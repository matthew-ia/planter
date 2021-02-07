module.exports.register = (handlebars) => {
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