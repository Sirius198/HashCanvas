<template>
	<div class="navbar">
		<router-link
			class="el-button--primary el-button--default right-menu-item"
			to="/hc"
		>
			<img
				class="logo-container"
				src="./../../assets/logo.png"
				alt="facebook icon"
				width="40"
				height="40"
			/>
		</router-link>
		<div class="right-menu">
			<!--          <el-button class="right-menu-item"> button</el-button>
          <el-badge
            :is-dot="true"
            class="right-menu-item"
          >
            <el-button
              style="padding: 8px 10px;"
              size="small"
              type="danger"
            >
             <svg-icon name="bug" />
            </el-button>
           </el-badge>

!-->
			<router-link
				class="el-button--primary el-button--default right-menu-item"
				to="/documentation/index"
			>
				Product
			</router-link>
			<router-link
				class="el-button--primary el-button--default right-menu-item"
				to="/documentation/index"
			>
				Strategies
			</router-link>
			<router-link
				class="el-button--primary el-button--default right-menu-item"
				to="/hc/product"
			>
				Roadmap
			</router-link>
			<router-link
				class="el-button--primary el-button--default right-menu-item"
				to="hc/contact"
			>
				Contact
			</router-link>
			<router-link
				class="el-button--primary el-button--default right-menu-item"
				to="/hc/about"
			>
				About
			</router-link>
			<lang-select class="right-menu-item hover-effect" />
			<router-link class="el-button--danger right-menu-item" to="/login">
				Login
			</router-link>
			<div v-if="!$auth.loading">
				<!-- show login when not authenticated -->
				<div v-if="!$auth.isAuthenticated" @click="login">
					<router-link
						class="el-button--danger right-menu-item"
						to=""
					>
						Log in
					</router-link>
				</div>
				<!-- show logout when authenticated -->
				<div v-if="$auth.isAuthenticated" @click="logout">
					<router-link
						class="el-button--danger right-menu-item"
						to=""
					>
						Log out
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Route } from "vue-router";
import { Dictionary } from "vue-router/types/router";
import LangSelect from "@/components/LangSelect/index.vue";
import Sticky from "@/components/Sticky/index.vue";

import PanThumb from "@/components/PanThumb/index.vue";
import MaterialInput from "@/components/MaterialInput/index.vue";
import Mallki from "@/components/TextHoverEffect/Mallki.vue";
import DropdownMenu from "@/components/DropdownMenu/index.vue";
import BackToTop from "@/components/BackToTop/index.vue";

import { AppModule } from "@/store/modules/app";
import { UserModule } from "@/store/modules/user";
import Breadcrumb from "@/components/Breadcrumb/index.vue";
import ErrorLog from "@/components/ErrorLog/index.vue";
import Hamburger from "@/components/Hamburger/index.vue";
import HeaderSearch from "@/components/HeaderSearch/index.vue";
import Screenfull from "@/components/Screenfull/index.vue";
import SizeSelect from "@/components/SizeSelect/index.vue";

@Component({
	name: "Navigation",
	components: {
		LangSelect,
		Sticky,
		DropdownMenu,
		MaterialInput,
		Mallki,
		PanThumb,
		BackToTop,
		Breadcrumb,
		ErrorLog,
		Hamburger,
		HeaderSearch,
		Screenfull,
		SizeSelect,
	},
})
export default class extends Vue {
	private activeName = "directly";
	private inputData =
		"https://github.com/Armour/vue-typescript-admin-template";

	login() {
		this.$auth.loginWithRedirect({});
	}

	// Log the user out
	logout1() {
		this.$auth.logout({
			returnTo: window.location.origin,
		});
	}

	data() {
		drawer: null;
		isXs: false;
		items: [
			["mdi-home-outline", "Home", "#hero"],
			["mdi-information-outline", "Sobre", "#features"],
			["mdi-download-box-outline", "Download", "#download"],
			["mdi-currency-usd", "Preços", "#pricing"],
			["mdi-email-outline", "Contatos", "#contact"]
		];
	}

	private myBackToTopStyle = {
		right: "50px",
		bottom: "50px",
		width: "40px",
		height: "40px",
		"border-radius": "4px",
		"line-height": "45px", // Please keep consistent with height to make it center vertically
		background: "#e7eaf1",
	};
	get sidebar() {
		return AppModule.sidebar;
	}

	get device() {
		return AppModule.device.toString();
	}

	get avatar() {
		return UserModule.avatar;
	}

