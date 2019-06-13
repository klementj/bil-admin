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

    filters: {
        ConvertToDecimals: function(data) {
            const testnumber = ((data/100).toFixed(2)).replace(/[.]/g, ",")
            return  testnumber.replace( /\B(?=(\d{3})+(?!\d))/g, ".") + " kr" 
        }
    }
}
</script>

<style>

</style>
