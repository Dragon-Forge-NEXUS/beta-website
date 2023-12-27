const apiKey = process.env.youtube_api_key;

document.addEventListener('DOMContentLoaded', function() {
  // Uncomment and add YouTube API key for local dev.
  // var apiKey = '';

  // Find all elements with IDs that match the pattern "ci={channelID}"
  var channelElements = document.querySelectorAll('[id^="ci="]');

  // Extract channel IDs from the elements and store them in an array
  var channels = [];
  channelElements.forEach(function(element) {
    var channelId = element.id.split('=')[1]; // Extract the channel ID
    var channelName = element.getAttribute('data-channel-name'); // Optional: Extract channel name if needed
    channels.push({ name: channelName, id: channelId, spanId: element.id });
  });

  function updateSubscriberCount(channel) {
    var apiUrl =
      'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=' +
      channel.id +
      '&key=' +
      apiKey;

    fetch(apiUrl)
      .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('API Unavailable');
        }
      })
      .then(function(data) {
        var subscriberCount = data.items[0].statistics.subscriberCount;
        document.getElementById(channel.spanId).textContent = subscriberCount;
      })
      .catch(function(error) {
        if (error.message === 'API Unavailable') {
          document.getElementById(channel.spanId).textContent = 'API Unavailable';
        } else {
          console.log('Error:', error.message);
        }
      });
  }

  // Update the subscriber counts initially
  channels.forEach(function(channel) {
    updateSubscriberCount(channel);
  });
});

