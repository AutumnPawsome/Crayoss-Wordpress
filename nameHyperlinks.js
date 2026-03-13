/*vv SCRIPT FOR ADDING AUTOMATIC HYPERLINKS vv*/	
const targetElement = document.querySelector('.full-page'); 
const originalText = targetElement.innerHTML;
const keywordsObj = {
	Looey: {link: 'https://crayoss.com/passing-time/looey'},
	Yatta: {link: 'https://crayoss.com/passing-time/yatta'},
	Blot: {link: 'https://crayoss.com/passing-time/blot'},
	"Mr. Mousey": {link: 'https://crayoss.com/passing-time/mr-mousey'},
	Cooper: {link: 'https://crayoss.com/passing-time/cooper'},
	Dandy: {link: 'https://crayoss.com/passing-time/dandy'},
	Sprout: {link: 'https://crayoss.com/passing-time/sprout'},
	Shelly: {link: 'https://crayoss.com/passing-time/shelly'},
	Astro: {link: 'https://crayoss.com/passing-time/astro'},
	Vee: {link: 'https://crayoss.com/passing-time/vee'},
	Pebble: {link: 'https://crayoss.com/passing-time/pebble'},
  Stump: {link: 'https://crayoss.com/passing-time/stump'},
	Yoko: {link: 'https://crayoss.com/passing-time/yoko'},
	Winston: {link: 'https://crayoss.com/passing-time/winston'},
	Winny: {link: 'https://crayoss.com/passing-time/winny'},
	Paul: {link: 'https://crayoss.com/passing-time/paul'},
	Dyle: {link: 'https://crayoss.com/passing-time/dyle'},
	Michael: {link: 'https://crayoss.com/passing-time/michael'},
	Harvest: {link: 'https://crayoss.com/passing-time/harvest'},
	"Lord Jagger": {link: 'https://crayoss.com/passing-time/lord-jagger'},
	Cid: {link: 'https://crayoss.com/passing-time/cid'},
	Paris: {link: 'https://crayoss.com/passing-time/paris'},
  Vivian: {link: 'https://crayoss.com/passing-time/vivian'} 	
};
const keywords = Object.keys(keywordsObj);
  
for (let i = 0; i < keywords.length; i++) {
	// console.log(`${keyword}: ${linkURL}`);
    	const keyword = keywords[i];
    	const linkURL = keywordsObj[keywords[i]].link;
    	const link = document.createElement('a');
    	link.href = linkURL;
    	link.textContent = keyword; // Set the link text to the keyword
    	if (targetElement.textContent.includes(`${keyword}`) && linkURL !== window.location.href) {
   		targetElement.innerHTML = targetElement.innerHTML.replace(`${keyword}`, link.outerHTML);
    	}
  }
  /*^^ SCRIPT FOR ADDING AUTOMATIC HYPERLINKS ^^*/
