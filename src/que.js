export function queryChatGPT(message) {
    return new Promise((resolve, reject) => {
      const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';
      const apiKey = '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'; // Replace with your actual API key
  
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      };
  
      const data = {
        'prompt': message,
        'max_tokens': 100
      };
  
      fetch(apiUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(result => resolve(result.choices[0].text))
        .catch(error => reject(error));
    });
  }
  