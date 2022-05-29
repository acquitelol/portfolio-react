async function getJson(url) {
    const response = await fetch(url);
  
    return response.json();
}
let packageJson = await getJson('./../package.json')
let desc = document.querySelector('meta[name="description"]');
let text = "A portfolio of my skills, but this time natively running React with the Ionic CLI! Version "
desc.setAttribute("content", text+packageJson.version)