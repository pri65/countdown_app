const endDate = "1 Jan 2023 12:00 AM"; 

document.getElementById("end-date").innerText=endDate;

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    //console.log(end,now)

    //our difference is in milliseconds so we converted it into seconds by dividing it by 1000 
    const diff = (end-now)/1000;

    //convert into days 

}

clock()


// 1 day = 24hrs
// i hour = 60mins
// 60 mins = 3600sec
