// Funktionen 'fetchRepos' utför ett asynkront API-anrop till GitHub för att hämta en användares repositories. Den använder en 'Authorization' header med en access token för att autentisera anropet och specifierar att svaret ska följa GitHub API v3 formatet. Om anropet lyckas, konverteras svaret till JSON och returneras. Vid fel loggas felet och en tom lista returneras.


const accessToken = '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'

  const headers = {
    'Authorization': `token ${accessToken}`,
    'Accept': 'application/vnd.github.v3+json'
  };
  
  export async function fetchRepos() {
    try {
      const response = await fetch('https://api.github.com/user/repos', { headers });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const repositories = await response.json();
      return repositories
  
    } catch (error) {
      console.error('Error fetching repositories:', error);
      return []
    }
  }