import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
  <h2>Learning String Methods</h2>

  <button type="button" onClick={()=>{
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    console.log(alphabets.length);
    console.log(alphabets[9]);
    console.log(alphabets.at(8));
    console.log(alphabets.charAt(13))
  }}>length</button>

  <button type="button" onClick={()=>{
  let quote = "Hard work beats talent when talent doesn’t work hard";
  console.log(quote.toUpperCase());
  console.log(quote.toLowerCase());
  }}>toUpperCase/toLowerCase</button>

  <button type="button" onClick={()=>{
   let fn = "Chethan";
   let ln = "Koduri";
   let fullName = fn.concat(ln);
   console.log(fullName)
   console.log(`${fn} ${ln}`);
  }}>concat</button>

  <button type="button" onClick={()=>{
  let name = "     Hello BRN!   "
  console.log(`--->${name.trim()}--->`);
  console.log(`--->${name.trimStart()}--->`);
  console.log(`--->${name.trimEnd()}--->`);

  }}>trim/trimStart/trimEnd</button>

  <button type="button" onClick={()=>{
   let name = "God Is Great"
   console.log(name.length)
   console.log(name.padStart(40,"G" ))
   console.log(name.padEnd(30,"T" ))
  }}>padStart/padEnd</button>

  <button type="button" onClick={()=>{
let name = "All is well, ";
console.log(name.repeat (5))
  }}>repeat</button>

  <button type="button" onClick={()=>{
  let pledge = "India is my country and all Indians are my brothers and sisters"
  console.log(pledge.replace("India","Bharat"))
  console.log(pledge.replaceAll("India","Bharat"))
  }}>replace/replaceAll</button>

  <button type="button" onClick={()=>{
     let pledge = "India is my country and all Indians are my brothers and sisters"
    console.log(pledge.split(","))
  }}>split</button>
   
  <button type="button" onClick={()=>{
      let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     console.log(alphabets.slice(9,19));
     console.log(alphabets.substring(9,19));
     console.log(alphabets.substr(9,19));
  }}>slice/subString/subStr</button>

 <button type="button" onClick={()=>{
   //console.log (String.fromCharCode(300));
   for(let i=300; i<500;i++){
   console.log(String.fromCharCode(i));
  }
  let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  console.log(alphabets.charCodeAt());
  for(let i=0; i<alphabets.length;i++){
     console.log(alphabets.charCodeAt(i));
  }
  let వయసు = 30;
  console.log(వయసు)
  }}>charCodeAt</button>

  <button type="button" onClick={()=>{
    let name = "Shri.Narendra Modi Garu."
    console.log(name.startsWith("Shri."))
    console.log(name.endsWith("Garu."))
  }}>startsWith/endsWith</button>

  <button type="button" onClick={()=>{
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log(alphabets.indexOf("G"));
    console.log(alphabets.lastIndexOf("G"));
  }}>indexOf/lastIndexOf</button>

    <button type="button" onClick={()=>{
      let text = "An Apple a Day Keeps Doctor Away";
      let position = text.search(/Doctor/);
      console.log(position)
    }}>search</button>

    </div>
  );
}

export default App;
