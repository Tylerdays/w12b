function randomAPI(){
    axios.request({
        url : "http://www.boredapi.com/api/activity/"
    }).then(randonSuccess).catch(randomFailure);
}

function randonSuccess(response){
        let data = response.data;
        console.log(response);
        document.body.insertAdjacentHTML(`beforeend`, `<h2>New activity - ${data.activity}</h2>`);
}

function randomFailure(error) {
    console.log(error);
    
}

document.getElementById(`getActivity`).addEventListener(`click`, randomAPI)