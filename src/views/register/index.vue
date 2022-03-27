<template>
  <div class="registration-container">
    <el-form
      ref="registrationForm"
      :model="registrationForm"
      :rules="registrationRules"
      class="registration-form"
      autocomplete="on"
      label-position="left"
    >
    <div>
        <el-button
          class="el-button el-button--primary"
          type="primary"
          @click.native.prevent="handleLogin"
        >
          {{ $t('login.title') }}
        </el-button>
      </div>
      <div class="title-container">
        <h3 class="title">
          {{ $t('registration.title') }}
        </h3>
        <lang-select class="set-language" />
      </div>
      <el-form-item prop="nickname">
        <span class="svg-container">
          <svg-icon name="user" />
        </span>
        <el-input
          ref="nickname"
          v-model="registrationForm.nickname"
          :placeholder="$t('registration.nickname')"
          name="nickname"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>
      <el-form-item prop="email">
        <span class="svg-container">
          <svg-icon name="email" />
        </span>
        <el-input
          ref="email"
          v-model="registrationForm.email"
          :placeholder="$t('registration.email')"
          name="email"
          type="text"
          tabindex="3"
          autocomplete="on"
        />
      </el-form-item>
      <el-tooltip
        v-model="capsTooltip"
        content="Caps lock is On"
        placement="right"
        manual
      >
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon name="password" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="registrationForm.password"
            :type="passwordType"
            :placeholder="$t('registration.password')"
            name="password"
            tabindex="2"
            autocomplete="on"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
            @keyup.enter.native="handleRegistration"
          />
          <span
            class="show-pwd"
            @click="showPwd"
          >
            <svg-icon :name="passwordType === 'password' ? 'eye-off' : 'eye-on'" />
          </span>
        </el-form-item>
      </el-tooltip>
      <el-button
        :loading="loading"
        type="primary"
        style="width:100%; margin-bottom:30px;"
        @click.native.prevent="handleRegistration"
      >
        {{ $t('registration.Reg') }}
      </el-button>
      <div style="position:relative">
        <div class="tips">
          <span>{{ $t('registration.username') }} : admin </span>
          <span>{{ $t('registration.password') }} : {{ $t('registration.any') }} </span>
        </div>
        <div class="tips">
          <span>{{ $t('registration.username') }} : editor </span>
          <span>{{ $t('registration.password') }} : {{ $t('registration.any') }} </span>
        </div>
        <div class="tips">
          <span>{{ $t('registration.username') }} : user </span>
          <span>{{ $t('registration.password') }} : {{ $t('registration.any') }} </span>
        </div>
        <el-button
          class="thirdparty-button"
          type="primary"
          @click="showDialog=true"
        >
          {{ $t('registration.thirdparty') }}
        </el-button>
      </div>
    </el-form>

    <el-dialog
      :title="$t('registration.thirdparty')"
      :visible.sync="showDialog"
    >
      {{ $t('registration.thirdpartyTips') }}
      <br>
      <br>
      <br>
      <social-sign />
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'
import { Dictionary } from 'vue-router/types/router'
import { Form as ElForm, Input } from 'element-ui'
import { UserModule } from '@/store/modules/user'
import { hasOneNumber, isValidUsername, isValidEmail, isValid8Size, isValid4Size, isValidNickname, hasLowerCase, hasUpperCase } from '@/utils/validate'
import LangSelect from '@/components/LangSelect/index.vue'

@Component({
  name: 'Register',
  components: {
    LangSelect
  }
})

export default class extends Vue {
  private validateUsername = (rule: any, value: string, callback: Function) => {
    if (!isValidUsername(value)) {
      callback(new Error('Please enter the correct user type'))
    } else {
      callback()
    }
  }

  private validateNickname = (rule: any, value: string, callback: Function) => {
    if (!isValidNickname(value) && !isValid4Size(value)) {
      callback(new Error('Please enter a valid username with more than 4 characters'))
    } else {
      callback()
    }
  }

