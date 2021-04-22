const carsDataBox = document.querySelector('#cars-data-box');
const carsInput = document.querySelector('#cars');

$.ajax({
    type: 'GET',
    url: '/cars-json/',
    success: function(response) {
        console.log(response);
        const carsData = response.data;
        carsData.map(item=>{
            const option = document.createElement('div');
            option.textContent = item.name;
            option.setAttribute('class', 'item');
            option.setAttribute('data-value', item.name);
            carsDataBox.appendChild(option);
        })
    },
    error: function(error){
        console.log(error);

    }
})

carsInput.addEventListener('change', (e)=>{
    console.log(e.target.value);
    const selectedCar = e.target.value;

    // $.ajax({
    //     type: 'GET',
    //     url: `/models-json/${selectedCar}/`,
    //     success: function(response) {
    //         console.log(response);
    //     },
    //     error: function(error) {
    //         console.log(error);
    //     }
    // })
})