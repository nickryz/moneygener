<template>
  <div class="range-block">
    <div class="range-block__header-row">
      <div class="range-block__input-wrap">
        <span class="range-block__input-cur" v-if="valueIcon">
          {{
          valueIcon
          }}
        </span>
        <input
          type="text"
          class="range-block__input"
          :value="$store.getters.formatNum(value)"
          @change="normalizeNumValue"
          @focus="$event.target.value = value"
          @blur="$event.target.value = $store.getters.formatNum(value)"
        />
      </div>
      <div class="range-block__title-wrap">
        <h3 class="range-block__title">{{ title }}</h3>
      </div>
    </div>
    <div class="range-block__range-row">
      <div class="range-block__range-btn left" @click="handleSteps('-')">
        <img :src="require(`@/assets/icons/minus.svg`)" alt="minus" />
      </div>
      <div class="range-block__range-btn right" @click="handleSteps('+')">
        <img :src="require(`@/assets/icons/plus.svg`)" alt="plus" />
      </div>
      <div class="range" ref="slider"></div>
    </div>
  </div>
</template>

<script>
import noUiSlider from 'nouislider'

export default {
  name: 'SumRange',
  props: {
    value: [String, Number],
    slider: {
      type: Object,
      required: true
    },
    title: String,
    valueIcon: [Boolean, String]
  },
  data () {
    return {
      Slider: null
    }
  },
  methods: {
    normalizeNumValue (e) {
      const val = +e.target.value
      if (!val && val !== 0) {
        e.target.value = this.$store.getters.formatNum(+this.Slider.get())
      } else if (val < this.Slider.options.pips.values[0]) {
        this.Slider.set(+this.Slider.options.pips.values[0])
      } else if (
        val >
        this.Slider.options.pips.values[
          this.Slider.options.pips.values.length - 1
        ]
      ) {
        this.Slider.set(
          +this.Slider.options.pips.values[
            this.Slider.options.pips.values.length - 1
          ]
        )
      } else {
        this.Slider.set(val)
      }
      e.target.value = this.$store.getters.formatNum(+this.Slider.get())
      e.target.blur()
    },
    handleSteps (dir) {
      const steps = this.Slider.steps()[0]

      if (dir === '+') {
        this.Slider.set(this.value + steps[1])
      } else if (dir === '-') {
        this.Slider.set(this.value - steps[0])
      } else {
      }
    }
  },
  mounted: function () {
    // create
    this.Slider = noUiSlider.create(this.$refs.slider, this.slider)

    this.Slider.on('update', values => {
      this.$emit('update:value', +this.Slider.get())
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.range-block__header-row {
  display: flex;
  margin-bottom: 20px;
}
.range-block__title-wrap {
  display: flex;
  align-items: center;
  margin: 0 0 0 40px;
  padding-left: 40px;
  border-left: 4px dotted $gray;

  @include sm {
    margin: 0 0 0 20px;
    padding-left: 20px;
  }
}
.range-block__title {
  font-size: 2rem;
  color: $gray;

  @include sm {
    font-size: 1.5rem;
  }
}
.range-block__input-wrap {
  max-width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  // border: 3px solid $gray;
  color: $lightGray;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  @include sm {
    max-width: 140px;
  }
}
.range-block__input-cur {
  font-size: 1.5rem;
  font-weight: 700;
  display: inline-block;
}
.range-block__input {
  margin-left: 5px;
  background: transparent;
  border: none;
  outline: none;
  font-weight: 700;
  line-height: 0.7;
  font-size: 1.5rem;
  display: inline;
  max-width: 80%;
  color: $lightGray;
  text-align: center;

  @include sm {
    font-size: 1.5rem;
  }
}

.range-block__range-row {
  padding: 0 60px;
  position: relative;

  @include sm {
    padding: 0 40px;
  }
}
.range-block__range-btn {
  width: 34px;
  height: 34px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: 700;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  user-select: none;

  @include sm {
    width: 24px;
    height: 24px;
  }

  &.left {
    left: 0;
  }
  &.right {
    right: 0;
  }
  img {
    width: 16px;
    @include sm {
      width: 12px;
    }
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
    background: rgb(114, 236, 250);
  }
}

/*! nouislider - 14.1.1 - 12/15/2019 */
.noUi-target,
.noUi-target * {
  touch-action: none;
  user-select: none;
  box-sizing: border-box;
}
.noUi-target {
  position: relative;
}
.noUi-base,
.noUi-connects {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
}
.noUi-connects {
  overflow: hidden;
  z-index: 0;
}
.noUi-connect,
.noUi-origin {
  will-change: transform;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  transform-origin: 0 0;
  transform-style: flat;
}
.noUi-connect {
  height: 100%;
  width: 100%;
}
.noUi-origin {
  height: 10%;
  width: 10%;
}
.noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {
  left: 0;
  right: auto;
}
.noUi-vertical .noUi-origin {
  width: 0;
}
.noUi-horizontal .noUi-origin {
  height: 0;
}
.noUi-handle {
  backface-visibility: hidden;
  position: absolute;
}
.noUi-touch-area {
  height: 100%;
  width: 100%;
}
.noUi-state-tap .noUi-connect,
.noUi-state-tap .noUi-origin {
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
}
.noUi-state-drag * {
  cursor: inherit !important;
}
.noUi-horizontal {
  height: 18px;
}
.noUi-horizontal .noUi-handle {
  width: 34px;
  height: 34px;
  right: -17px;
  top: -9px;

  @include sm {
    width: 24px;
    height: 24px;
    right: -12px;
    top: -3.5px;
  }
}
.noUi-vertical {
  width: 18px;
}
.noUi-vertical .noUi-handle {
  width: 28px;
  height: 34px;
  right: -6px;
  top: -17px;
}
.noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {
  left: -17px;
  right: auto;
}
.noUi-target {
  border-radius: 30px;
  // background: #efefef;
  background: repeating-linear-gradient(
    135deg,
    #efefef,
    #efefef 10px,
    rgb(255, 255, 255) 10px,
    rgb(255, 255, 255) 20px
  );
  // border: 0.5px solid #d3d3d3;
  box-shadow: inset 0 0 4px #bbbbbb;
}
.noUi-connects {
  border-radius: 30px;
}
.noUi-connect {
  background: #fedf3d;
  // box-shadow: inset 0 1px 1px #f0f0f0, 0 3px 6px -5px #bbb;
}
.noUi-draggable {
  cursor: ew-resize;
}
.noUi-vertical .noUi-draggable {
  cursor: ns-resize;
}
.noUi-handle {
  background: #fff;
  box-shadow: inset 0 1px 3px #e9e9e9, 0 3px 6px -3px #aaa;
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  cursor: default;
  outline: none;
  transition: 0.2s transform ease-in-out;
}
.noUi-active {
  transform: scale(1.2);
}
.noUi-handle:after,
.noUi-handle:before {
  // content: "";
  display: block;
  position: absolute;
  height: 14px;
  width: 1px;
  background: #e8e7e6;
  left: 14px;
  top: 6px;
}
.noUi-handle:after {
  left: 17px;
}
.noUi-vertical .noUi-handle:after,
.noUi-vertical .noUi-handle:before {
  width: 14px;
  height: 1px;
  left: 6px;
  top: 14px;
}
.noUi-vertical .noUi-handle:after {
  top: 17px;
}
[disabled] .noUi-connect {
  background: #b8b8b8;
}
[disabled].noUi-handle,
[disabled] .noUi-handle,
[disabled].noUi-target {
  cursor: not-allowed;
}
.noUi-pips,
.noUi-pips * {
  box-sizing: border-box;
}
.noUi-pips {
  position: absolute;
  color: $gray;
}
.noUi-value {
  position: absolute;
  white-space: nowrap;
  text-align: center;
}
.noUi-value-sub {
  color: #ccc;
  font-size: 10px;
}
.noUi-marker {
  position: absolute;
  background: $gray;
}
.noUi-marker-large,
.noUi-marker-sub {
  background: #fedf3d;
}
.noUi-pips-horizontal {
  padding: 10px 0;
  // height: 80px;
  top: 100%;
  left: 0;
  width: 100%;
}
.noUi-value-horizontal {
  transform: translate(-50%, 120%);
}
.noUi-rtl .noUi-value-horizontal {
  transform: translate(50%, 50%);
}
.noUi-marker-horizontal.noUi-marker {
  margin-left: -0.5px;
  width: 1px;
  height: 5px;
}
.noUi-marker-horizontal.noUi-marker-sub {
  height: 10px;
}
.noUi-marker-horizontal.noUi-marker-large {
  height: 15px;
}
.noUi-pips-vertical {
  padding: 0 10px;
  height: 100%;
  top: 0;
  left: 100%;
}
.noUi-value-vertical {
  transform: translateY(-50%);
  padding-left: 25px;
}
.noUi-rtl .noUi-value-vertical {
  transform: translateY(50%);
}
.noUi-marker-vertical.noUi-marker {
  width: 5px;
  height: 2px;
  margin-top: -1px;
}
.noUi-marker-vertical.noUi-marker-sub {
  width: 10px;
}
.noUi-marker-vertical.noUi-marker-large {
  width: 15px;
}
.noUi-tooltip {
  display: block;
  position: absolute;
  border: 1px solid #d9d9d9;
  border-radius: 30px;
  background: #fff;
  color: #000;
  padding: 5px;
  text-align: center;
  white-space: nowrap;
}
.noUi-horizontal .noUi-tooltip {
  transform: translate(-50%);
  left: 50%;
  bottom: 120%;
}
.noUi-vertical .noUi-tooltip {
  transform: translateY(-50%);
  top: 50%;
  right: 120%;
}
.noUi-value-large {
  font-weight: 700;
  font-size: 0.925rem;

  @include sm {
    font-size: 0.75rem;
  }
}

// range mini

.range-mini {
  margin-bottom: 50px;

  .range-block__input-wrap {
    border-width: 2px;

    @include lg {
      max-width: 120px;
    }
  }

  .range-block__input {
    font-size: 1.2rem;

    @include sm {
      font-size: 1.2rem;
    }
  }

  .range-block__input-cur {
    font-size: 1.2rem;

    @include sm {
      font-size: 1.2rem;
    }
  }
  .range-block__title-wrap {
    @include lg {
      padding-left: 20px;
      margin: 0 0 0 20px;
    }
  }

  .range-block__title {
    font-size: 2rem;

    @include sm {
      font-size: 1.2rem;
    }
  }
  .range-block__header-row {
    margin-bottom: 15px;
  }
  .noUi-value-large {
    font-size: 0.725rem;
  }
  .noUi-value-horizontal {
    transform: translate(-50%, 100%);
  }
  .noUi-marker-horizontal.noUi-marker-large {
    height: 10px;
  }
  .noUi-horizontal {
    height: 10px;
  }
  .noUi-horizontal .noUi-handle {
    width: 20px;
    height: 20px;
    top: -5px;
    right: -10px;
  }
  .range-block__range-row {
    padding: 0 30px;
  }
  .range-block__range-btn {
    width: 20px;
    height: 20px;

    img {
      width: 10px;
    }
  }
}
</style>
