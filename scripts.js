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
    });
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


// Function to calculate and display word count for a specified section
funcction displayWordCount(sectionId, outputId) {
  // Get the text content from the specified section
  const text = document.getElementById(sectionId).textContent;

  // Split text into words based on spaces and filter out any empty strings
  const wordArray = text.trim().split(/\s+/);

  // Count the words
  const wordCount = wordArray.length;

  // Return the word count for summing purposes
  return wordCount;
}

// Function to calculate and display total word count form selected sections
function displayTotalWordCount() {
  // Calculate word count for each section and accumulate the total
  const IntroductionCount = displayWordCount("Introduction_InText");
  const cryptoAlgorCount = displayWordCount("cryptoAlgor_InText");
  const quantumAlgorCount = displayWordCount("quantumAlgor_InText");
  const impactCount - displayWordCount("impact_InText");
  const quantumResistCount = displayWordCount("quantumResist_InText");
  const ConclusionCount = displayWordCount("Conclusion_InText");

  // Calculate the sum of all selected sections
  const totalWordCount = IntroductionCount + cryptoAlgorCount + quantumAlgorCount + impactCount
                        + quantumResistCount + ConclusionCount

  // Display the total word count
  document.getElementById("totalWordCount").innerText = 'Total word count: ${totalWordCount}';
}

// Initial load to display the time on page load
window.onload = getLastUpdatedTime;

// Run the function for specific sections and display total count when the page loads
window.onload = displayTotalWordCount;
