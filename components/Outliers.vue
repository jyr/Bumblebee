<template>
  <div>
    <VegaEmbed
      :name="'hist'"
      ref="hist"
      class="hist-grid pa-0"
      style="margin: -5px;"
      v-if="data.hist_data.lower_bound"
      :data="{values: data.hist_data.lower_bound[columnName].hist}"
      :mark="{
        type: 'bar',
        tooltip: true
      }"
      :selection="{
        brush: {
          type: 'interval',
          encodings: 'x'
        }
      }"
      :height="160"
      :signals="[
        {name: 'brush'}
      ]"
      :width="770"
      :encoding="{
        x: {
          field: 'lower',
          bin: 'binned',
          type: 'quantitative'
        },
        x2: {
          field: 'upper'
        },
        y: {
          type: 'quantitative',
          field: 'count'
        },
        color: {
          condition: {
            test: `(datum['lower'] > ${selection[0] || 0}) && (datum['upper'] < ${selection[1] || upper})`,
            value: '#4db6ac'
          },
          value: 'grey'
        }
      }"
      :config="{
        view: {
          strokeWidth: 0,
          stroke: 'transparent',
          step: 13
        },
        axis: {
          titleOpacity: 0,
          domainColor: '#fff',
          title: 0,
          gridColor: '#fff',
          ticks: false,
          domainOpacity: 0,
          gridOpacity: 0,
          tickOpacity: 0,
          labelPadding: 0,
          labels: false,
        },
      }"
      @signal:brush="updateRange"
      >
    </VegaEmbed>
    <div class="range-hover" v-if="selection && selection.length==2">
      {{selection[0]}} - {{selection[1]}}, 0, 0%
    </div>
  </div>
</template>

<script>
import VegaEmbed from '@/components/VegaEmbed'
import { throttle } from '@/utils/functions.js'

export default {

  components: {
    VegaEmbed
  },

	props: {
    selection: {
      default: ()=>([0,0]),
      type: Array
    },
		data: {
			default: ()=>({}),
			type: Object
    },
    columnName: ''
	},

  methods: {
    updateRange: throttle ( async function (range) {
      var a = [...range.lower]
      var binSize = this.binSize
      var offset = this.offset
      a[0] = (Math.floor((a[0]-offset)/binSize)*binSize) +offset
      a[1] = (Math.ceil((a[1]-offset)/binSize)*binSize) +offset
      this.$emit('update:selection',a)
    },100),
  },

  computed: {
    binSize () {
      try {
        var values = this.data.hist_data.lower_bound[this.columnName].hist
        console.log('values',values)
        console.log('values[values.length-1]',values[values.length-1])
        console.log('values[0]',values[0])
        var bs = (values[values.length-1].upper-values[0].lower)/values.length
        console.log('bs',bs)
        return bs
      } catch (error) {
        console.error(error)
        return 1
      }
    },
    offset () {
      try {
        var values = this.data.hist_data.lower_bound[this.columnName].hist
        return values[0].lower
      } catch (error) {
        return 0
      }
    },
    upper () {
      var values = this.data.hist_data.lower_bound[this.columnName].hist
      return values[values.length-1].upper
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
