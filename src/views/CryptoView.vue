<template>
  <h1>Hello to our crypto world</h1>
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
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CryptoView",
  data() {
    return {
      ponyCountModel: 0,
      currencyBtc: 'USD',
      currencyEth: 'USD',
    }
  },
  computed: {
    ...mapGetters([
        'getBtcCurrency',
        'getEthCurrency',
    ])
  },
  methods:{
    ...mapActions([
      'btcCur',
      'ethCur',
    ]),
    setCurrencyBtc() {
      localStorage.setItem('currentCurrencyBtc', this.currencyBtc);
    },
    setCurrencyEth() {
      localStorage.setItem('currentCurrencyEth', this.currencyEth);
    },
  },
  created() {

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
  color: rgba(128, 128, 128, 0.99);
}
.currSel{
  border: none;
  color: rgba(128, 128, 128, 0.99);
}
h1{
  color: rgba(128, 128, 128, 0.99);
}
</style>