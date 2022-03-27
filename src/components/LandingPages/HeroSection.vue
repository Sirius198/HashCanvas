<template>
	<section id="hero-section" style="">
    <div class="desktop-container">
      <el-row :gutter="10">
        <el-col :span="12">
          <div class="">
            <p>HashCanvas <span style="background: #1890FF;color:#fff;border-top-right-radius:15px;padding:5px;">Beta</span></p>
            <h1 style="color:#1890ff; font-size:55px; line-height: 70px; margin-top:9px;">
              Free crypto alerts <br/>
              forever for any<br/>
              strategy
            </h1>
          </div>
        </el-col>

        <el-col :span="12">
          <img src="../../assets/img/hero.svg" style="width: 100%;" />
        </el-col>
      </el-row>

      <el-row type="flex" class="row-bg" justify="space-between" style="margin-top: 150px">
        <el-col :span="8">
          <div class="hero-button">
            <div class="text-center">
              <img src="../../assets/img/landing-page/hero-icon-1.svg" />
            </div>
            <p class="text-center">Free Alerts</p>
          </div>
        </el-col>

        <el-col :span="8">
          <div class="hero-button">
            <div class="text-center">
              <img src="../../assets/img/landing-page/hero-icon-1.svg" />
            </div>
            <p class="text-center">100% Secure</p>
          </div>
        </el-col>

        <el-col :span="8">
          <div class="hero-button">
            <div class="text-center">
              <img src="../../assets/img/landing-page/hero-icon-1.svg" />
            </div>
            <p class="text-center">Unlimited symbols and timeframes</p>
          </div>
        </el-col>
      </el-row>
      
    </div>

    <div class="hero-footer">
      <div class="desktop-container">
        <p class="text-center"><bold>Hashcanvas</bold> is on a journey to levelling up your <bold>Trading</bold>, we are bringing to you a industry leading auto trading <bold>Features</bold> to you, leading algorithms, robo trading, range and smart trades at <bold>your fingertips</bold>.</p>
      </div>
    </div>
	</section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
	name: "HeroSection",
	components: {},
})
export default class extends Vue {
	resize() {
		// Handle resize
	}

  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
#hero-section {
  margin-top: 200px;
}

.hero-button {
  border:1px solid #1890ff;
  background: #fff;
  border-radius: 30px;
  margin: 0 20px;

  img {
    margin-top: 65px;
  }

  p {
    min-height: 100px;
    font-size: 22px;
    font-weight: 500;
    line-height: 33px;
  }
}

.hero-footer {
  background: #1890FF;
  padding: 170px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100px;
    left: 0;
    top: -100px;
    background: #1890FF;
    z-index: -1;
  }

  p {
    color: #f0f0f0;
    font-size: 25px;
    line-height: 45px;

    bold {
      font-weight: bold;
      color: #fff;
    }
  }
}
</style>
