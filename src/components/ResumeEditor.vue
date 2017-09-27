<template>
  <div id="resumeEditor">
    <ol class="controls">
      <li v-for="item in resume.config"
          :class="{active:item.field===selected}"
          @click="selected =item.field">
        <svg class="icon">
          <use :xlink:href="'#icon-'+item.icon"></use>
        </svg>
      </li>
    </ol>
    <ul class="panes">
      <li v-for="item in resume.config"
          v-show="item.field===selected">
        <div v-if="resume[item.field] instanceof Array">
          <div class="subitem" v-for="(subitem,index) in resume[item.field]">
            <div class="resumefield" v-for="(value,key) in subitem">
              <label>{{key}}</label>
              <input type="text" :value="value" @input="value=changeResume(``,$event.target.value)">
            </div>
            <hr>
          </div>
        </div>
        <div v-else class="resumefield" v-for="(value,key) in resume[item.field]">
          <label>{{key}}</label>
          <input type="text" :value="value" @input="value=changeResume(``)">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    computed:{
      resume(){
        return this.$store.state.resume
      },
      selected:{
        get(){
          return this.$store.state.selected
        },
        set(value){
          return this.$store.commit('switchTab',value)
        }
      }
    },
    methods:{
      changeResume(path,value){
        return this.$store.commit('updateRusume',{path,value})

      }
    }
  }

</script>

<style lang="scss">
  .icon {
    width: 40px;
    height: 40px;
    vertical-align: middle;
    fill: white;
  }

  #resumeEditor {
    min-width: 360px;
    border: 1px solid;
    margin-right: 8px;
    background: white;
    border-radius: 5px;
    display: flex;
    > .controls {
      background: black;
      width: 80px;
      display: flex;
      flex-direction: column;
      align-items: center;
      > li {
        padding: 16px 0;
        width: 100%;
        text-align: center;
        &.active {
          background: white;
          > .icon {
            fill: black;
          }
        }
      }
    }
    > .panes {
      > li {
        padding: 24px;
        .resumefield {
          > label {
            display: block;
          }
          > input[type=text] {
            margin: 16px 0;
            border: 1px solid #ddd;
            box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.25);
            width: 100%;
            height: 40px;
            padding: 0 8px;
          }
        }
      }

    }
  }
</style>
