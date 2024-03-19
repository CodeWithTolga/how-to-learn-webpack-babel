let fullname = "Tolga Aymaz";
console.log(fullname);

const sayHello = () => {
   console.log("Hello There");
}
sayHello();


// Asenkron bir işlev tanımla
async function fetchData() {
    // await kullanarak bir asenkron işlemi beklet
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    return data;
  }
  
  // fetchData işlevini çağır ve sonucu yazdır
  fetchData().then(data => console.log(data)).catch(error => console.error(error));
  