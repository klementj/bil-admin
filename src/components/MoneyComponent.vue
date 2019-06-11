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
            const testarr = testnumber.split("")
            const initialarr = testarr.length
            
            // for(let i = 1; i < (initialarr  - 5); i++){
                // if(i%3 == 0){                    
                    
                // }
                // switch(i){
                //     case i%3 === 0:
                //         testarr.splice(i+1,0, ",")
                //         break;
                // }
            // }
            // const test = testnumber.toString()
            // const testing = test.exec(/..[0-9]/g)
            console.log()
            return  testnumber.replace( /\B(?=(\d{3})+(?!\d))/g, ".") + " kr" 
        }
    }
}
</script>

<style>

</style>