	private toggleSideBar() {
		AppModule.ToggleSideBar(false);
	}

	private async logout() {
		await UserModule.LogOut();
		this.$router
			.push(`/login?redirect=${this.$route.fullPath}`)
			.catch((err) => {
				console.warn(err);
			});
	}
}
</script>

<style lang="postcss">
.active {
	@apply border-b-2 border-green-500 text-gray-900;
}
.nav-wrapper {
	@apply flex w-full py-4 items-center justify-between px-4 sm:px-6 md:px-10 lg:px-36;
}
.nav-item-wrapper {
	@apply flex cursor-pointer space-x-6 text-lg font-semibold items-center;
}
</style>

<style lang="scss" scoped>
.logo-container {
	line-height: 46px;
	height: 100%;
	float: left;
	padding: 5 5px;
	cursor: pointer;
	transition: background 0.3s;
	-webkit-tap-highlight-color: transparent;

	&:hover {
		background: rgba(0, 0, 0, 0.025);
	}
}

.navbar {
	height: 50px;
	overflow: hidden;
	position: relative;
	background: #fff;
	box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

	.hamburger-container {
		line-height: 46px;
		height: 100%;
		float: left;
		padding: 0 15px;
		cursor: pointer;
		transition: background 0.3s;
		-webkit-tap-highlight-color: transparent;

		&:hover {
			background: rgba(0, 0, 0, 0.025);
		}
	}

	.breadcrumb-container {
		float: left;
	}

	.errLog-container {
		display: inline-block;
		vertical-align: top;
	}

	.right-menu {
		float: right;
		height: 100%;
		line-height: 50px;

		&:focus {
			outline: none;
		}

		.right-menu-item {
			display: inline-block;
			padding: 0 8px;
			height: 100%;
			font-size: 12px;
			//      color: #5a5e66;
			vertical-align: text-bottom;

			&.hover-effect {
				cursor: pointer;
				transition: background 0.3s;

				&:hover {
					background: rgba(0, 0, 0, 0.025);
				}
			}
		}

		.avatar-container {
			margin-right: 30px;

			.avatar-wrapper {
				margin-top: 5px;
				position: relative;

				.user-avatar {
					cursor: pointer;
					width: 40px;
					height: 40px;
					border-radius: 10px;
				}

				.el-icon-caret-bottom {
					cursor: pointer;
					position: absolute;
					right: -20px;
					top: 25px;
					font-size: 12px;
				}
			}
		}
	}
}

@mixin colorBtn($color) {
	background: $color;

	&:hover {
		color: $color;

		&:before,
		&:after {
			background: $color;
		}
	}
}

.blue-btn {
	@include colorBtn($blue);
}

.light-blue-btn {
	@include colorBtn($light-blue);
}

.red-btn {
	@include colorBtn($red);
}

.pink-btn {
	@include colorBtn($pink);
}

.green-btn {
	@include colorBtn($green);
}

.tiffany-btn {
	@include colorBtn($tiffany);
}

.yellow-btn {
	@include colorBtn($yellow);
}

.pan-btn {
	font-size: 14px;
	color: #fff;
	padding: 14px 36px;
	border-radius: 8px;
	border: none;
	outline: none;
	transition: 600ms ease all;
	position: relative;
	display: inline-block;

	&:hover {
		background: #fff;

		&:before,
		&:after {
			width: 100%;
			transition: 600ms ease all;
		}
	}

	&:before,
	&:after {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		height: 2px;
		width: 0;
		transition: 400ms ease all;
	}

	&::after {
		right: inherit;
		top: inherit;
		left: 0;
		bottom: 0;
	}
}

.mixin-components-container {
	background-color: #f0f2f5;
	padding: 30px;
	min-height: calc(100vh - 84px);
}

.component-item {
	min-height: 100px;
}

.v-toolbar {
	transition: 0.6s;
}
.expand {
	height: 80px !important;
	padding-top: 10px;
}

.el-breadcrumb__inner,
.el-breadcrumb__inner a {
	font-weight: 400 !important;
}

.app-breadcrumb.el-breadcrumb {
	display: inline-block;
	font-size: 14px;
	line-height: 50px;
	margin-left: 8px;

	.no-redirect {
		color: #97a8be;
		cursor: text;
	}
}
.navbar {
  margin: 44px 104px;
  // padding: 25px;
  box-shadow: 0px 5px 37px 0px #00000014;
  border-radius: 15px 15px 15px 50px;
}
</style>

