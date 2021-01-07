<template>
    <div class="main">
        <h1>Test</h1>
<!--         <SampleThree /> -->
        <p class='vue-1'>Sample1</p>
        <p class='vue-2'>Sample2</p>
        <p class='vue-3'>Sample3</p>
        <transition name='anime'>
            <p v-show="show">表示</p>
        </transition>
        <v-btn class='show-btn' @click='show = !show'>Show</v-btn>
    </div>
</template>

<script>
import SampleThree from '@/components/verification/SampleThree'
import TheHomeBackGround from '@/components/verification/TheHomeBackGround'

export default {
	components: {
        SampleThree,
        TheHomeBackGround,
	},
    data: () => ({
        show: false,
    }),
    methods: {
    }
}
</script>

<style lang="scss">

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
    		//content: sample();
    	}

    	&::after {
	    	//content: sample($array);
    	}
    }

    .show-btn {
        position: absolute;
        right: 0;
        bottom: 80px;
    }

    // [class^='anime'] {
    //     & {
    //         @include fade('anime');
    //         @include down('anime');
    //     }
    // }

    @include vue-animation($tran-name: 'anime', $anime-name: ('fade', 'down'));

</style>
