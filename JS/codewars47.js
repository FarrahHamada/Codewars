/* Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
// returns 'www.codewars.com'
removeUrlAnchor('www.codewars.com#about')

// returns 'www.codewars.com?page=1' 
removeUrlAnchor('www.codewars.com?page=1') */

function removeUrlAnchor(url){
  url = url.split('')
  for(let i = 0; i < url.length; i++){
    if(url[i] === '#'){
      url.splice(url.indexOf('#'), url.length)
    }
  }
  return url.join('')
}
