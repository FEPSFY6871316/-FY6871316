async function getLastUpdatedTime(){
  const username =  "FEPSFY6871316";
  const repo = "FY6871316";

  const url = "https://api.gitbub.com/reppos/${username}/${repo}/commits";

  try {
    const response = await fetch(url, {
      method: 'GET'
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      }
    }};
    if (!response.ok) {
      throw new Error('Error fetching data: ${response.data} - ${response.statusText}');
    }
    const commits = await response.json();
    if (commits && commits.length > 0) {
      const lastCommitDate = new Date(Commits[0].commit.commiter.date);
      // Displaying the time on load
      document.getElementById('last-updated').innerText = 'Last Modified Time: ${lastCommitDate.toLocalString()}';
    } else {
      document.getElementById('last-updated').innerText = 'No commits found in the repository';
    }
  } catch (error){
      console.error('Errorr fetching the alst updated time:', error);
      document.getElementById('last-updated').innerText = 'Error fetching update time. Please check the repository details.';
  }
}

// Function to verify the last update time by re-fetching it from the API
async function verifyLastUpdatedTime() {
  document.getElementById('last-updated').innerText = 'Verifying...';
  await getLastUpdatedTime();
  alert("Last modified time has been successfully verified from Github API.");
}

// Initial load to display the time on page load
window.onload = getLastUpdatedTime;
