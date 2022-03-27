<template>
	<div class="navbar">
        <router-link to="#">
		    <img class="logo" src="../../assets/logo_light.svg" />
        </router-link>

		<div class="right-menu">
			<div class="navs">
				<router-link to="#">
					Product
				</router-link>

                <router-link to="#">
					Strategies
				</router-link>

                <router-link to="#">
					Roadmap
				</router-link>

                <router-link to="#">
					About
				</router-link>

                <router-link to="#">
					Contact
				</router-link>
			</div>

			<!-- <hc-button ori="left">Join Now</hc-button> -->
            <!-- <el-button @click="onJoin">Join Now</el-button> -->
			<h-c-button ori="left" type="primary">Join Now</h-c-button>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import HCButton from "../Common/HCButton.vue";

@Component({
    name: 'MyNavBar',
    components: {
        HCButton
    }
})

export default class extends Vue {

    onJoin() {
        console.log(this.$auth)
    }
}
</script>

<style lang="scss">
.navbar {
	background: #ffffff;
	box-shadow: 0px 5px 37px rgba(0, 0, 0, 0.08);
	border-radius: 15px 15px 15px 50px;
	margin: 40px 100px;

	.logo {
		padding: 24px;
	}

	.right-menu {
		float: right;
		height: 100%;
        line-height: 108px;
        padding-right: 24px;

        .navs {
            display: inline-block;
			margin-right: 20px;

            a {
                display: inline-block;
                height: 100%;
                margin: 0 20px;

                &:hover {
                    color: #1890ff;
                }
            }
        }
	}
}
</style>