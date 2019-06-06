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
            const replace = ((data/100).toFixed(2)).replace(/[.]/g, ",")
            return  replace + " kr" 
        }
    }
}
</script>

<style>

</style>
