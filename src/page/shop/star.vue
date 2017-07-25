<template>
    <div class="icon-star" :style="{width: fontSize*5 + 'px',fontSize:fontSize+'px'}">
        <i class="star" :style="{width: rate}"></i>
    </div>
</template>
<script>
export default {
	props:['rate','fontSize']	
}

</script>

<style lang='scss' scoped>
.icon-star{
	position: relative;
	&::before{
		content: "\e950\e950\e950\e950\e950";
		color: #ccc;
		line-height: 1;
	}
	.star{
		position: absolute;
		top: 0;
		left: 0;
		overflow: hidden;
		white-space: nowrap;
		&::before{
			content: "\e950\e950\e950\e950\e950";
            color: #ffc30c;           
		}
	}
}

</style>