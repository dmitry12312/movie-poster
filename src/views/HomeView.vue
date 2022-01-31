<template>
  <div>
    <h1>Домашняя страница розовых пони</h1>
    {{ ponyColor }}
    <br>Sqrt = {{ sqr }}
    <input v-model="ponyCountModel" @input="onInputChange">
    {{ ponyCount }}
    <div v-if="this.personInfo">
      {{ personInfo.query }}
    </div>
    <div class="crypto" v-if="getBtcCurrency(currencyBtc)">
      <select class="currSel" v-model="currencyBtc" @change="setCurrencyBtc">Choose currency
        <option>USD</option>
        <option>GBP</option>
        <option>EUR</option>
      </select>
      <br><b class="btcText">{{ currencyBtc }}/BTC</b>
      {{ getBtcCurrency(currencyBtc) }}
    </div>
    <div class="crypto" v-if="getEthCurrency(currencyEth)">
      <select class="currSel" v-model="currencyEth" @change="setCurrencyEth">Choose currency
        <option>USD</option>
        <option>GBP</option>
        <option>EUR</option>
        <option>BTC</option>
      </select>
      <br><b class="ethText">{{ currencyEth }}/ETH</b>
      {{ getEthCurrency(currencyEth) }}
    </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
  name: "HomeView",
  data() {
    return {
      ponyCountModel: 0,
      currencyBtc: 'USD',
      currencyEth: 'USD',
    }
  },
  computed: {
    ...mapGetters([
      'ponyCount',
      'personInfo',
      'getBtcCurrency',
      'getEthCurrency',
    ]),
    ponyColor() {
      return this.$store.state.ponyColor;
    },
    sqr() {
      return Math.sqrt(this.$store.state.ponyCount);
    },

  },
  methods: {
    ...mapActions([
      'fetchFata',
      'btcCur',
      'ethCur',
    ]),
    onInputChange() {
      this.$store.commit('SET_PONY_COUNT', this.ponyCountModel);
    },
    setCurrencyBtc() {
      localStorage.setItem('currentCurrencyBtc', this.currencyBtc);
    },
    setCurrencyEth() {
      localStorage.setItem('currentCurrencyEth', this.currencyEth);
    }
  },
  created() {
    this.ponyCountModel = this.ponyCount;
    this.fetchFata();
    this.btcCur();
    this.ethCur();
    this.currencyBtc = localStorage.getItem('currentCurrencyBtc') ? localStorage.getItem('currentCurrencyBtc') : 'USD';
    this.currencyEth = localStorage.getItem('currentCurrencyEth') ? localStorage.getItem('currentCurrencyEth') : 'USD';
  },
}

</script>

<style scoped>
.crypto {
  display: inline-block;
  justify-content: center;
  left: 44%;
  width: 15%;
  margin: 1%;
  padding: 1px;
  border: solid rgba(204, 138, 181, 0.85);
}
.currSel{
  border: none;
}
</style>