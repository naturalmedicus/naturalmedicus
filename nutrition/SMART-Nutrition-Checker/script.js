$(document).ready(function() {
  // array of possible suggestions
  var suggestions = [
    "Iron",
    "Vitamin C",
    "Vitamin D",
    "Calcium",
    "Magnesium"
  ];

  // listen for user input
  $('#searchField').on('input', function() {
    var input = $(this).val();
    var suggestionList = '';
    
    // iterate over suggestions and build list of matches
    for (var i = 0; i < suggestions.length; i++) {
      if (suggestions[i].toLowerCase().indexOf(input.toLowerCase()) > -1) {
        suggestionList += '<div class="suggestion">' + suggestions[i] + '</div>';
      }
    }
    
    // display suggestions
    $('#suggestionBox').html(suggestionList);
  });
  
  // handle click on suggestion
  $(document).on('click', '.suggestion', function() {
    var suggestion = $(this).text();
    $('#searchField').val(suggestion);
    $('#suggestionBox').html('');
  });
});