    private validateEmail = (rule: any, value: string, callback: Function) => {
    if (!isValidEmail(value)) {
      callback(new Error('Please enter a valid email'))
    } else {
      callback()
    }
  }

  private validatePassword = (rule: any, value: string, callback: Function) => {
    if (!isValid8Size(value)) {
      callback(new Error('The password can not be less than 8 digits'))
    }
    if (!hasLowerCase(value)) {
      callback(new Error('One lowercase letter required.'))
    }
    if (!hasUpperCase(value)) {
      callback(new Error('One uppercase letter required.'))
    }
    if (!hasOneNumber(value)) {
      callback(new Error('One number required.'))
    } else {
      callback()
    }
  }

  private registrationForm = {
    username: 'user',
    nickname: '',
    email: '',
    password: ''
  }

  private registrationRules = {
    username: [{ validator: this.validateUsername, trigger: 'blur' }],
    nickname: [{ validator: this.validateNickname, trigger: 'blur' }],
    email: [{ validator: this.validateEmail, trigger: 'blur' }],
    password: [{ validator: this.validatePassword, trigger: 'blur' }]
  }

  private passwordType = 'password'
  private loading = false
  private showDialog = false
  private capsTooltip = false
  private redirect?: string
  private otherQuery: Dictionary<string> = {}

  @Watch('$route', { immediate: true })
  private onRouteChange(route: Route) {
    // TODO: remove the "as Dictionary<string>" hack after v4 release for vue-router
    // See https://github.com/vuejs/vue-router/pull/2050 for details
    const query = route.query as Dictionary<string>
    if (query) {
      this.redirect = query.redirect
      this.otherQuery = this.getOtherQuery(query)
    }
  }

  mounted() {
    if (this.registrationForm.nickname === '') {
      (this.$refs.nickname as Input).focus()
    } else if (this.registrationForm.email === '') {
      (this.$refs.email as Input).focus()
    } else if (this.registrationForm.password === '') {
      (this.$refs.password as Input).focus()
    }
  }

  private checkCapslock(e: KeyboardEvent) {
    const { key } = e
    this.capsTooltip = key !== null && key.length === 1 && (key >= 'A' && key <= 'Z')
  }

  private showPwd() {
    if (this.passwordType === 'password') {
      this.passwordType = ''
    } else {
      this.passwordType = 'password'
    }
    this.$nextTick(() => {
      (this.$refs.password as Input).focus()
    })
  }

  private handleLogin() {
    this.$router.push('login')
  }

  private handleRegistration() {
    (this.$refs.registrationForm as ElForm).validate(async(valid: boolean) => {
      if (valid) {
        this.loading = true
        await UserModule.Register(this.registrationForm)
        this.$router.push({
          path: this.redirect || '/',
          query: this.otherQuery
        }).catch(err => {
          console.warn(err)
        })
        // Just to simulate the time of the request
        setTimeout(() => {
          this.loading = false
        }, 0.5 * 1000)
      } else {
        return false
      }
    })
  }

  private getOtherQuery(query: Dictionary<string>) {
    return Object.keys(query).reduce((acc, cur) => {
      if (cur !== 'redirect') {
        acc[cur] = query[cur]
      }
      return acc
    }, {} as Dictionary<string>)
  }
}
</script>

<style lang="scss">
// References: https://www.zhangxinxu.com/wordpress/2018/01/css-caret-color-first-line/
@supports (-webkit-mask: none) and (not (cater-color: $loginCursorColor)) {
  .registration-container .el-input {
    input { color: $loginCursorColor; }
    input::first-line { color: $lightGray; }
  }
}

.registration-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      height: 47px;
      background: transparent;
      border: 0px;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $lightGray;
      caret-color: $loginCursorColor;
      -webkit-appearance: none;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $loginBg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
.registration-container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: $loginBg;

  .registration-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $darkGray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $lightGray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }

    .set-language {
      color: #fff;
      position: absolute;
      top: 3px;
      font-size: 18px;
      right: 0px;
      cursor: pointer;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $darkGray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>
