function main() {

  var mHeading = '#mainHeading';
  var mSubHeading = '#mainSubHeading';
  var exploreBtn = '#exploreButton';

  var headingElements = [mHeading, mSubHeading, exploreBtn];

  for (var i = 0; i <= headingElements.length; i++) {
    $(headingElements[i]).fadeOut('fast');
    $(headingElements[i]).fadeIn('slow');

    console.log('fade successful');
  }
}

main()
