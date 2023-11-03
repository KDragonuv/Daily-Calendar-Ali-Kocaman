
$(function () {
    const dayjs = require('dayjs');
    const today = dayjs();
    const formattedDate = today.format('YYYY-MM-DD'); 
    console.log(`Today's date is: ${formattedDate}`);
    
  });
  