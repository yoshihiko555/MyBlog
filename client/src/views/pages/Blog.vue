<template>
    <div class="main">
<!--         <h1>Blog</h1> -->
<!--         <TheHomeBackGround /> -->
<!--         <div class="sample"> -->
<!--             <img class='img' src="@/static/img/about_header.jpg" alt=""> -->
<!--         </div> -->
<!--         <p class='sample2'>Sass Test : </p> -->
        <p class='vue-1'>Sample1</p>
        <p class='vue-2'>Sample2</p>
        <p class='vue-3'>Sample3</p>
    </div>
</template>

<script>
import TheHomeBackGround from '@/components/verification/TheHomeBackGround'
export default {
	components: {
		TheHomeBackGround,
	},
    data: () => ({
    }),
    methods: {
    }
}
</script>

<style lang="scss" scoped>

	[class^='vue'] {
		font-size: 22px;
	}
    .sample {
        width: 300px;
        height: 300px;

        img {
            width: 100%;
            height: 100%;
            transition: all .2s;

            &:hover {
                opacity: .5;
            }
        }
    }

    .sample2 {

    	$map: (
    		a: 'A',
    		b: 'B',
    		c: 'C'
    	);

    	$map2: (
    		d: 'D',
    		e: 'E',
    		f: 'F',
    	);

    	$array: 'Hello' 'World';

    	$array2: ($map, $map2);

    	&::before {
    		content: sample();
    	}

    	&::after {
	    	content: sample($array);
    	}
    }

</style>
