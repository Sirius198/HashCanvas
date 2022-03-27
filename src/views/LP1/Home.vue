<template>
	<div class="bg-gray-200" :class="getMainClass">
		<!-- <navigation-bar /> -->
		<my-nav-bar />
		<hero-section />
		<exchange-section />
		<strategy-section />
		<subscribed-section />
		<newsletter-section />
		<footer-section />
	</div>
</template>

<script>
import { Component } from "vue-property-decorator";
import NavigationBar from "./../../components/LandingPages/NavigationBar.vue";
import HeroSection from "./../../components/LandingPages/HeroSection.vue";
import ExchangeSection from "@/components/LandingPages/ExchangeSection.vue";
import StrategySection from "@/components/LandingPages/StrategySection.vue";
import SubscribedSection from "@/components/LandingPages/SubscribedSection.vue";
import NewsletterSection from "@/components/LandingPages/NewsletterSection.vue";
import FooterSection from "@/components/LandingPages/FooterSection.vue";
import { mixins } from "vue-class-component";
import ResizeMixin from "../../layout/mixin/resize";
import { DeviceType } from "@/store/modules/app";
import MyNavBar from "@/components/LandingPages/MyNavBar.vue";

@Component({
	name: "Home",
	components: {
		NavigationBar,
		HeroSection,
		ExchangeSection,
		StrategySection,
		SubscribedSection,
		NewsletterSection,
		FooterSection,
		MyNavBar,
	},
})
export default class extends mixins(ResizeMixin) {
	get getMainClass() {
		return {
			mobile: this.device === DeviceType.Mobile,
		};
	}
}
</script>

<style lang="postcss">
@import "./../../../node_modules/sal.js/dist/sal.css";
body {
	font-family: "Poppins";
}
.desktop-container {
	max-width: 1200px;
	margin-right: auto;
	margin-left: auto;
}
.phil-white-button {
	@apply px-6 py-3 bg-white text-green-600 rounded-full font-bold hover:bg-gray-100 hover:shadow-md;
}

.section-title {
	text-align: center;
	font-size: 55px;
	line-height: 70px;
	color: #304156;
	margin-top: 0;
}
</style>