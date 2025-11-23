(function(){
    const dailyLimit = parseInt(localStorage.getItem('dailyTimeLimit'));
    if(!dailyLimit) return; // user hasn't set a limit yet

    let timeSpent = parseInt(localStorage.getItem('timeSpentToday')) || 0;
    let alerted = false;

    setInterval(() => {
        timeSpent++;
        localStorage.setItem('timeSpentToday', timeSpent);

        if(timeSpent >= dailyLimit*60 && !alerted){
            alerted = true;
            alert("⏰ You’ve reached your daily usage limit! Please take a break.");
        }
    }, 1000);
})();
