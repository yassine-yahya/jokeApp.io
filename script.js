async function getJoke() {
    document.querySelector('.spinner').style.display = 'block';
    try {
      const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
  
      const data = await response.json();
      
      return data;
    } catch (error) {
      console.error("Error fetching joke:", error);
      throw error;
    }finally {
        
        document.querySelector('.spinner').style.display = 'none';
      }
    }
    
   
  
  document.addEventListener("DOMContentLoaded", async () => {
    try {
      const joke = await getJoke();
      console.log(joke, "<--- joke");
      document.getElementById("joke").textContent = joke.joke;
    } catch (error) {
      console.error("Error:", error);
    }
  });

  
  document.getElementById("getNewJokeButton").addEventListener("click", async () => {
    try {
      const joke = await getJoke();
      console.log(joke, "<--- joke");
      document.getElementById("joke").textContent = joke.joke;
    } catch (error) {
      console.error("Error:", error);
    }
  }
 );


document.querySelector('.spinner').style.display = 'block';



