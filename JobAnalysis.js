/*async function readJsonFile(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.onload = event => resolve(JSON.parse(event.target.result))
      fileReader.onerror = error => reject(error)
      fileReader.readAsText(file)
    })
  }
  
const object = await readJsonFile(file)*/

/*const fileSelector = document.querySelector('#file_selector');

fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files;
    console.log(fileList);
  });*/

const data = JSON.parse("upwork_jobs.json")
console.log(data[0]);
