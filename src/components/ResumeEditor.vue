<!--https://tcitds1.github.io/Vue/resumer-beta1/dist/index.html#/-->
<template>
  <div id="resumeEditor">
    <ol class="controls">
      <li v-for="item in resume.config"
          :class="{active:item.field===selected}"
          @click="selected =item.field">
        <svg class="icon-control">
          <use :xlink:href="'#icon-'+item.icon"></use>
        </svg>
      </li>
    </ol>
    <ul class="panes">
      <li v-for="item in resume.config"
          v-show="item.field===selected">
        <h3 class="head-list">{{item.head}}</h3>
        <div v-if="resume[item.field] instanceof Array">
          <div class="subitem" v-for="(subitem,index) in resume[item.field]">
            <div class="resumefield" v-for="(value,key) in subitem">
                <label>{{key}}
                  <!--<i v-if="item.isAddOrRemove &&key===Object.keys(subitem)[Object.keys(subitem).length-1]"-->
                     <!--@click="addRow(item.field)"><svg class="icon-add-remove"><use xlink:href="#icon-add"></use></svg></i>-->
                </label>
              <div v-if="typeof value === 'object'" class="isIcon">
                <div v-for="(x,nindex) in value" class="icon-num">
                  <div v-if="nindex!==value.length-1">
                    <i @click="removeRow(item.field,key,index)" class="icon-p"><svg class="icon-add-remove"><use xlink:href="#icon-remove"></use></svg></i>
                    <input type="text" :class="x" :value="value[nindex]" @input="value=changeResume(`${item.field}.${index}.${key}.${nindex}`,$event.target.value)">
                  </div>
                  <div v-else>
                    <i @click="addRow(item.field,key,index)" class="icon-p"><svg class="icon-add-remove"><use xlink:href="#icon-add"></use></svg></i>
                    <input type="text" :class="x" :value="value[nindex]" @input="value=changeResume(`${item.field}.${index}.${key}.${nindex}`,$event.target.value)">
                  </div>
                </div>
              </div>
              <div v-else>
                <input type="text" :value="value" @input="value=changeResume(`${item.field}.${index}.${key}`,$event.target.value)">
              </div>
            </div>
            <hr>
            <el-button type="success" @click="add(item.field,subitem)"
                       v-if="index === resume[item.field].length-1">add</el-button>
            <el-button type="danger" @click="remove(item.field)"
                       v-if="index === resume[item.field].length-1 &&index!==0">remove</el-button>
          </div>
        </div>
        <div v-else class="resumefield" v-for="(value,key) in resume[item.field]">
          <label>{{key}}</label>
          <input type="text" :value="value" @input="value=changeResume(`${item.field}.${key}`,$event.target.value)">
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
        return this.$store.commit('updateResume',{path,value})
      },
      add(field,subitem){
        return this.$store.commit('addTerm',{field,subitem})
      },
      remove(field){
        return this.$store.commit('removeTerm',field)
      },
      addRow(field,key,index){
        return this.$store.commit('addRow',{field,key,index})
      },
      removeRow(field,key,index){
        return this.$store.commit('removeRow',{field,key,index})
      }
    },
  }

</script>

<style lang="scss">
  hr{
    margin: 10px 0;
  }
  input{
    border: none;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    -webkit-appearance: none;
  }
  .icon-control {
    width: 40px;
    height: 40px;
    vertical-align: middle;
    fill: white;
  }
  .icon-add-remove{
    width: 25px;
    height: 25px;
    vertical-align: middle;
  }
  #resumeEditor {
    width: 400px;
    border: 1px solid;
    margin-right: 8px;
    background: white;
    border-radius: 5px;
    display: flex;
    > .controls {
      background: #1f2d3d;
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
          > .icon-control {
            fill: black;
          }
        }
      }
    }
    > .panes {
      flex:1;
      > li {
        padding: 24px;
        overflow:auto;
        height:100%;
        .head-list{
          margin-bottom:20px;
          text-align:center;
        }
        .resumefield {
           label {
            display: block;
            font-size:14px;
             color:#555;
          }
           .isIcon{
             .icon-num{
               position:relative;
             }
             .icon-p{
               position:absolute;
               right:0;
               top:0;
               transform:translateY(-35%);
             }
           }
           input[type=text] {
            margin: 16px 0;
            box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.25);
            width: 100%;
            height: 40px;
            padding: 0 8px;
          }
        }
      }

    }
  }
</style>
