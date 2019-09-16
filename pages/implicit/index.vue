
<script>
export default {
  async beforeMount () {
    await this.$auth.handleAuthentication()
    this.$router.replace({
      path: this.$auth.getFromUri()
    })
  },

  render: ()=>{}
}
</script>
