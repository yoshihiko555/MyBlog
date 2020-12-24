<template>
	<figure class='card-wrap'>
		<slot name='img' />
		<figcaption class='card-text-wrap'>
			<p class='card-title'><slot name='title'>Title</slot></p>
			<p class='card-desc'><slot name='description'>Description</slot></p>
            <a :href='url' target='blank' />
		</figcaption>
	</figure>
</template>

<script>
export default {
	props: {
		url: {
			type: String,
			default: 'https://ics.media/tutorial-three/points/',
		}
	},
    data: () => ({
    }),
    methods: {
    }
}
</script>

<style lang="scss" scoped>
	.card-wrap {
		position: relative;
        overflow: hidden;
        max-height: 400px;
        width: 100%;
        background: $color-theme;
        text-align: center;
        cursor: pointer;

        &:hover {
            img {
                opacity: .4;
            }
            .card-text-wrap {
                .card-title, .card-desc {
                    opacity: 1;
                    -webkit-transform: translate3d(0,0,0);
                    transform: translate3d(0,0,0);
                }

                &::before, &::after {
                    opacity: 1;
                    -webkit-transform: scale(1);
                    transform: scale(1);
                }
            }
        }

        img {
            position: relative;
            width: 100%;
            height: 100%;
            display: block;
            opacity: .7;
            -webkit-transition: opacity 0.35s;
            transition: opacity 0.35s;
        }

        .card-text-wrap {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            padding: 2em;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;

            > p {
                color: #fff;
                font-size: 1.25em;
            }

            .card-title {
                margin: 0;
                padding-top: 35%;
                -webkit-transition: -webkit-transform 0.35s;
                transition: transform 0.35s;
                -webkit-transform: translate3d(0,-20px,0);
                transform: translate3d(0,-20px,0);
            }

            .card-desc {
                margin: 0;
                padding: 20px 2.5em;
                opacity: 0;
                -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
                transition: opacity 0.35s, transform 0.35s;
                -webkit-transform: translate3d(0,20px,0);
                transform: translate3d(0,20px,0);
                letter-spacing: 1px;
                font-size: 68.5%;
            }

            > a {
                z-index: 1000;
                text-indent: 200%;
                white-space: nowrap;
                font-size: 0;
                opacity: 0;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }

            &::before, &::after {
                pointer-events: none;
                position: absolute;
                top: 30px;
                right: 30px;
                bottom: 30px;
                left: 30px;
                content: '';
                opacity: 0;
                -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
                transition: opacity 0.45s, transform 0.35s;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
            }

            &::before {
                border-top: 1px solid #fff;
                border-bottom: 1px solid #fff;
                -webkit-transform: scale(0,1);
                transform: scale(0,1);
            }

            &::after {
                border-right: 1px solid #fff;
                border-left: 1px solid #fff;
                -webkit-transform: scale(1,0);
                transform: scale(1,0);
            }
        }
    }
</style>
