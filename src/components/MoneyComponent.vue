<template>
    <span>
        {{price | ConvertToDecimals}}
    </span>
</template>

<script>
export default {

    props: {
        price: Number
    },
    // using a filter method to filter a number and using the function beneth
    filters: {
        ConvertToDecimals: function(data) {
            // using a regex to add a , before the last two numbers
            const testnumber = ((data/100).toFixed(2)).replace(/[.]/g, ",")
            // using a regex to put a . at every fourth spot, so long as there are three numbers next to eachother
            return  testnumber.replace( /\B(?=(\d{3})+(?!\d))/g, ".") + " kr" 
        }
    }
}
</script>

<style>

</style>
