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
            const test = testnumber.toString()
            const testing = test.exec(/..[0-9]/g)

            return  testing + " kr" 
        }
    }
}
</script>

<style>

</style>
