<template>
  <div id="vis" class="vega-component">
  </div>
</template>

<script>

export default {

  props: {
    spec: {
      type: Object
    },
    $schema: {
      type: String,
      default: 'https://vega.github.io/schema/vega-lite/v4.0.0-beta.2.json'
    },
    autosize: {
      type: [String, Object]
    },
    background: {
      type: String
    },
    padding: {
      type: [Number, Object]
    },
    config: {
      type: Object
    },
    data: {
      type: [Object, Array]
    },
    description: {
      type: String
    },
    encoding: {
      type: Object
    },
    height: {
      type: [Object, Number, String]
    },
    mark: {
      type: [Object, String]
    },
    name: {
      type: String
    },
    selection: {
      type: Object
    },
    title: {
      type: [String]
    },
    transform: {
      type: Array
    },
    width: {
      type: [Object, Number, String]
    },
    layer: {
      type: Array
    },
    resolve: {
      type: Object
    }
  },

  mounted () {
    const vega = require('vega')
    const vegaLite = require('vega-lite')
    const VegaEmbed = require('vega-embed').default

    let vlSpec = {
      spec: this.spec,
      $schema: this.$schema,
      autosize: this.autosize,
      background: this.background,
      padding: this.padding,
      config: this.config,
      data: this.data,
      description: this.description,
      encoding: this.encoding,
      height: this.height,
      mark: this.mark,
      name: this.name + Math.random()*2,
      selection: this.selection,
      title: this.title,
      transform: this.transform,
      width: this.width,
      layer: this.layer,
      resolve: this.resolve,
    };

    let options = {
      // renderType: 'svg',
      // renderer: 'svg'
    }

    VegaEmbed(this.$el, vlSpec, options);
  },

  methods: {

    addSignalEmitter (vegaView, spec, component) {
      const {signals} = spec
      if (signals && signals.length > 0) {
        signals.forEach(signal => {
          vegaView.addSignalListener(signal.name, (name, value) => {
            component.$emit(`signal:${name}`, value)
          })
        })
      }
    }

  },

  computed: {
    dataUrl () {
      let url
      if (this.data && this.data.url) {
        url = this.data.url
      }
      return url
    }
  }
}
</script>
