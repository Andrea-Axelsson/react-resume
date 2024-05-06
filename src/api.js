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